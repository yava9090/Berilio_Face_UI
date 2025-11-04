import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import mapboxgl, { LngLatLike, MapboxGeoJSONFeature } from 'mapbox-gl';
import type { Point } from 'geojson';
import {
    Observable,
    catchError,
    defer,
    map,
    of,
    shareReplay,
    switchMap,
} from 'rxjs';

interface RuntimeConfig {
    mapboxAccessToken?: string;
    mapboxStyleUrl?: string;
}

interface MapboxConfiguration {
    accessToken: string;
    styleUrl: string;
}

export interface MapboxGeocodingFeature extends MapboxGeoJSONFeature {
    center?: [number, number];
    geometry: Point;
}

interface GeocodingResponse {
    features: MapboxGeocodingFeature[];
}

@Injectable({ providedIn: 'root' })
export class MapboxService {
    private readonly _http = inject(HttpClient);

    private readonly _config$ = defer(() =>
        this._http
            .get<RuntimeConfig>('config/runtime-config.local.json')
            .pipe(
                catchError(() =>
                    this._http.get<RuntimeConfig>('config/runtime-config.json')
                )
            )
    ).pipe(shareReplay(1));

    private readonly _mapConfig$ = this._config$.pipe(
        map((config): MapboxConfiguration => {
            const accessToken =
                config.mapboxAccessToken || environment.mapboxAccessToken || '';

            const styleUrl =
                config.mapboxStyleUrl || environment.mapboxStyleUrl || 'mapbox://styles/mapbox/streets-v12';

            if (!accessToken) {
                throw new Error(
                    'Falta configurar el token de Mapbox. Define mapboxAccessToken en environment o en config/runtime-config.json.'
                );
            }

            return { accessToken, styleUrl };
        }),
        shareReplay(1)
    );

    initialize(): Observable<MapboxConfiguration> {
        return this._mapConfig$.pipe(
            map((config) => {
                if (mapboxgl.accessToken !== config.accessToken) {
                    mapboxgl.accessToken = config.accessToken;
                }
                return config;
            })
        );
    }

    geocode(query: string): Observable<MapboxGeocodingFeature[]> {
        if (!query.trim()) {
            return of([]);
        }

        return this._mapConfig$.pipe(
            switchMap(({ accessToken }) =>
                this._http.get<GeocodingResponse>(
                    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
                        encodeURIComponent(query) +
                        '.json',
                    {
                        params: {
                            access_token: accessToken,
                            country: 'CO',
                            language: 'es',
                            limit: 5,
                        },
                    }
                )
            ),
            map((response) => response.features ?? [])
        );
    }

    createMap(
        container: HTMLElement,
        center: LngLatLike,
        styleUrl: string,
        zoom = 13
    ): mapboxgl.Map {
        return new mapboxgl.Map({
            container,
            style: styleUrl,
            center,
            zoom,
            attributionControl: true,
        });
    }
}
