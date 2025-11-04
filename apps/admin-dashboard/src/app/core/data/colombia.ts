export interface DepartmentOption {
    code: number;
    name: string;
}

export interface MunicipalityOption {
    id: number;
    name: string;
    departmentCode: number;
}

export const COLOMBIA_DEPARTMENTS: DepartmentOption[] = [
    {
        "code": 5,
        "name": "ANTIOQUIA"
    },
    {
        "code": 8,
        "name": "ATLÁNTICO"
    },
    {
        "code": 11,
        "name": "BOGOTÁ, D.C."
    },
    {
        "code": 13,
        "name": "BOLÍVAR"
    },
    {
        "code": 15,
        "name": "BOYACÁ"
    },
    {
        "code": 17,
        "name": "CALDAS"
    },
    {
        "code": 18,
        "name": "CAQUETÁ"
    },
    {
        "code": 19,
        "name": "CAUCA"
    },
    {
        "code": 20,
        "name": "CESAR"
    },
    {
        "code": 23,
        "name": "CÓRDOBA"
    },
    {
        "code": 25,
        "name": "CUNDINAMARCA"
    },
    {
        "code": 27,
        "name": "CHOCÓ"
    },
    {
        "code": 41,
        "name": "HUILA"
    },
    {
        "code": 44,
        "name": "LA GUAJIRA"
    },
    {
        "code": 47,
        "name": "MAGDALENA"
    },
    {
        "code": 50,
        "name": "META"
    },
    {
        "code": 52,
        "name": "NARIÑO"
    },
    {
        "code": 54,
        "name": "NORTE DE SANTANDER"
    },
    {
        "code": 63,
        "name": "QUINDIO"
    },
    {
        "code": 66,
        "name": "RISARALDA"
    },
    {
        "code": 68,
        "name": "SANTANDER"
    },
    {
        "code": 70,
        "name": "SUCRE"
    },
    {
        "code": 73,
        "name": "TOLIMA"
    },
    {
        "code": 76,
        "name": "VALLE DEL CAUCA"
    },
    {
        "code": 81,
        "name": "ARAUCA"
    },
    {
        "code": 85,
        "name": "CASANARE"
    },
    {
        "code": 86,
        "name": "PUTUMAYO"
    },
    {
        "code": 88,
        "name": "ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA"
    },
    {
        "code": 91,
        "name": "AMAZONAS"
    },
    {
        "code": 94,
        "name": "GUAINÍA"
    },
    {
        "code": 95,
        "name": "GUAVIARE"
    },
    {
        "code": 97,
        "name": "VAUPÉS"
    },
    {
        "code": 99,
        "name": "VICHADA"
    }
];

export const COLOMBIA_MUNICIPALITIES: MunicipalityOption[] = [
    {
        "id": 1,
        "name": "Abriaquí",
        "departmentCode": 5
    },
    {
        "id": 2,
        "name": "Acacías",
        "departmentCode": 50
    },
    {
        "id": 3,
        "name": "Acandí",
        "departmentCode": 27
    },
    {
        "id": 4,
        "name": "Acevedo",
        "departmentCode": 41
    },
    {
        "id": 5,
        "name": "Achí",
        "departmentCode": 13
    },
    {
        "id": 6,
        "name": "Agrado",
        "departmentCode": 41
    },
    {
        "id": 7,
        "name": "Agua de Dios",
        "departmentCode": 25
    },
    {
        "id": 8,
        "name": "Aguachica",
        "departmentCode": 20
    },
    {
        "id": 9,
        "name": "Aguada",
        "departmentCode": 68
    },
    {
        "id": 10,
        "name": "Aguadas",
        "departmentCode": 17
    },
    {
        "id": 11,
        "name": "Aguazul",
        "departmentCode": 85
    },
    {
        "id": 12,
        "name": "Agustín Codazzi",
        "departmentCode": 20
    },
    {
        "id": 13,
        "name": "Aipe",
        "departmentCode": 41
    },
    {
        "id": 14,
        "name": "Albania",
        "departmentCode": 18
    },
    {
        "id": 15,
        "name": "Albania",
        "departmentCode": 44
    },
    {
        "id": 16,
        "name": "Albania",
        "departmentCode": 68
    },
    {
        "id": 17,
        "name": "Albán",
        "departmentCode": 25
    },
    {
        "id": 18,
        "name": "Albán (San José)",
        "departmentCode": 52
    },
    {
        "id": 19,
        "name": "Alcalá",
        "departmentCode": 76
    },
    {
        "id": 20,
        "name": "Alejandria",
        "departmentCode": 5
    },
    {
        "id": 21,
        "name": "Algarrobo",
        "departmentCode": 47
    },
    {
        "id": 22,
        "name": "Algeciras",
        "departmentCode": 41
    },
    {
        "id": 23,
        "name": "Almaguer",
        "departmentCode": 19
    },
    {
        "id": 24,
        "name": "Almeida",
        "departmentCode": 15
    },
    {
        "id": 25,
        "name": "Alpujarra",
        "departmentCode": 73
    },
    {
        "id": 26,
        "name": "Altamira",
        "departmentCode": 41
    },
    {
        "id": 27,
        "name": "Alto Baudó (Pie de Pato)",
        "departmentCode": 27
    },
    {
        "id": 28,
        "name": "Altos del Rosario",
        "departmentCode": 13
    },
    {
        "id": 29,
        "name": "Alvarado",
        "departmentCode": 73
    },
    {
        "id": 30,
        "name": "Amagá",
        "departmentCode": 5
    },
    {
        "id": 31,
        "name": "Amalfi",
        "departmentCode": 5
    },
    {
        "id": 32,
        "name": "Ambalema",
        "departmentCode": 73
    },
    {
        "id": 33,
        "name": "Anapoima",
        "departmentCode": 25
    },
    {
        "id": 34,
        "name": "Ancuya",
        "departmentCode": 52
    },
    {
        "id": 35,
        "name": "Andalucía",
        "departmentCode": 76
    },
    {
        "id": 36,
        "name": "Andes",
        "departmentCode": 5
    },
    {
        "id": 37,
        "name": "Angelópolis",
        "departmentCode": 5
    },
    {
        "id": 38,
        "name": "Angostura",
        "departmentCode": 5
    },
    {
        "id": 39,
        "name": "Anolaima",
        "departmentCode": 25
    },
    {
        "id": 40,
        "name": "Anorí",
        "departmentCode": 5
    },
    {
        "id": 41,
        "name": "Anserma",
        "departmentCode": 17
    },
    {
        "id": 42,
        "name": "Ansermanuevo",
        "departmentCode": 76
    },
    {
        "id": 43,
        "name": "Anzoátegui",
        "departmentCode": 73
    },
    {
        "id": 44,
        "name": "Anzá",
        "departmentCode": 5
    },
    {
        "id": 45,
        "name": "Apartadó",
        "departmentCode": 5
    },
    {
        "id": 46,
        "name": "Apulo",
        "departmentCode": 25
    },
    {
        "id": 47,
        "name": "Apía",
        "departmentCode": 66
    },
    {
        "id": 48,
        "name": "Aquitania",
        "departmentCode": 15
    },
    {
        "id": 49,
        "name": "Aracataca",
        "departmentCode": 47
    },
    {
        "id": 50,
        "name": "Aranzazu",
        "departmentCode": 17
    },
    {
        "id": 51,
        "name": "Aratoca",
        "departmentCode": 68
    },
    {
        "id": 52,
        "name": "Arauca",
        "departmentCode": 81
    },
    {
        "id": 53,
        "name": "Arauquita",
        "departmentCode": 81
    },
    {
        "id": 54,
        "name": "Arbeláez",
        "departmentCode": 25
    },
    {
        "id": 55,
        "name": "Arboleda (Berruecos)",
        "departmentCode": 52
    },
    {
        "id": 56,
        "name": "Arboledas",
        "departmentCode": 54
    },
    {
        "id": 57,
        "name": "Arboletes",
        "departmentCode": 5
    },
    {
        "id": 58,
        "name": "Arcabuco",
        "departmentCode": 15
    },
    {
        "id": 59,
        "name": "Arenal",
        "departmentCode": 13
    },
    {
        "id": 60,
        "name": "Argelia",
        "departmentCode": 5
    },
    {
        "id": 61,
        "name": "Argelia",
        "departmentCode": 19
    },
    {
        "id": 62,
        "name": "Argelia",
        "departmentCode": 76
    },
    {
        "id": 63,
        "name": "Ariguaní (El Difícil)",
        "departmentCode": 47
    },
    {
        "id": 64,
        "name": "Arjona",
        "departmentCode": 13
    },
    {
        "id": 65,
        "name": "Armenia",
        "departmentCode": 5
    },
    {
        "id": 66,
        "name": "Armenia",
        "departmentCode": 63
    },
    {
        "id": 67,
        "name": "Armero (Guayabal)",
        "departmentCode": 73
    },
    {
        "id": 68,
        "name": "Arroyohondo",
        "departmentCode": 13
    },
    {
        "id": 69,
        "name": "Astrea",
        "departmentCode": 20
    },
    {
        "id": 70,
        "name": "Ataco",
        "departmentCode": 73
    },
    {
        "id": 71,
        "name": "Atrato (Yuto)",
        "departmentCode": 27
    },
    {
        "id": 72,
        "name": "Ayapel",
        "departmentCode": 23
    },
    {
        "id": 73,
        "name": "Bagadó",
        "departmentCode": 27
    },
    {
        "id": 74,
        "name": "Bahía Solano (Mútis)",
        "departmentCode": 27
    },
    {
        "id": 75,
        "name": "Bajo Baudó (Pizarro)",
        "departmentCode": 27
    },
    {
        "id": 76,
        "name": "Balboa",
        "departmentCode": 19
    },
    {
        "id": 77,
        "name": "Balboa",
        "departmentCode": 66
    },
    {
        "id": 78,
        "name": "Baranoa",
        "departmentCode": 8
    },
    {
        "id": 79,
        "name": "Baraya",
        "departmentCode": 41
    },
    {
        "id": 80,
        "name": "Barbacoas",
        "departmentCode": 52
    },
    {
        "id": 81,
        "name": "Barbosa",
        "departmentCode": 5
    },
    {
        "id": 82,
        "name": "Barbosa",
        "departmentCode": 68
    },
    {
        "id": 83,
        "name": "Barichara",
        "departmentCode": 68
    },
    {
        "id": 84,
        "name": "Barranca de Upía",
        "departmentCode": 50
    },
    {
        "id": 85,
        "name": "Barrancabermeja",
        "departmentCode": 68
    },
    {
        "id": 86,
        "name": "Barrancas",
        "departmentCode": 44
    },
    {
        "id": 87,
        "name": "Barranco de Loba",
        "departmentCode": 13
    },
    {
        "id": 88,
        "name": "Barranquilla",
        "departmentCode": 8
    },
    {
        "id": 89,
        "name": "Becerríl",
        "departmentCode": 20
    },
    {
        "id": 90,
        "name": "Belalcázar",
        "departmentCode": 17
    },
    {
        "id": 91,
        "name": "Bello",
        "departmentCode": 5
    },
    {
        "id": 92,
        "name": "Belmira",
        "departmentCode": 5
    },
    {
        "id": 93,
        "name": "Beltrán",
        "departmentCode": 25
    },
    {
        "id": 94,
        "name": "Belén",
        "departmentCode": 15
    },
    {
        "id": 95,
        "name": "Belén",
        "departmentCode": 52
    },
    {
        "id": 96,
        "name": "Belén de Bajirá",
        "departmentCode": 27
    },
    {
        "id": 97,
        "name": "Belén de Umbría",
        "departmentCode": 66
    },
    {
        "id": 98,
        "name": "Belén de los Andaquíes",
        "departmentCode": 18
    },
    {
        "id": 99,
        "name": "Berbeo",
        "departmentCode": 15
    },
    {
        "id": 100,
        "name": "Betania",
        "departmentCode": 5
    },
    {
        "id": 101,
        "name": "Beteitiva",
        "departmentCode": 15
    },
    {
        "id": 102,
        "name": "Betulia",
        "departmentCode": 5
    },
    {
        "id": 103,
        "name": "Betulia",
        "departmentCode": 68
    },
    {
        "id": 104,
        "name": "Bituima",
        "departmentCode": 25
    },
    {
        "id": 105,
        "name": "Boavita",
        "departmentCode": 15
    },
    {
        "id": 106,
        "name": "Bochalema",
        "departmentCode": 54
    },
    {
        "id": 107,
        "name": "Bogotá D.C.",
        "departmentCode": 11
    },
    {
        "id": 108,
        "name": "Bojacá",
        "departmentCode": 25
    },
    {
        "id": 109,
        "name": "Bojayá (Bellavista)",
        "departmentCode": 27
    },
    {
        "id": 110,
        "name": "Bolívar",
        "departmentCode": 5
    },
    {
        "id": 111,
        "name": "Bolívar",
        "departmentCode": 19
    },
    {
        "id": 112,
        "name": "Bolívar",
        "departmentCode": 68
    },
    {
        "id": 113,
        "name": "Bolívar",
        "departmentCode": 76
    },
    {
        "id": 114,
        "name": "Bosconia",
        "departmentCode": 20
    },
    {
        "id": 115,
        "name": "Boyacá",
        "departmentCode": 15
    },
    {
        "id": 116,
        "name": "Briceño",
        "departmentCode": 5
    },
    {
        "id": 117,
        "name": "Briceño",
        "departmentCode": 15
    },
    {
        "id": 118,
        "name": "Bucaramanga",
        "departmentCode": 68
    },
    {
        "id": 119,
        "name": "Bucarasica",
        "departmentCode": 54
    },
    {
        "id": 120,
        "name": "Buenaventura",
        "departmentCode": 76
    },
    {
        "id": 121,
        "name": "Buenavista",
        "departmentCode": 15
    },
    {
        "id": 122,
        "name": "Buenavista",
        "departmentCode": 23
    },
    {
        "id": 123,
        "name": "Buenavista",
        "departmentCode": 63
    },
    {
        "id": 124,
        "name": "Buenavista",
        "departmentCode": 70
    },
    {
        "id": 125,
        "name": "Buenos Aires",
        "departmentCode": 19
    },
    {
        "id": 126,
        "name": "Buesaco",
        "departmentCode": 52
    },
    {
        "id": 127,
        "name": "Buga",
        "departmentCode": 76
    },
    {
        "id": 128,
        "name": "Bugalagrande",
        "departmentCode": 76
    },
    {
        "id": 129,
        "name": "Burítica",
        "departmentCode": 5
    },
    {
        "id": 130,
        "name": "Busbanza",
        "departmentCode": 15
    },
    {
        "id": 131,
        "name": "Cabrera",
        "departmentCode": 25
    },
    {
        "id": 132,
        "name": "Cabrera",
        "departmentCode": 68
    },
    {
        "id": 133,
        "name": "Cabuyaro",
        "departmentCode": 50
    },
    {
        "id": 134,
        "name": "Cachipay",
        "departmentCode": 25
    },
    {
        "id": 135,
        "name": "Caicedo",
        "departmentCode": 5
    },
    {
        "id": 136,
        "name": "Caicedonia",
        "departmentCode": 76
    },
    {
        "id": 137,
        "name": "Caimito",
        "departmentCode": 70
    },
    {
        "id": 138,
        "name": "Cajamarca",
        "departmentCode": 73
    },
    {
        "id": 139,
        "name": "Cajibío",
        "departmentCode": 19
    },
    {
        "id": 140,
        "name": "Cajicá",
        "departmentCode": 25
    },
    {
        "id": 141,
        "name": "Calamar",
        "departmentCode": 13
    },
    {
        "id": 142,
        "name": "Calamar",
        "departmentCode": 95
    },
    {
        "id": 143,
        "name": "Calarcá",
        "departmentCode": 63
    },
    {
        "id": 144,
        "name": "Caldas",
        "departmentCode": 5
    },
    {
        "id": 145,
        "name": "Caldas",
        "departmentCode": 15
    },
    {
        "id": 146,
        "name": "Caldono",
        "departmentCode": 19
    },
    {
        "id": 147,
        "name": "California",
        "departmentCode": 68
    },
    {
        "id": 148,
        "name": "Calima (Darién)",
        "departmentCode": 76
    },
    {
        "id": 149,
        "name": "Caloto",
        "departmentCode": 19
    },
    {
        "id": 150,
        "name": "Calí",
        "departmentCode": 76
    },
    {
        "id": 151,
        "name": "Campamento",
        "departmentCode": 5
    },
    {
        "id": 152,
        "name": "Campo de la Cruz",
        "departmentCode": 8
    },
    {
        "id": 153,
        "name": "Campoalegre",
        "departmentCode": 41
    },
    {
        "id": 154,
        "name": "Campohermoso",
        "departmentCode": 15
    },
    {
        "id": 155,
        "name": "Canalete",
        "departmentCode": 23
    },
    {
        "id": 156,
        "name": "Candelaria",
        "departmentCode": 8
    },
    {
        "id": 157,
        "name": "Candelaria",
        "departmentCode": 76
    },
    {
        "id": 158,
        "name": "Cantagallo",
        "departmentCode": 13
    },
    {
        "id": 159,
        "name": "Cantón de San Pablo",
        "departmentCode": 27
    },
    {
        "id": 160,
        "name": "Caparrapí",
        "departmentCode": 25
    },
    {
        "id": 161,
        "name": "Capitanejo",
        "departmentCode": 68
    },
    {
        "id": 162,
        "name": "Caracolí",
        "departmentCode": 5
    },
    {
        "id": 163,
        "name": "Caramanta",
        "departmentCode": 5
    },
    {
        "id": 164,
        "name": "Carcasí",
        "departmentCode": 68
    },
    {
        "id": 165,
        "name": "Carepa",
        "departmentCode": 5
    },
    {
        "id": 166,
        "name": "Carmen de Apicalá",
        "departmentCode": 73
    },
    {
        "id": 167,
        "name": "Carmen de Carupa",
        "departmentCode": 25
    },
    {
        "id": 168,
        "name": "Carmen de Viboral",
        "departmentCode": 5
    },
    {
        "id": 169,
        "name": "Carmen del Darién (CURBARADÓ)",
        "departmentCode": 27
    },
    {
        "id": 170,
        "name": "Carolina",
        "departmentCode": 5
    },
    {
        "id": 171,
        "name": "Cartagena",
        "departmentCode": 13
    },
    {
        "id": 172,
        "name": "Cartagena del Chairá",
        "departmentCode": 18
    },
    {
        "id": 173,
        "name": "Cartago",
        "departmentCode": 76
    },
    {
        "id": 174,
        "name": "Carurú",
        "departmentCode": 97
    },
    {
        "id": 175,
        "name": "Casabianca",
        "departmentCode": 73
    },
    {
        "id": 176,
        "name": "Castilla la Nueva",
        "departmentCode": 50
    },
    {
        "id": 177,
        "name": "Caucasia",
        "departmentCode": 5
    },
    {
        "id": 178,
        "name": "Cañasgordas",
        "departmentCode": 5
    },
    {
        "id": 179,
        "name": "Cepita",
        "departmentCode": 68
    },
    {
        "id": 180,
        "name": "Cereté",
        "departmentCode": 23
    },
    {
        "id": 181,
        "name": "Cerinza",
        "departmentCode": 15
    },
    {
        "id": 182,
        "name": "Cerrito",
        "departmentCode": 68
    },
    {
        "id": 183,
        "name": "Cerro San Antonio",
        "departmentCode": 47
    },
    {
        "id": 184,
        "name": "Chachaguí",
        "departmentCode": 52
    },
    {
        "id": 185,
        "name": "Chaguaní",
        "departmentCode": 25
    },
    {
        "id": 186,
        "name": "Chalán",
        "departmentCode": 70
    },
    {
        "id": 187,
        "name": "Chaparral",
        "departmentCode": 73
    },
    {
        "id": 188,
        "name": "Charalá",
        "departmentCode": 68
    },
    {
        "id": 189,
        "name": "Charta",
        "departmentCode": 68
    },
    {
        "id": 190,
        "name": "Chigorodó",
        "departmentCode": 5
    },
    {
        "id": 191,
        "name": "Chima",
        "departmentCode": 68
    },
    {
        "id": 192,
        "name": "Chimichagua",
        "departmentCode": 20
    },
    {
        "id": 193,
        "name": "Chimá",
        "departmentCode": 23
    },
    {
        "id": 194,
        "name": "Chinavita",
        "departmentCode": 15
    },
    {
        "id": 195,
        "name": "Chinchiná",
        "departmentCode": 17
    },
    {
        "id": 196,
        "name": "Chinácota",
        "departmentCode": 54
    },
    {
        "id": 197,
        "name": "Chinú",
        "departmentCode": 23
    },
    {
        "id": 198,
        "name": "Chipaque",
        "departmentCode": 25
    },
    {
        "id": 199,
        "name": "Chipatá",
        "departmentCode": 68
    },
    {
        "id": 200,
        "name": "Chiquinquirá",
        "departmentCode": 15
    },
    {
        "id": 201,
        "name": "Chiriguaná",
        "departmentCode": 20
    },
    {
        "id": 202,
        "name": "Chiscas",
        "departmentCode": 15
    },
    {
        "id": 203,
        "name": "Chita",
        "departmentCode": 15
    },
    {
        "id": 204,
        "name": "Chitagá",
        "departmentCode": 54
    },
    {
        "id": 205,
        "name": "Chitaraque",
        "departmentCode": 15
    },
    {
        "id": 206,
        "name": "Chivatá",
        "departmentCode": 15
    },
    {
        "id": 207,
        "name": "Chivolo",
        "departmentCode": 47
    },
    {
        "id": 208,
        "name": "Choachí",
        "departmentCode": 25
    },
    {
        "id": 209,
        "name": "Chocontá",
        "departmentCode": 25
    },
    {
        "id": 210,
        "name": "Chámeza",
        "departmentCode": 85
    },
    {
        "id": 211,
        "name": "Chía",
        "departmentCode": 25
    },
    {
        "id": 212,
        "name": "Chíquiza",
        "departmentCode": 15
    },
    {
        "id": 213,
        "name": "Chívor",
        "departmentCode": 15
    },
    {
        "id": 214,
        "name": "Cicuco",
        "departmentCode": 13
    },
    {
        "id": 215,
        "name": "Cimitarra",
        "departmentCode": 68
    },
    {
        "id": 216,
        "name": "Circasia",
        "departmentCode": 63
    },
    {
        "id": 217,
        "name": "Cisneros",
        "departmentCode": 5
    },
    {
        "id": 218,
        "name": "Ciénaga",
        "departmentCode": 15
    },
    {
        "id": 219,
        "name": "Ciénaga",
        "departmentCode": 47
    },
    {
        "id": 220,
        "name": "Ciénaga de Oro",
        "departmentCode": 23
    },
    {
        "id": 221,
        "name": "Clemencia",
        "departmentCode": 13
    },
    {
        "id": 222,
        "name": "Cocorná",
        "departmentCode": 5
    },
    {
        "id": 223,
        "name": "Coello",
        "departmentCode": 73
    },
    {
        "id": 224,
        "name": "Cogua",
        "departmentCode": 25
    },
    {
        "id": 225,
        "name": "Colombia",
        "departmentCode": 41
    },
    {
        "id": 226,
        "name": "Colosó (Ricaurte)",
        "departmentCode": 70
    },
    {
        "id": 227,
        "name": "Colón",
        "departmentCode": 86
    },
    {
        "id": 228,
        "name": "Colón (Génova)",
        "departmentCode": 52
    },
    {
        "id": 229,
        "name": "Concepción",
        "departmentCode": 5
    },
    {
        "id": 230,
        "name": "Concepción",
        "departmentCode": 68
    },
    {
        "id": 231,
        "name": "Concordia",
        "departmentCode": 5
    },
    {
        "id": 232,
        "name": "Concordia",
        "departmentCode": 47
    },
    {
        "id": 233,
        "name": "Condoto",
        "departmentCode": 27
    },
    {
        "id": 234,
        "name": "Confines",
        "departmentCode": 68
    },
    {
        "id": 235,
        "name": "Consaca",
        "departmentCode": 52
    },
    {
        "id": 236,
        "name": "Contadero",
        "departmentCode": 52
    },
    {
        "id": 237,
        "name": "Contratación",
        "departmentCode": 68
    },
    {
        "id": 238,
        "name": "Convención",
        "departmentCode": 54
    },
    {
        "id": 239,
        "name": "Copacabana",
        "departmentCode": 5
    },
    {
        "id": 240,
        "name": "Coper",
        "departmentCode": 15
    },
    {
        "id": 241,
        "name": "Cordobá",
        "departmentCode": 63
    },
    {
        "id": 242,
        "name": "Corinto",
        "departmentCode": 19
    },
    {
        "id": 243,
        "name": "Coromoro",
        "departmentCode": 68
    },
    {
        "id": 244,
        "name": "Corozal",
        "departmentCode": 70
    },
    {
        "id": 245,
        "name": "Corrales",
        "departmentCode": 15
    },
    {
        "id": 246,
        "name": "Cota",
        "departmentCode": 25
    },
    {
        "id": 247,
        "name": "Cotorra",
        "departmentCode": 23
    },
    {
        "id": 248,
        "name": "Covarachía",
        "departmentCode": 15
    },
    {
        "id": 249,
        "name": "Coveñas",
        "departmentCode": 70
    },
    {
        "id": 250,
        "name": "Coyaima",
        "departmentCode": 73
    },
    {
        "id": 251,
        "name": "Cravo Norte",
        "departmentCode": 81
    },
    {
        "id": 252,
        "name": "Cuaspud (Carlosama)",
        "departmentCode": 52
    },
    {
        "id": 253,
        "name": "Cubarral",
        "departmentCode": 50
    },
    {
        "id": 254,
        "name": "Cubará",
        "departmentCode": 15
    },
    {
        "id": 255,
        "name": "Cucaita",
        "departmentCode": 15
    },
    {
        "id": 256,
        "name": "Cucunubá",
        "departmentCode": 25
    },
    {
        "id": 257,
        "name": "Cucutilla",
        "departmentCode": 54
    },
    {
        "id": 258,
        "name": "Cuitiva",
        "departmentCode": 15
    },
    {
        "id": 259,
        "name": "Cumaral",
        "departmentCode": 50
    },
    {
        "id": 260,
        "name": "Cumaribo",
        "departmentCode": 99
    },
    {
        "id": 261,
        "name": "Cumbal",
        "departmentCode": 52
    },
    {
        "id": 262,
        "name": "Cumbitara",
        "departmentCode": 52
    },
    {
        "id": 263,
        "name": "Cunday",
        "departmentCode": 73
    },
    {
        "id": 264,
        "name": "Curillo",
        "departmentCode": 18
    },
    {
        "id": 265,
        "name": "Curití",
        "departmentCode": 68
    },
    {
        "id": 266,
        "name": "Curumaní",
        "departmentCode": 20
    },
    {
        "id": 267,
        "name": "Cáceres",
        "departmentCode": 5
    },
    {
        "id": 268,
        "name": "Cáchira",
        "departmentCode": 54
    },
    {
        "id": 269,
        "name": "Cácota",
        "departmentCode": 54
    },
    {
        "id": 270,
        "name": "Cáqueza",
        "departmentCode": 25
    },
    {
        "id": 271,
        "name": "Cértegui",
        "departmentCode": 27
    },
    {
        "id": 272,
        "name": "Cómbita",
        "departmentCode": 15
    },
    {
        "id": 273,
        "name": "Córdoba",
        "departmentCode": 13
    },
    {
        "id": 274,
        "name": "Córdoba",
        "departmentCode": 52
    },
    {
        "id": 275,
        "name": "Cúcuta",
        "departmentCode": 54
    },
    {
        "id": 276,
        "name": "Dabeiba",
        "departmentCode": 5
    },
    {
        "id": 277,
        "name": "Dagua",
        "departmentCode": 76
    },
    {
        "id": 278,
        "name": "Dibulla",
        "departmentCode": 44
    },
    {
        "id": 279,
        "name": "Distracción",
        "departmentCode": 44
    },
    {
        "id": 280,
        "name": "Dolores",
        "departmentCode": 73
    },
    {
        "id": 281,
        "name": "Don Matías",
        "departmentCode": 5
    },
    {
        "id": 282,
        "name": "Dos Quebradas",
        "departmentCode": 66
    },
    {
        "id": 283,
        "name": "Duitama",
        "departmentCode": 15
    },
    {
        "id": 284,
        "name": "Durania",
        "departmentCode": 54
    },
    {
        "id": 285,
        "name": "Ebéjico",
        "departmentCode": 5
    },
    {
        "id": 286,
        "name": "El Bagre",
        "departmentCode": 5
    },
    {
        "id": 287,
        "name": "El Banco",
        "departmentCode": 47
    },
    {
        "id": 288,
        "name": "El Cairo",
        "departmentCode": 76
    },
    {
        "id": 289,
        "name": "El Calvario",
        "departmentCode": 50
    },
    {
        "id": 290,
        "name": "El Carmen",
        "departmentCode": 54
    },
    {
        "id": 291,
        "name": "El Carmen",
        "departmentCode": 68
    },
    {
        "id": 292,
        "name": "El Carmen de Atrato",
        "departmentCode": 27
    },
    {
        "id": 293,
        "name": "El Carmen de Bolívar",
        "departmentCode": 13
    },
    {
        "id": 294,
        "name": "El Castillo",
        "departmentCode": 50
    },
    {
        "id": 295,
        "name": "El Cerrito",
        "departmentCode": 76
    },
    {
        "id": 296,
        "name": "El Charco",
        "departmentCode": 52
    },
    {
        "id": 297,
        "name": "El Cocuy",
        "departmentCode": 15
    },
    {
        "id": 298,
        "name": "El Colegio",
        "departmentCode": 25
    },
    {
        "id": 299,
        "name": "El Copey",
        "departmentCode": 20
    },
    {
        "id": 300,
        "name": "El Doncello",
        "departmentCode": 18
    },
    {
        "id": 301,
        "name": "El Dorado",
        "departmentCode": 50
    },
    {
        "id": 302,
        "name": "El Dovio",
        "departmentCode": 76
    },
    {
        "id": 303,
        "name": "El Espino",
        "departmentCode": 15
    },
    {
        "id": 304,
        "name": "El Guacamayo",
        "departmentCode": 68
    },
    {
        "id": 305,
        "name": "El Guamo",
        "departmentCode": 13
    },
    {
        "id": 306,
        "name": "El Molino",
        "departmentCode": 44
    },
    {
        "id": 307,
        "name": "El Paso",
        "departmentCode": 20
    },
    {
        "id": 308,
        "name": "El Paujil",
        "departmentCode": 18
    },
    {
        "id": 309,
        "name": "El Peñol",
        "departmentCode": 52
    },
    {
        "id": 310,
        "name": "El Peñon",
        "departmentCode": 13
    },
    {
        "id": 311,
        "name": "El Peñon",
        "departmentCode": 68
    },
    {
        "id": 312,
        "name": "El Peñón",
        "departmentCode": 25
    },
    {
        "id": 313,
        "name": "El Piñon",
        "departmentCode": 47
    },
    {
        "id": 314,
        "name": "El Playón",
        "departmentCode": 68
    },
    {
        "id": 315,
        "name": "El Retorno",
        "departmentCode": 95
    },
    {
        "id": 316,
        "name": "El Retén",
        "departmentCode": 47
    },
    {
        "id": 317,
        "name": "El Roble",
        "departmentCode": 70
    },
    {
        "id": 318,
        "name": "El Rosal",
        "departmentCode": 25
    },
    {
        "id": 319,
        "name": "El Rosario",
        "departmentCode": 52
    },
    {
        "id": 320,
        "name": "El Tablón de Gómez",
        "departmentCode": 52
    },
    {
        "id": 321,
        "name": "El Tambo",
        "departmentCode": 19
    },
    {
        "id": 322,
        "name": "El Tambo",
        "departmentCode": 52
    },
    {
        "id": 323,
        "name": "El Tarra",
        "departmentCode": 54
    },
    {
        "id": 324,
        "name": "El Zulia",
        "departmentCode": 54
    },
    {
        "id": 325,
        "name": "El Águila",
        "departmentCode": 76
    },
    {
        "id": 326,
        "name": "Elías",
        "departmentCode": 41
    },
    {
        "id": 327,
        "name": "Encino",
        "departmentCode": 68
    },
    {
        "id": 328,
        "name": "Enciso",
        "departmentCode": 68
    },
    {
        "id": 329,
        "name": "Entrerríos",
        "departmentCode": 5
    },
    {
        "id": 330,
        "name": "Envigado",
        "departmentCode": 5
    },
    {
        "id": 331,
        "name": "Espinal",
        "departmentCode": 73
    },
    {
        "id": 332,
        "name": "Facatativá",
        "departmentCode": 25
    },
    {
        "id": 333,
        "name": "Falan",
        "departmentCode": 73
    },
    {
        "id": 334,
        "name": "Filadelfia",
        "departmentCode": 17
    },
    {
        "id": 335,
        "name": "Filandia",
        "departmentCode": 63
    },
    {
        "id": 336,
        "name": "Firavitoba",
        "departmentCode": 15
    },
    {
        "id": 337,
        "name": "Flandes",
        "departmentCode": 73
    },
    {
        "id": 338,
        "name": "Florencia",
        "departmentCode": 18
    },
    {
        "id": 339,
        "name": "Florencia",
        "departmentCode": 19
    },
    {
        "id": 340,
        "name": "Floresta",
        "departmentCode": 15
    },
    {
        "id": 341,
        "name": "Florida",
        "departmentCode": 76
    },
    {
        "id": 342,
        "name": "Floridablanca",
        "departmentCode": 68
    },
    {
        "id": 343,
        "name": "Florián",
        "departmentCode": 68
    },
    {
        "id": 344,
        "name": "Fonseca",
        "departmentCode": 44
    },
    {
        "id": 345,
        "name": "Fortúl",
        "departmentCode": 81
    },
    {
        "id": 346,
        "name": "Fosca",
        "departmentCode": 25
    },
    {
        "id": 347,
        "name": "Francisco Pizarro",
        "departmentCode": 52
    },
    {
        "id": 348,
        "name": "Fredonia",
        "departmentCode": 5
    },
    {
        "id": 349,
        "name": "Fresno",
        "departmentCode": 73
    },
    {
        "id": 350,
        "name": "Frontino",
        "departmentCode": 5
    },
    {
        "id": 351,
        "name": "Fuente de Oro",
        "departmentCode": 50
    },
    {
        "id": 352,
        "name": "Fundación",
        "departmentCode": 47
    },
    {
        "id": 353,
        "name": "Funes",
        "departmentCode": 52
    },
    {
        "id": 354,
        "name": "Funza",
        "departmentCode": 25
    },
    {
        "id": 355,
        "name": "Fusagasugá",
        "departmentCode": 25
    },
    {
        "id": 356,
        "name": "Fómeque",
        "departmentCode": 25
    },
    {
        "id": 357,
        "name": "Fúquene",
        "departmentCode": 25
    },
    {
        "id": 358,
        "name": "Gachalá",
        "departmentCode": 25
    },
    {
        "id": 359,
        "name": "Gachancipá",
        "departmentCode": 25
    },
    {
        "id": 360,
        "name": "Gachantivá",
        "departmentCode": 15
    },
    {
        "id": 361,
        "name": "Gachetá",
        "departmentCode": 25
    },
    {
        "id": 362,
        "name": "Galapa",
        "departmentCode": 8
    },
    {
        "id": 363,
        "name": "Galeras (Nueva Granada)",
        "departmentCode": 70
    },
    {
        "id": 364,
        "name": "Galán",
        "departmentCode": 68
    },
    {
        "id": 365,
        "name": "Gama",
        "departmentCode": 25
    },
    {
        "id": 366,
        "name": "Gamarra",
        "departmentCode": 20
    },
    {
        "id": 367,
        "name": "Garagoa",
        "departmentCode": 15
    },
    {
        "id": 368,
        "name": "Garzón",
        "departmentCode": 41
    },
    {
        "id": 369,
        "name": "Gigante",
        "departmentCode": 41
    },
    {
        "id": 370,
        "name": "Ginebra",
        "departmentCode": 76
    },
    {
        "id": 371,
        "name": "Giraldo",
        "departmentCode": 5
    },
    {
        "id": 372,
        "name": "Girardot",
        "departmentCode": 25
    },
    {
        "id": 373,
        "name": "Girardota",
        "departmentCode": 5
    },
    {
        "id": 374,
        "name": "Girón",
        "departmentCode": 68
    },
    {
        "id": 375,
        "name": "Gonzalez",
        "departmentCode": 20
    },
    {
        "id": 376,
        "name": "Gramalote",
        "departmentCode": 54
    },
    {
        "id": 377,
        "name": "Granada",
        "departmentCode": 5
    },
    {
        "id": 378,
        "name": "Granada",
        "departmentCode": 25
    },
    {
        "id": 379,
        "name": "Granada",
        "departmentCode": 50
    },
    {
        "id": 380,
        "name": "Guaca",
        "departmentCode": 68
    },
    {
        "id": 381,
        "name": "Guacamayas",
        "departmentCode": 15
    },
    {
        "id": 382,
        "name": "Guacarí",
        "departmentCode": 76
    },
    {
        "id": 383,
        "name": "Guachavés",
        "departmentCode": 52
    },
    {
        "id": 384,
        "name": "Guachené",
        "departmentCode": 19
    },
    {
        "id": 385,
        "name": "Guachetá",
        "departmentCode": 25
    },
    {
        "id": 386,
        "name": "Guachucal",
        "departmentCode": 52
    },
    {
        "id": 387,
        "name": "Guadalupe",
        "departmentCode": 5
    },
    {
        "id": 388,
        "name": "Guadalupe",
        "departmentCode": 41
    },
    {
        "id": 389,
        "name": "Guadalupe",
        "departmentCode": 68
    },
    {
        "id": 390,
        "name": "Guaduas",
        "departmentCode": 25
    },
    {
        "id": 391,
        "name": "Guaitarilla",
        "departmentCode": 52
    },
    {
        "id": 392,
        "name": "Gualmatán",
        "departmentCode": 52
    },
    {
        "id": 393,
        "name": "Guamal",
        "departmentCode": 47
    },
    {
        "id": 394,
        "name": "Guamal",
        "departmentCode": 50
    },
    {
        "id": 395,
        "name": "Guamo",
        "departmentCode": 73
    },
    {
        "id": 396,
        "name": "Guapota",
        "departmentCode": 68
    },
    {
        "id": 397,
        "name": "Guapí",
        "departmentCode": 19
    },
    {
        "id": 398,
        "name": "Guaranda",
        "departmentCode": 70
    },
    {
        "id": 399,
        "name": "Guarne",
        "departmentCode": 5
    },
    {
        "id": 400,
        "name": "Guasca",
        "departmentCode": 25
    },
    {
        "id": 401,
        "name": "Guatapé",
        "departmentCode": 5
    },
    {
        "id": 402,
        "name": "Guataquí",
        "departmentCode": 25
    },
    {
        "id": 403,
        "name": "Guatavita",
        "departmentCode": 25
    },
    {
        "id": 404,
        "name": "Guateque",
        "departmentCode": 15
    },
    {
        "id": 405,
        "name": "Guavatá",
        "departmentCode": 68
    },
    {
        "id": 406,
        "name": "Guayabal de Siquima",
        "departmentCode": 25
    },
    {
        "id": 407,
        "name": "Guayabetal",
        "departmentCode": 25
    },
    {
        "id": 408,
        "name": "Guayatá",
        "departmentCode": 15
    },
    {
        "id": 409,
        "name": "Guepsa",
        "departmentCode": 68
    },
    {
        "id": 410,
        "name": "Guicán",
        "departmentCode": 15
    },
    {
        "id": 411,
        "name": "Gutiérrez",
        "departmentCode": 25
    },
    {
        "id": 412,
        "name": "Guática",
        "departmentCode": 66
    },
    {
        "id": 413,
        "name": "Gámbita",
        "departmentCode": 68
    },
    {
        "id": 414,
        "name": "Gámeza",
        "departmentCode": 15
    },
    {
        "id": 415,
        "name": "Génova",
        "departmentCode": 63
    },
    {
        "id": 416,
        "name": "Gómez Plata",
        "departmentCode": 5
    },
    {
        "id": 417,
        "name": "Hacarí",
        "departmentCode": 54
    },
    {
        "id": 418,
        "name": "Hatillo de Loba",
        "departmentCode": 13
    },
    {
        "id": 419,
        "name": "Hato",
        "departmentCode": 68
    },
    {
        "id": 420,
        "name": "Hato Corozal",
        "departmentCode": 85
    },
    {
        "id": 421,
        "name": "Hatonuevo",
        "departmentCode": 44
    },
    {
        "id": 422,
        "name": "Heliconia",
        "departmentCode": 5
    },
    {
        "id": 423,
        "name": "Herrán",
        "departmentCode": 54
    },
    {
        "id": 424,
        "name": "Herveo",
        "departmentCode": 73
    },
    {
        "id": 425,
        "name": "Hispania",
        "departmentCode": 5
    },
    {
        "id": 426,
        "name": "Hobo",
        "departmentCode": 41
    },
    {
        "id": 427,
        "name": "Honda",
        "departmentCode": 73
    },
    {
        "id": 428,
        "name": "Ibagué",
        "departmentCode": 73
    },
    {
        "id": 429,
        "name": "Icononzo",
        "departmentCode": 73
    },
    {
        "id": 430,
        "name": "Iles",
        "departmentCode": 52
    },
    {
        "id": 431,
        "name": "Imúes",
        "departmentCode": 52
    },
    {
        "id": 432,
        "name": "Inzá",
        "departmentCode": 19
    },
    {
        "id": 433,
        "name": "Inírida",
        "departmentCode": 94
    },
    {
        "id": 434,
        "name": "Ipiales",
        "departmentCode": 52
    },
    {
        "id": 435,
        "name": "Isnos",
        "departmentCode": 41
    },
    {
        "id": 436,
        "name": "Istmina",
        "departmentCode": 27
    },
    {
        "id": 437,
        "name": "Itagüí",
        "departmentCode": 5
    },
    {
        "id": 438,
        "name": "Ituango",
        "departmentCode": 5
    },
    {
        "id": 439,
        "name": "Izá",
        "departmentCode": 15
    },
    {
        "id": 440,
        "name": "Jambaló",
        "departmentCode": 19
    },
    {
        "id": 441,
        "name": "Jamundí",
        "departmentCode": 76
    },
    {
        "id": 442,
        "name": "Jardín",
        "departmentCode": 5
    },
    {
        "id": 443,
        "name": "Jenesano",
        "departmentCode": 15
    },
    {
        "id": 444,
        "name": "Jericó",
        "departmentCode": 5
    },
    {
        "id": 445,
        "name": "Jericó",
        "departmentCode": 15
    },
    {
        "id": 446,
        "name": "Jerusalén",
        "departmentCode": 25
    },
    {
        "id": 447,
        "name": "Jesús María",
        "departmentCode": 68
    },
    {
        "id": 448,
        "name": "Jordán",
        "departmentCode": 68
    },
    {
        "id": 449,
        "name": "Juan de Acosta",
        "departmentCode": 8
    },
    {
        "id": 450,
        "name": "Junín",
        "departmentCode": 25
    },
    {
        "id": 451,
        "name": "Juradó",
        "departmentCode": 27
    },
    {
        "id": 452,
        "name": "La Apartada y La Frontera",
        "departmentCode": 23
    },
    {
        "id": 453,
        "name": "La Argentina",
        "departmentCode": 41
    },
    {
        "id": 454,
        "name": "La Belleza",
        "departmentCode": 68
    },
    {
        "id": 455,
        "name": "La Calera",
        "departmentCode": 25
    },
    {
        "id": 456,
        "name": "La Capilla",
        "departmentCode": 15
    },
    {
        "id": 457,
        "name": "La Ceja",
        "departmentCode": 5
    },
    {
        "id": 458,
        "name": "La Celia",
        "departmentCode": 66
    },
    {
        "id": 459,
        "name": "La Cruz",
        "departmentCode": 52
    },
    {
        "id": 460,
        "name": "La Cumbre",
        "departmentCode": 76
    },
    {
        "id": 461,
        "name": "La Dorada",
        "departmentCode": 17
    },
    {
        "id": 462,
        "name": "La Esperanza",
        "departmentCode": 54
    },
    {
        "id": 463,
        "name": "La Estrella",
        "departmentCode": 5
    },
    {
        "id": 464,
        "name": "La Florida",
        "departmentCode": 52
    },
    {
        "id": 465,
        "name": "La Gloria",
        "departmentCode": 20
    },
    {
        "id": 466,
        "name": "La Jagua de Ibirico",
        "departmentCode": 20
    },
    {
        "id": 467,
        "name": "La Jagua del Pilar",
        "departmentCode": 44
    },
    {
        "id": 468,
        "name": "La Llanada",
        "departmentCode": 52
    },
    {
        "id": 469,
        "name": "La Macarena",
        "departmentCode": 50
    },
    {
        "id": 470,
        "name": "La Merced",
        "departmentCode": 17
    },
    {
        "id": 471,
        "name": "La Mesa",
        "departmentCode": 25
    },
    {
        "id": 472,
        "name": "La Montañita",
        "departmentCode": 18
    },
    {
        "id": 473,
        "name": "La Palma",
        "departmentCode": 25
    },
    {
        "id": 474,
        "name": "La Paz",
        "departmentCode": 68
    },
    {
        "id": 475,
        "name": "La Paz (Robles)",
        "departmentCode": 20
    },
    {
        "id": 476,
        "name": "La Peña",
        "departmentCode": 25
    },
    {
        "id": 477,
        "name": "La Pintada",
        "departmentCode": 5
    },
    {
        "id": 478,
        "name": "La Plata",
        "departmentCode": 41
    },
    {
        "id": 479,
        "name": "La Playa",
        "departmentCode": 54
    },
    {
        "id": 480,
        "name": "La Primavera",
        "departmentCode": 99
    },
    {
        "id": 481,
        "name": "La Salina",
        "departmentCode": 85
    },
    {
        "id": 482,
        "name": "La Sierra",
        "departmentCode": 19
    },
    {
        "id": 483,
        "name": "La Tebaida",
        "departmentCode": 63
    },
    {
        "id": 484,
        "name": "La Tola",
        "departmentCode": 52
    },
    {
        "id": 485,
        "name": "La Unión",
        "departmentCode": 5
    },
    {
        "id": 486,
        "name": "La Unión",
        "departmentCode": 52
    },
    {
        "id": 487,
        "name": "La Unión",
        "departmentCode": 70
    },
    {
        "id": 488,
        "name": "La Unión",
        "departmentCode": 76
    },
    {
        "id": 489,
        "name": "La Uvita",
        "departmentCode": 15
    },
    {
        "id": 490,
        "name": "La Vega",
        "departmentCode": 19
    },
    {
        "id": 491,
        "name": "La Vega",
        "departmentCode": 25
    },
    {
        "id": 492,
        "name": "La Victoria",
        "departmentCode": 15
    },
    {
        "id": 493,
        "name": "La Victoria",
        "departmentCode": 17
    },
    {
        "id": 494,
        "name": "La Victoria",
        "departmentCode": 76
    },
    {
        "id": 495,
        "name": "La Virginia",
        "departmentCode": 66
    },
    {
        "id": 496,
        "name": "Labateca",
        "departmentCode": 54
    },
    {
        "id": 497,
        "name": "Labranzagrande",
        "departmentCode": 15
    },
    {
        "id": 498,
        "name": "Landázuri",
        "departmentCode": 68
    },
    {
        "id": 499,
        "name": "Lebrija",
        "departmentCode": 68
    },
    {
        "id": 500,
        "name": "Leiva",
        "departmentCode": 52
    },
    {
        "id": 501,
        "name": "Lejanías",
        "departmentCode": 50
    },
    {
        "id": 502,
        "name": "Lenguazaque",
        "departmentCode": 25
    },
    {
        "id": 503,
        "name": "Leticia",
        "departmentCode": 91
    },
    {
        "id": 504,
        "name": "Liborina",
        "departmentCode": 5
    },
    {
        "id": 505,
        "name": "Linares",
        "departmentCode": 52
    },
    {
        "id": 506,
        "name": "Lloró",
        "departmentCode": 27
    },
    {
        "id": 507,
        "name": "Lorica",
        "departmentCode": 23
    },
    {
        "id": 508,
        "name": "Los Córdobas",
        "departmentCode": 23
    },
    {
        "id": 509,
        "name": "Los Palmitos",
        "departmentCode": 70
    },
    {
        "id": 510,
        "name": "Los Patios",
        "departmentCode": 54
    },
    {
        "id": 511,
        "name": "Los Santos",
        "departmentCode": 68
    },
    {
        "id": 512,
        "name": "Lourdes",
        "departmentCode": 54
    },
    {
        "id": 513,
        "name": "Luruaco",
        "departmentCode": 8
    },
    {
        "id": 514,
        "name": "Lérida",
        "departmentCode": 73
    },
    {
        "id": 515,
        "name": "Líbano",
        "departmentCode": 73
    },
    {
        "id": 516,
        "name": "López (Micay)",
        "departmentCode": 19
    },
    {
        "id": 517,
        "name": "Macanal",
        "departmentCode": 15
    },
    {
        "id": 518,
        "name": "Macaravita",
        "departmentCode": 68
    },
    {
        "id": 519,
        "name": "Maceo",
        "departmentCode": 5
    },
    {
        "id": 520,
        "name": "Machetá",
        "departmentCode": 25
    },
    {
        "id": 521,
        "name": "Madrid",
        "departmentCode": 25
    },
    {
        "id": 522,
        "name": "Magangué",
        "departmentCode": 13
    },
    {
        "id": 523,
        "name": "Magüi (Payán)",
        "departmentCode": 52
    },
    {
        "id": 524,
        "name": "Mahates",
        "departmentCode": 13
    },
    {
        "id": 525,
        "name": "Maicao",
        "departmentCode": 44
    },
    {
        "id": 526,
        "name": "Majagual",
        "departmentCode": 70
    },
    {
        "id": 527,
        "name": "Malambo",
        "departmentCode": 8
    },
    {
        "id": 528,
        "name": "Mallama (Piedrancha)",
        "departmentCode": 52
    },
    {
        "id": 529,
        "name": "Manatí",
        "departmentCode": 8
    },
    {
        "id": 530,
        "name": "Manaure",
        "departmentCode": 44
    },
    {
        "id": 531,
        "name": "Manaure Balcón del Cesar",
        "departmentCode": 20
    },
    {
        "id": 532,
        "name": "Manizales",
        "departmentCode": 17
    },
    {
        "id": 533,
        "name": "Manta",
        "departmentCode": 25
    },
    {
        "id": 534,
        "name": "Manzanares",
        "departmentCode": 17
    },
    {
        "id": 535,
        "name": "Maní",
        "departmentCode": 85
    },
    {
        "id": 536,
        "name": "Mapiripan",
        "departmentCode": 50
    },
    {
        "id": 537,
        "name": "Margarita",
        "departmentCode": 13
    },
    {
        "id": 538,
        "name": "Marinilla",
        "departmentCode": 5
    },
    {
        "id": 539,
        "name": "Maripí",
        "departmentCode": 15
    },
    {
        "id": 540,
        "name": "Mariquita",
        "departmentCode": 73
    },
    {
        "id": 541,
        "name": "Marmato",
        "departmentCode": 17
    },
    {
        "id": 542,
        "name": "Marquetalia",
        "departmentCode": 17
    },
    {
        "id": 543,
        "name": "Marsella",
        "departmentCode": 66
    },
    {
        "id": 544,
        "name": "Marulanda",
        "departmentCode": 17
    },
    {
        "id": 545,
        "name": "María la Baja",
        "departmentCode": 13
    },
    {
        "id": 546,
        "name": "Matanza",
        "departmentCode": 68
    },
    {
        "id": 547,
        "name": "Medellín",
        "departmentCode": 5
    },
    {
        "id": 548,
        "name": "Medina",
        "departmentCode": 25
    },
    {
        "id": 549,
        "name": "Medio Atrato",
        "departmentCode": 27
    },
    {
        "id": 550,
        "name": "Medio Baudó",
        "departmentCode": 27
    },
    {
        "id": 551,
        "name": "Medio San Juan (ANDAGOYA)",
        "departmentCode": 27
    },
    {
        "id": 552,
        "name": "Melgar",
        "departmentCode": 73
    },
    {
        "id": 553,
        "name": "Mercaderes",
        "departmentCode": 19
    },
    {
        "id": 554,
        "name": "Mesetas",
        "departmentCode": 50
    },
    {
        "id": 555,
        "name": "Milán",
        "departmentCode": 18
    },
    {
        "id": 556,
        "name": "Miraflores",
        "departmentCode": 15
    },
    {
        "id": 557,
        "name": "Miraflores",
        "departmentCode": 95
    },
    {
        "id": 558,
        "name": "Miranda",
        "departmentCode": 19
    },
    {
        "id": 559,
        "name": "Mistrató",
        "departmentCode": 66
    },
    {
        "id": 560,
        "name": "Mitú",
        "departmentCode": 97
    },
    {
        "id": 561,
        "name": "Mocoa",
        "departmentCode": 86
    },
    {
        "id": 562,
        "name": "Mogotes",
        "departmentCode": 68
    },
    {
        "id": 563,
        "name": "Molagavita",
        "departmentCode": 68
    },
    {
        "id": 564,
        "name": "Momil",
        "departmentCode": 23
    },
    {
        "id": 565,
        "name": "Mompós",
        "departmentCode": 13
    },
    {
        "id": 566,
        "name": "Mongua",
        "departmentCode": 15
    },
    {
        "id": 567,
        "name": "Monguí",
        "departmentCode": 15
    },
    {
        "id": 568,
        "name": "Moniquirá",
        "departmentCode": 15
    },
    {
        "id": 569,
        "name": "Montebello",
        "departmentCode": 5
    },
    {
        "id": 570,
        "name": "Montecristo",
        "departmentCode": 13
    },
    {
        "id": 571,
        "name": "Montelíbano",
        "departmentCode": 23
    },
    {
        "id": 572,
        "name": "Montenegro",
        "departmentCode": 63
    },
    {
        "id": 573,
        "name": "Monteria",
        "departmentCode": 23
    },
    {
        "id": 574,
        "name": "Monterrey",
        "departmentCode": 85
    },
    {
        "id": 575,
        "name": "Morales",
        "departmentCode": 13
    },
    {
        "id": 576,
        "name": "Morales",
        "departmentCode": 19
    },
    {
        "id": 577,
        "name": "Morelia",
        "departmentCode": 18
    },
    {
        "id": 578,
        "name": "Morroa",
        "departmentCode": 70
    },
    {
        "id": 579,
        "name": "Mosquera",
        "departmentCode": 25
    },
    {
        "id": 580,
        "name": "Mosquera",
        "departmentCode": 52
    },
    {
        "id": 581,
        "name": "Motavita",
        "departmentCode": 15
    },
    {
        "id": 582,
        "name": "Moñitos",
        "departmentCode": 23
    },
    {
        "id": 583,
        "name": "Murillo",
        "departmentCode": 73
    },
    {
        "id": 584,
        "name": "Murindó",
        "departmentCode": 5
    },
    {
        "id": 585,
        "name": "Mutatá",
        "departmentCode": 5
    },
    {
        "id": 586,
        "name": "Mutiscua",
        "departmentCode": 54
    },
    {
        "id": 587,
        "name": "Muzo",
        "departmentCode": 15
    },
    {
        "id": 588,
        "name": "Málaga",
        "departmentCode": 68
    },
    {
        "id": 589,
        "name": "Nariño",
        "departmentCode": 5
    },
    {
        "id": 590,
        "name": "Nariño",
        "departmentCode": 25
    },
    {
        "id": 591,
        "name": "Nariño",
        "departmentCode": 52
    },
    {
        "id": 592,
        "name": "Natagaima",
        "departmentCode": 73
    },
    {
        "id": 593,
        "name": "Nechí",
        "departmentCode": 5
    },
    {
        "id": 594,
        "name": "Necoclí",
        "departmentCode": 5
    },
    {
        "id": 595,
        "name": "Neira",
        "departmentCode": 17
    },
    {
        "id": 596,
        "name": "Neiva",
        "departmentCode": 41
    },
    {
        "id": 597,
        "name": "Nemocón",
        "departmentCode": 25
    },
    {
        "id": 598,
        "name": "Nilo",
        "departmentCode": 25
    },
    {
        "id": 599,
        "name": "Nimaima",
        "departmentCode": 25
    },
    {
        "id": 600,
        "name": "Nobsa",
        "departmentCode": 15
    },
    {
        "id": 601,
        "name": "Nocaima",
        "departmentCode": 25
    },
    {
        "id": 602,
        "name": "Norcasia",
        "departmentCode": 17
    },
    {
        "id": 603,
        "name": "Norosí",
        "departmentCode": 13
    },
    {
        "id": 604,
        "name": "Novita",
        "departmentCode": 27
    },
    {
        "id": 605,
        "name": "Nueva Granada",
        "departmentCode": 47
    },
    {
        "id": 606,
        "name": "Nuevo Colón",
        "departmentCode": 15
    },
    {
        "id": 607,
        "name": "Nunchía",
        "departmentCode": 85
    },
    {
        "id": 608,
        "name": "Nuquí",
        "departmentCode": 27
    },
    {
        "id": 609,
        "name": "Nátaga",
        "departmentCode": 41
    },
    {
        "id": 610,
        "name": "Obando",
        "departmentCode": 76
    },
    {
        "id": 611,
        "name": "Ocamonte",
        "departmentCode": 68
    },
    {
        "id": 612,
        "name": "Ocaña",
        "departmentCode": 54
    },
    {
        "id": 613,
        "name": "Oiba",
        "departmentCode": 68
    },
    {
        "id": 614,
        "name": "Oicatá",
        "departmentCode": 15
    },
    {
        "id": 615,
        "name": "Olaya",
        "departmentCode": 5
    },
    {
        "id": 616,
        "name": "Olaya Herrera",
        "departmentCode": 52
    },
    {
        "id": 617,
        "name": "Onzaga",
        "departmentCode": 68
    },
    {
        "id": 618,
        "name": "Oporapa",
        "departmentCode": 41
    },
    {
        "id": 619,
        "name": "Orito",
        "departmentCode": 86
    },
    {
        "id": 620,
        "name": "Orocué",
        "departmentCode": 85
    },
    {
        "id": 621,
        "name": "Ortega",
        "departmentCode": 73
    },
    {
        "id": 622,
        "name": "Ospina",
        "departmentCode": 52
    },
    {
        "id": 623,
        "name": "Otanche",
        "departmentCode": 15
    },
    {
        "id": 624,
        "name": "Ovejas",
        "departmentCode": 70
    },
    {
        "id": 625,
        "name": "Pachavita",
        "departmentCode": 15
    },
    {
        "id": 626,
        "name": "Pacho",
        "departmentCode": 25
    },
    {
        "id": 627,
        "name": "Padilla",
        "departmentCode": 19
    },
    {
        "id": 628,
        "name": "Paicol",
        "departmentCode": 41
    },
    {
        "id": 629,
        "name": "Pailitas",
        "departmentCode": 20
    },
    {
        "id": 630,
        "name": "Paime",
        "departmentCode": 25
    },
    {
        "id": 631,
        "name": "Paipa",
        "departmentCode": 15
    },
    {
        "id": 632,
        "name": "Pajarito",
        "departmentCode": 15
    },
    {
        "id": 633,
        "name": "Palermo",
        "departmentCode": 41
    },
    {
        "id": 634,
        "name": "Palestina",
        "departmentCode": 17
    },
    {
        "id": 635,
        "name": "Palestina",
        "departmentCode": 41
    },
    {
        "id": 636,
        "name": "Palmar",
        "departmentCode": 68
    },
    {
        "id": 637,
        "name": "Palmar de Varela",
        "departmentCode": 8
    },
    {
        "id": 638,
        "name": "Palmas del Socorro",
        "departmentCode": 68
    },
    {
        "id": 639,
        "name": "Palmira",
        "departmentCode": 76
    },
    {
        "id": 640,
        "name": "Palmito",
        "departmentCode": 70
    },
    {
        "id": 641,
        "name": "Palocabildo",
        "departmentCode": 73
    },
    {
        "id": 642,
        "name": "Pamplona",
        "departmentCode": 54
    },
    {
        "id": 643,
        "name": "Pamplonita",
        "departmentCode": 54
    },
    {
        "id": 644,
        "name": "Pandi",
        "departmentCode": 25
    },
    {
        "id": 645,
        "name": "Panqueba",
        "departmentCode": 15
    },
    {
        "id": 646,
        "name": "Paratebueno",
        "departmentCode": 25
    },
    {
        "id": 647,
        "name": "Pasca",
        "departmentCode": 25
    },
    {
        "id": 648,
        "name": "Patía (El Bordo)",
        "departmentCode": 19
    },
    {
        "id": 649,
        "name": "Pauna",
        "departmentCode": 15
    },
    {
        "id": 650,
        "name": "Paya",
        "departmentCode": 15
    },
    {
        "id": 651,
        "name": "Paz de Ariporo",
        "departmentCode": 85
    },
    {
        "id": 652,
        "name": "Paz de Río",
        "departmentCode": 15
    },
    {
        "id": 653,
        "name": "Pedraza",
        "departmentCode": 47
    },
    {
        "id": 654,
        "name": "Pelaya",
        "departmentCode": 20
    },
    {
        "id": 655,
        "name": "Pensilvania",
        "departmentCode": 17
    },
    {
        "id": 656,
        "name": "Peque",
        "departmentCode": 5
    },
    {
        "id": 657,
        "name": "Pereira",
        "departmentCode": 66
    },
    {
        "id": 658,
        "name": "Pesca",
        "departmentCode": 15
    },
    {
        "id": 659,
        "name": "Peñol",
        "departmentCode": 5
    },
    {
        "id": 660,
        "name": "Piamonte",
        "departmentCode": 19
    },
    {
        "id": 661,
        "name": "Pie de Cuesta",
        "departmentCode": 68
    },
    {
        "id": 662,
        "name": "Piedras",
        "departmentCode": 73
    },
    {
        "id": 663,
        "name": "Piendamó",
        "departmentCode": 19
    },
    {
        "id": 664,
        "name": "Pijao",
        "departmentCode": 63
    },
    {
        "id": 665,
        "name": "Pijiño",
        "departmentCode": 47
    },
    {
        "id": 666,
        "name": "Pinchote",
        "departmentCode": 68
    },
    {
        "id": 667,
        "name": "Pinillos",
        "departmentCode": 13
    },
    {
        "id": 668,
        "name": "Piojo",
        "departmentCode": 8
    },
    {
        "id": 669,
        "name": "Pisva",
        "departmentCode": 15
    },
    {
        "id": 670,
        "name": "Pital",
        "departmentCode": 41
    },
    {
        "id": 671,
        "name": "Pitalito",
        "departmentCode": 41
    },
    {
        "id": 672,
        "name": "Pivijay",
        "departmentCode": 47
    },
    {
        "id": 673,
        "name": "Planadas",
        "departmentCode": 73
    },
    {
        "id": 674,
        "name": "Planeta Rica",
        "departmentCode": 23
    },
    {
        "id": 675,
        "name": "Plato",
        "departmentCode": 47
    },
    {
        "id": 676,
        "name": "Policarpa",
        "departmentCode": 52
    },
    {
        "id": 677,
        "name": "Polonuevo",
        "departmentCode": 8
    },
    {
        "id": 678,
        "name": "Ponedera",
        "departmentCode": 8
    },
    {
        "id": 679,
        "name": "Popayán",
        "departmentCode": 19
    },
    {
        "id": 680,
        "name": "Pore",
        "departmentCode": 85
    },
    {
        "id": 681,
        "name": "Potosí",
        "departmentCode": 52
    },
    {
        "id": 682,
        "name": "Pradera",
        "departmentCode": 76
    },
    {
        "id": 683,
        "name": "Prado",
        "departmentCode": 73
    },
    {
        "id": 684,
        "name": "Providencia",
        "departmentCode": 52
    },
    {
        "id": 685,
        "name": "Providencia",
        "departmentCode": 88
    },
    {
        "id": 686,
        "name": "Pueblo Bello",
        "departmentCode": 20
    },
    {
        "id": 687,
        "name": "Pueblo Nuevo",
        "departmentCode": 23
    },
    {
        "id": 688,
        "name": "Pueblo Rico",
        "departmentCode": 66
    },
    {
        "id": 689,
        "name": "Pueblorrico",
        "departmentCode": 5
    },
    {
        "id": 690,
        "name": "Puebloviejo",
        "departmentCode": 47
    },
    {
        "id": 691,
        "name": "Puente Nacional",
        "departmentCode": 68
    },
    {
        "id": 692,
        "name": "Puerres",
        "departmentCode": 52
    },
    {
        "id": 693,
        "name": "Puerto Asís",
        "departmentCode": 86
    },
    {
        "id": 694,
        "name": "Puerto Berrío",
        "departmentCode": 5
    },
    {
        "id": 695,
        "name": "Puerto Boyacá",
        "departmentCode": 15
    },
    {
        "id": 696,
        "name": "Puerto Caicedo",
        "departmentCode": 86
    },
    {
        "id": 697,
        "name": "Puerto Carreño",
        "departmentCode": 99
    },
    {
        "id": 698,
        "name": "Puerto Colombia",
        "departmentCode": 8
    },
    {
        "id": 699,
        "name": "Puerto Concordia",
        "departmentCode": 50
    },
    {
        "id": 700,
        "name": "Puerto Escondido",
        "departmentCode": 23
    },
    {
        "id": 701,
        "name": "Puerto Gaitán",
        "departmentCode": 50
    },
    {
        "id": 702,
        "name": "Puerto Guzmán",
        "departmentCode": 86
    },
    {
        "id": 703,
        "name": "Puerto Leguízamo",
        "departmentCode": 86
    },
    {
        "id": 704,
        "name": "Puerto Libertador",
        "departmentCode": 23
    },
    {
        "id": 705,
        "name": "Puerto Lleras",
        "departmentCode": 50
    },
    {
        "id": 706,
        "name": "Puerto López",
        "departmentCode": 50
    },
    {
        "id": 707,
        "name": "Puerto Nare",
        "departmentCode": 5
    },
    {
        "id": 708,
        "name": "Puerto Nariño",
        "departmentCode": 91
    },
    {
        "id": 709,
        "name": "Puerto Parra",
        "departmentCode": 68
    },
    {
        "id": 710,
        "name": "Puerto Rico",
        "departmentCode": 18
    },
    {
        "id": 711,
        "name": "Puerto Rico",
        "departmentCode": 50
    },
    {
        "id": 712,
        "name": "Puerto Rondón",
        "departmentCode": 81
    },
    {
        "id": 713,
        "name": "Puerto Salgar",
        "departmentCode": 25
    },
    {
        "id": 714,
        "name": "Puerto Santander",
        "departmentCode": 54
    },
    {
        "id": 715,
        "name": "Puerto Tejada",
        "departmentCode": 19
    },
    {
        "id": 716,
        "name": "Puerto Triunfo",
        "departmentCode": 5
    },
    {
        "id": 717,
        "name": "Puerto Wilches",
        "departmentCode": 68
    },
    {
        "id": 718,
        "name": "Pulí",
        "departmentCode": 25
    },
    {
        "id": 719,
        "name": "Pupiales",
        "departmentCode": 52
    },
    {
        "id": 720,
        "name": "Puracé (Coconuco)",
        "departmentCode": 19
    },
    {
        "id": 721,
        "name": "Purificación",
        "departmentCode": 73
    },
    {
        "id": 722,
        "name": "Purísima",
        "departmentCode": 23
    },
    {
        "id": 723,
        "name": "Pácora",
        "departmentCode": 17
    },
    {
        "id": 724,
        "name": "Páez",
        "departmentCode": 15
    },
    {
        "id": 725,
        "name": "Páez (Belalcazar)",
        "departmentCode": 19
    },
    {
        "id": 726,
        "name": "Páramo",
        "departmentCode": 68
    },
    {
        "id": 727,
        "name": "Quebradanegra",
        "departmentCode": 25
    },
    {
        "id": 728,
        "name": "Quetame",
        "departmentCode": 25
    },
    {
        "id": 729,
        "name": "Quibdó",
        "departmentCode": 27
    },
    {
        "id": 730,
        "name": "Quimbaya",
        "departmentCode": 63
    },
    {
        "id": 731,
        "name": "Quinchía",
        "departmentCode": 66
    },
    {
        "id": 732,
        "name": "Quipama",
        "departmentCode": 15
    },
    {
        "id": 733,
        "name": "Quipile",
        "departmentCode": 25
    },
    {
        "id": 734,
        "name": "Ragonvalia",
        "departmentCode": 54
    },
    {
        "id": 735,
        "name": "Ramiriquí",
        "departmentCode": 15
    },
    {
        "id": 736,
        "name": "Recetor",
        "departmentCode": 85
    },
    {
        "id": 737,
        "name": "Regidor",
        "departmentCode": 13
    },
    {
        "id": 738,
        "name": "Remedios",
        "departmentCode": 5
    },
    {
        "id": 739,
        "name": "Remolino",
        "departmentCode": 47
    },
    {
        "id": 740,
        "name": "Repelón",
        "departmentCode": 8
    },
    {
        "id": 741,
        "name": "Restrepo",
        "departmentCode": 50
    },
    {
        "id": 742,
        "name": "Restrepo",
        "departmentCode": 76
    },
    {
        "id": 743,
        "name": "Retiro",
        "departmentCode": 5
    },
    {
        "id": 744,
        "name": "Ricaurte",
        "departmentCode": 25
    },
    {
        "id": 745,
        "name": "Ricaurte",
        "departmentCode": 52
    },
    {
        "id": 746,
        "name": "Rio Negro",
        "departmentCode": 68
    },
    {
        "id": 747,
        "name": "Rioblanco",
        "departmentCode": 73
    },
    {
        "id": 748,
        "name": "Riofrío",
        "departmentCode": 76
    },
    {
        "id": 749,
        "name": "Riohacha",
        "departmentCode": 44
    },
    {
        "id": 750,
        "name": "Risaralda",
        "departmentCode": 17
    },
    {
        "id": 751,
        "name": "Rivera",
        "departmentCode": 41
    },
    {
        "id": 752,
        "name": "Roberto Payán (San José)",
        "departmentCode": 52
    },
    {
        "id": 753,
        "name": "Roldanillo",
        "departmentCode": 76
    },
    {
        "id": 754,
        "name": "Roncesvalles",
        "departmentCode": 73
    },
    {
        "id": 755,
        "name": "Rondón",
        "departmentCode": 15
    },
    {
        "id": 756,
        "name": "Rosas",
        "departmentCode": 19
    },
    {
        "id": 757,
        "name": "Rovira",
        "departmentCode": 73
    },
    {
        "id": 758,
        "name": "Ráquira",
        "departmentCode": 15
    },
    {
        "id": 759,
        "name": "Río Iró",
        "departmentCode": 27
    },
    {
        "id": 760,
        "name": "Río Quito",
        "departmentCode": 27
    },
    {
        "id": 761,
        "name": "Río Sucio",
        "departmentCode": 17
    },
    {
        "id": 762,
        "name": "Río Viejo",
        "departmentCode": 13
    },
    {
        "id": 763,
        "name": "Río de oro",
        "departmentCode": 20
    },
    {
        "id": 764,
        "name": "Ríonegro",
        "departmentCode": 5
    },
    {
        "id": 765,
        "name": "Ríosucio",
        "departmentCode": 27
    },
    {
        "id": 766,
        "name": "Sabana de Torres",
        "departmentCode": 68
    },
    {
        "id": 767,
        "name": "Sabanagrande",
        "departmentCode": 8
    },
    {
        "id": 768,
        "name": "Sabanalarga",
        "departmentCode": 5
    },
    {
        "id": 769,
        "name": "Sabanalarga",
        "departmentCode": 8
    },
    {
        "id": 770,
        "name": "Sabanalarga",
        "departmentCode": 85
    },
    {
        "id": 771,
        "name": "Sabanas de San Angel (SAN ANGEL)",
        "departmentCode": 47
    },
    {
        "id": 772,
        "name": "Sabaneta",
        "departmentCode": 5
    },
    {
        "id": 773,
        "name": "Saboyá",
        "departmentCode": 15
    },
    {
        "id": 774,
        "name": "Sahagún",
        "departmentCode": 23
    },
    {
        "id": 775,
        "name": "Saladoblanco",
        "departmentCode": 41
    },
    {
        "id": 776,
        "name": "Salamina",
        "departmentCode": 17
    },
    {
        "id": 777,
        "name": "Salamina",
        "departmentCode": 47
    },
    {
        "id": 778,
        "name": "Salazar",
        "departmentCode": 54
    },
    {
        "id": 779,
        "name": "Saldaña",
        "departmentCode": 73
    },
    {
        "id": 780,
        "name": "Salento",
        "departmentCode": 63
    },
    {
        "id": 781,
        "name": "Salgar",
        "departmentCode": 5
    },
    {
        "id": 782,
        "name": "Samacá",
        "departmentCode": 15
    },
    {
        "id": 783,
        "name": "Samaniego",
        "departmentCode": 52
    },
    {
        "id": 784,
        "name": "Samaná",
        "departmentCode": 17
    },
    {
        "id": 785,
        "name": "Sampués",
        "departmentCode": 70
    },
    {
        "id": 786,
        "name": "San Agustín",
        "departmentCode": 41
    },
    {
        "id": 787,
        "name": "San Alberto",
        "departmentCode": 20
    },
    {
        "id": 788,
        "name": "San Andrés",
        "departmentCode": 68
    },
    {
        "id": 789,
        "name": "San Andrés Sotavento",
        "departmentCode": 23
    },
    {
        "id": 790,
        "name": "San Andrés de Cuerquía",
        "departmentCode": 5
    },
    {
        "id": 791,
        "name": "San Antero",
        "departmentCode": 23
    },
    {
        "id": 792,
        "name": "San Antonio",
        "departmentCode": 73
    },
    {
        "id": 793,
        "name": "San Antonio de Tequendama",
        "departmentCode": 25
    },
    {
        "id": 794,
        "name": "San Benito",
        "departmentCode": 68
    },
    {
        "id": 795,
        "name": "San Benito Abad",
        "departmentCode": 70
    },
    {
        "id": 796,
        "name": "San Bernardo",
        "departmentCode": 25
    },
    {
        "id": 797,
        "name": "San Bernardo",
        "departmentCode": 52
    },
    {
        "id": 798,
        "name": "San Bernardo del Viento",
        "departmentCode": 23
    },
    {
        "id": 799,
        "name": "San Calixto",
        "departmentCode": 54
    },
    {
        "id": 800,
        "name": "San Carlos",
        "departmentCode": 5
    },
    {
        "id": 801,
        "name": "San Carlos",
        "departmentCode": 23
    },
    {
        "id": 802,
        "name": "San Carlos de Guaroa",
        "departmentCode": 50
    },
    {
        "id": 803,
        "name": "San Cayetano",
        "departmentCode": 25
    },
    {
        "id": 804,
        "name": "San Cayetano",
        "departmentCode": 54
    },
    {
        "id": 805,
        "name": "San Cristobal",
        "departmentCode": 13
    },
    {
        "id": 806,
        "name": "San Diego",
        "departmentCode": 20
    },
    {
        "id": 807,
        "name": "San Eduardo",
        "departmentCode": 15
    },
    {
        "id": 808,
        "name": "San Estanislao",
        "departmentCode": 13
    },
    {
        "id": 809,
        "name": "San Fernando",
        "departmentCode": 13
    },
    {
        "id": 810,
        "name": "San Francisco",
        "departmentCode": 5
    },
    {
        "id": 811,
        "name": "San Francisco",
        "departmentCode": 25
    },
    {
        "id": 812,
        "name": "San Francisco",
        "departmentCode": 86
    },
    {
        "id": 813,
        "name": "San Gíl",
        "departmentCode": 68
    },
    {
        "id": 814,
        "name": "San Jacinto",
        "departmentCode": 13
    },
    {
        "id": 815,
        "name": "San Jacinto del Cauca",
        "departmentCode": 13
    },
    {
        "id": 816,
        "name": "San Jerónimo",
        "departmentCode": 5
    },
    {
        "id": 817,
        "name": "San Joaquín",
        "departmentCode": 68
    },
    {
        "id": 818,
        "name": "San José",
        "departmentCode": 17
    },
    {
        "id": 819,
        "name": "San José de Miranda",
        "departmentCode": 68
    },
    {
        "id": 820,
        "name": "San José de Montaña",
        "departmentCode": 5
    },
    {
        "id": 821,
        "name": "San José de Pare",
        "departmentCode": 15
    },
    {
        "id": 822,
        "name": "San José de Uré",
        "departmentCode": 23
    },
    {
        "id": 823,
        "name": "San José del Fragua",
        "departmentCode": 18
    },
    {
        "id": 824,
        "name": "San José del Guaviare",
        "departmentCode": 95
    },
    {
        "id": 825,
        "name": "San José del Palmar",
        "departmentCode": 27
    },
    {
        "id": 826,
        "name": "San Juan de Arama",
        "departmentCode": 50
    },
    {
        "id": 827,
        "name": "San Juan de Betulia",
        "departmentCode": 70
    },
    {
        "id": 828,
        "name": "San Juan de Nepomuceno",
        "departmentCode": 13
    },
    {
        "id": 829,
        "name": "San Juan de Pasto",
        "departmentCode": 52
    },
    {
        "id": 830,
        "name": "San Juan de Río Seco",
        "departmentCode": 25
    },
    {
        "id": 831,
        "name": "San Juan de Urabá",
        "departmentCode": 5
    },
    {
        "id": 832,
        "name": "San Juan del Cesar",
        "departmentCode": 44
    },
    {
        "id": 833,
        "name": "San Juanito",
        "departmentCode": 50
    },
    {
        "id": 834,
        "name": "San Lorenzo",
        "departmentCode": 52
    },
    {
        "id": 835,
        "name": "San Luis",
        "departmentCode": 73
    },
    {
        "id": 836,
        "name": "San Luís",
        "departmentCode": 5
    },
    {
        "id": 837,
        "name": "San Luís de Gaceno",
        "departmentCode": 15
    },
    {
        "id": 838,
        "name": "San Luís de Palenque",
        "departmentCode": 85
    },
    {
        "id": 839,
        "name": "San Marcos",
        "departmentCode": 70
    },
    {
        "id": 840,
        "name": "San Martín",
        "departmentCode": 20
    },
    {
        "id": 841,
        "name": "San Martín",
        "departmentCode": 50
    },
    {
        "id": 842,
        "name": "San Martín de Loba",
        "departmentCode": 13
    },
    {
        "id": 843,
        "name": "San Mateo",
        "departmentCode": 15
    },
    {
        "id": 844,
        "name": "San Miguel",
        "departmentCode": 68
    },
    {
        "id": 845,
        "name": "San Miguel",
        "departmentCode": 86
    },
    {
        "id": 846,
        "name": "San Miguel de Sema",
        "departmentCode": 15
    },
    {
        "id": 847,
        "name": "San Onofre",
        "departmentCode": 70
    },
    {
        "id": 848,
        "name": "San Pablo",
        "departmentCode": 13
    },
    {
        "id": 849,
        "name": "San Pablo",
        "departmentCode": 52
    },
    {
        "id": 850,
        "name": "San Pablo de Borbur",
        "departmentCode": 15
    },
    {
        "id": 851,
        "name": "San Pedro",
        "departmentCode": 5
    },
    {
        "id": 852,
        "name": "San Pedro",
        "departmentCode": 70
    },
    {
        "id": 853,
        "name": "San Pedro",
        "departmentCode": 76
    },
    {
        "id": 854,
        "name": "San Pedro de Cartago",
        "departmentCode": 52
    },
    {
        "id": 855,
        "name": "San Pedro de Urabá",
        "departmentCode": 5
    },
    {
        "id": 856,
        "name": "San Pelayo",
        "departmentCode": 23
    },
    {
        "id": 857,
        "name": "San Rafael",
        "departmentCode": 5
    },
    {
        "id": 858,
        "name": "San Roque",
        "departmentCode": 5
    },
    {
        "id": 859,
        "name": "San Sebastián",
        "departmentCode": 19
    },
    {
        "id": 860,
        "name": "San Sebastián de Buenavista",
        "departmentCode": 47
    },
    {
        "id": 861,
        "name": "San Vicente",
        "departmentCode": 5
    },
    {
        "id": 862,
        "name": "San Vicente del Caguán",
        "departmentCode": 18
    },
    {
        "id": 863,
        "name": "San Vicente del Chucurí",
        "departmentCode": 68
    },
    {
        "id": 864,
        "name": "San Zenón",
        "departmentCode": 47
    },
    {
        "id": 865,
        "name": "Sandoná",
        "departmentCode": 52
    },
    {
        "id": 866,
        "name": "Santa Ana",
        "departmentCode": 47
    },
    {
        "id": 867,
        "name": "Santa Bárbara",
        "departmentCode": 5
    },
    {
        "id": 868,
        "name": "Santa Bárbara",
        "departmentCode": 68
    },
    {
        "id": 869,
        "name": "Santa Bárbara (Iscuandé)",
        "departmentCode": 52
    },
    {
        "id": 870,
        "name": "Santa Bárbara de Pinto",
        "departmentCode": 47
    },
    {
        "id": 871,
        "name": "Santa Catalina",
        "departmentCode": 13
    },
    {
        "id": 872,
        "name": "Santa Fé de Antioquia",
        "departmentCode": 5
    },
    {
        "id": 873,
        "name": "Santa Genoveva de Docorodó",
        "departmentCode": 27
    },
    {
        "id": 874,
        "name": "Santa Helena del Opón",
        "departmentCode": 68
    },
    {
        "id": 875,
        "name": "Santa Isabel",
        "departmentCode": 73
    },
    {
        "id": 876,
        "name": "Santa Lucía",
        "departmentCode": 8
    },
    {
        "id": 877,
        "name": "Santa Marta",
        "departmentCode": 47
    },
    {
        "id": 878,
        "name": "Santa María",
        "departmentCode": 15
    },
    {
        "id": 879,
        "name": "Santa María",
        "departmentCode": 41
    },
    {
        "id": 880,
        "name": "Santa Rosa",
        "departmentCode": 13
    },
    {
        "id": 881,
        "name": "Santa Rosa",
        "departmentCode": 19
    },
    {
        "id": 882,
        "name": "Santa Rosa de Cabal",
        "departmentCode": 66
    },
    {
        "id": 883,
        "name": "Santa Rosa de Osos",
        "departmentCode": 5
    },
    {
        "id": 884,
        "name": "Santa Rosa de Viterbo",
        "departmentCode": 15
    },
    {
        "id": 885,
        "name": "Santa Rosa del Sur",
        "departmentCode": 13
    },
    {
        "id": 886,
        "name": "Santa Rosalía",
        "departmentCode": 99
    },
    {
        "id": 887,
        "name": "Santa Sofía",
        "departmentCode": 15
    },
    {
        "id": 888,
        "name": "Santana",
        "departmentCode": 15
    },
    {
        "id": 889,
        "name": "Santander de Quilichao",
        "departmentCode": 19
    },
    {
        "id": 890,
        "name": "Santiago",
        "departmentCode": 54
    },
    {
        "id": 891,
        "name": "Santiago",
        "departmentCode": 86
    },
    {
        "id": 892,
        "name": "Santo Domingo",
        "departmentCode": 5
    },
    {
        "id": 893,
        "name": "Santo Tomás",
        "departmentCode": 8
    },
    {
        "id": 894,
        "name": "Santuario",
        "departmentCode": 5
    },
    {
        "id": 895,
        "name": "Santuario",
        "departmentCode": 66
    },
    {
        "id": 896,
        "name": "Sapuyes",
        "departmentCode": 52
    },
    {
        "id": 897,
        "name": "Saravena",
        "departmentCode": 81
    },
    {
        "id": 898,
        "name": "Sardinata",
        "departmentCode": 54
    },
    {
        "id": 899,
        "name": "Sasaima",
        "departmentCode": 25
    },
    {
        "id": 900,
        "name": "Sativanorte",
        "departmentCode": 15
    },
    {
        "id": 901,
        "name": "Sativasur",
        "departmentCode": 15
    },
    {
        "id": 902,
        "name": "Segovia",
        "departmentCode": 5
    },
    {
        "id": 903,
        "name": "Sesquilé",
        "departmentCode": 25
    },
    {
        "id": 904,
        "name": "Sevilla",
        "departmentCode": 76
    },
    {
        "id": 905,
        "name": "Siachoque",
        "departmentCode": 15
    },
    {
        "id": 906,
        "name": "Sibaté",
        "departmentCode": 25
    },
    {
        "id": 907,
        "name": "Sibundoy",
        "departmentCode": 86
    },
    {
        "id": 908,
        "name": "Silos",
        "departmentCode": 54
    },
    {
        "id": 909,
        "name": "Silvania",
        "departmentCode": 25
    },
    {
        "id": 910,
        "name": "Silvia",
        "departmentCode": 19
    },
    {
        "id": 911,
        "name": "Simacota",
        "departmentCode": 68
    },
    {
        "id": 912,
        "name": "Simijaca",
        "departmentCode": 25
    },
    {
        "id": 913,
        "name": "Simití",
        "departmentCode": 13
    },
    {
        "id": 914,
        "name": "Sincelejo",
        "departmentCode": 70
    },
    {
        "id": 915,
        "name": "Sincé",
        "departmentCode": 70
    },
    {
        "id": 916,
        "name": "Sipí",
        "departmentCode": 27
    },
    {
        "id": 917,
        "name": "Sitionuevo",
        "departmentCode": 47
    },
    {
        "id": 918,
        "name": "Soacha",
        "departmentCode": 25
    },
    {
        "id": 919,
        "name": "Soatá",
        "departmentCode": 15
    },
    {
        "id": 920,
        "name": "Socha",
        "departmentCode": 15
    },
    {
        "id": 921,
        "name": "Socorro",
        "departmentCode": 68
    },
    {
        "id": 922,
        "name": "Socotá",
        "departmentCode": 15
    },
    {
        "id": 923,
        "name": "Sogamoso",
        "departmentCode": 15
    },
    {
        "id": 924,
        "name": "Solano",
        "departmentCode": 18
    },
    {
        "id": 925,
        "name": "Soledad",
        "departmentCode": 8
    },
    {
        "id": 926,
        "name": "Solita",
        "departmentCode": 18
    },
    {
        "id": 927,
        "name": "Somondoco",
        "departmentCode": 15
    },
    {
        "id": 928,
        "name": "Sonsón",
        "departmentCode": 5
    },
    {
        "id": 929,
        "name": "Sopetrán",
        "departmentCode": 5
    },
    {
        "id": 930,
        "name": "Soplaviento",
        "departmentCode": 13
    },
    {
        "id": 931,
        "name": "Sopó",
        "departmentCode": 25
    },
    {
        "id": 932,
        "name": "Sora",
        "departmentCode": 15
    },
    {
        "id": 933,
        "name": "Soracá",
        "departmentCode": 15
    },
    {
        "id": 934,
        "name": "Sotaquirá",
        "departmentCode": 15
    },
    {
        "id": 935,
        "name": "Sotara (Paispamba)",
        "departmentCode": 19
    },
    {
        "id": 936,
        "name": "Sotomayor (Los Andes)",
        "departmentCode": 52
    },
    {
        "id": 937,
        "name": "Suaita",
        "departmentCode": 68
    },
    {
        "id": 938,
        "name": "Suan",
        "departmentCode": 8
    },
    {
        "id": 939,
        "name": "Suaza",
        "departmentCode": 41
    },
    {
        "id": 940,
        "name": "Subachoque",
        "departmentCode": 25
    },
    {
        "id": 941,
        "name": "Sucre",
        "departmentCode": 19
    },
    {
        "id": 942,
        "name": "Sucre",
        "departmentCode": 68
    },
    {
        "id": 943,
        "name": "Sucre",
        "departmentCode": 70
    },
    {
        "id": 944,
        "name": "Suesca",
        "departmentCode": 25
    },
    {
        "id": 945,
        "name": "Supatá",
        "departmentCode": 25
    },
    {
        "id": 946,
        "name": "Supía",
        "departmentCode": 17
    },
    {
        "id": 947,
        "name": "Suratá",
        "departmentCode": 68
    },
    {
        "id": 948,
        "name": "Susa",
        "departmentCode": 25
    },
    {
        "id": 949,
        "name": "Susacón",
        "departmentCode": 15
    },
    {
        "id": 950,
        "name": "Sutamarchán",
        "departmentCode": 15
    },
    {
        "id": 951,
        "name": "Sutatausa",
        "departmentCode": 25
    },
    {
        "id": 952,
        "name": "Sutatenza",
        "departmentCode": 15
    },
    {
        "id": 953,
        "name": "Suárez",
        "departmentCode": 19
    },
    {
        "id": 954,
        "name": "Suárez",
        "departmentCode": 73
    },
    {
        "id": 955,
        "name": "Sácama",
        "departmentCode": 85
    },
    {
        "id": 956,
        "name": "Sáchica",
        "departmentCode": 15
    },
    {
        "id": 957,
        "name": "Tabio",
        "departmentCode": 25
    },
    {
        "id": 958,
        "name": "Tadó",
        "departmentCode": 27
    },
    {
        "id": 959,
        "name": "Talaigua Nuevo",
        "departmentCode": 13
    },
    {
        "id": 960,
        "name": "Tamalameque",
        "departmentCode": 20
    },
    {
        "id": 961,
        "name": "Tame",
        "departmentCode": 81
    },
    {
        "id": 962,
        "name": "Taminango",
        "departmentCode": 52
    },
    {
        "id": 963,
        "name": "Tangua",
        "departmentCode": 52
    },
    {
        "id": 964,
        "name": "Taraira",
        "departmentCode": 97
    },
    {
        "id": 965,
        "name": "Tarazá",
        "departmentCode": 5
    },
    {
        "id": 966,
        "name": "Tarqui",
        "departmentCode": 41
    },
    {
        "id": 967,
        "name": "Tarso",
        "departmentCode": 5
    },
    {
        "id": 968,
        "name": "Tasco",
        "departmentCode": 15
    },
    {
        "id": 969,
        "name": "Tauramena",
        "departmentCode": 85
    },
    {
        "id": 970,
        "name": "Tausa",
        "departmentCode": 25
    },
    {
        "id": 971,
        "name": "Tello",
        "departmentCode": 41
    },
    {
        "id": 972,
        "name": "Tena",
        "departmentCode": 25
    },
    {
        "id": 973,
        "name": "Tenerife",
        "departmentCode": 47
    },
    {
        "id": 974,
        "name": "Tenjo",
        "departmentCode": 25
    },
    {
        "id": 975,
        "name": "Tenza",
        "departmentCode": 15
    },
    {
        "id": 976,
        "name": "Teorama",
        "departmentCode": 54
    },
    {
        "id": 977,
        "name": "Teruel",
        "departmentCode": 41
    },
    {
        "id": 978,
        "name": "Tesalia",
        "departmentCode": 41
    },
    {
        "id": 979,
        "name": "Tibacuy",
        "departmentCode": 25
    },
    {
        "id": 980,
        "name": "Tibaná",
        "departmentCode": 15
    },
    {
        "id": 981,
        "name": "Tibasosa",
        "departmentCode": 15
    },
    {
        "id": 982,
        "name": "Tibirita",
        "departmentCode": 25
    },
    {
        "id": 983,
        "name": "Tibú",
        "departmentCode": 54
    },
    {
        "id": 984,
        "name": "Tierralta",
        "departmentCode": 23
    },
    {
        "id": 985,
        "name": "Timaná",
        "departmentCode": 41
    },
    {
        "id": 986,
        "name": "Timbiquí",
        "departmentCode": 19
    },
    {
        "id": 987,
        "name": "Timbío",
        "departmentCode": 19
    },
    {
        "id": 988,
        "name": "Tinjacá",
        "departmentCode": 15
    },
    {
        "id": 989,
        "name": "Tipacoque",
        "departmentCode": 15
    },
    {
        "id": 990,
        "name": "Tiquisio (Puerto Rico)",
        "departmentCode": 13
    },
    {
        "id": 991,
        "name": "Titiribí",
        "departmentCode": 5
    },
    {
        "id": 992,
        "name": "Toca",
        "departmentCode": 15
    },
    {
        "id": 993,
        "name": "Tocaima",
        "departmentCode": 25
    },
    {
        "id": 994,
        "name": "Tocancipá",
        "departmentCode": 25
    },
    {
        "id": 995,
        "name": "Toguí",
        "departmentCode": 15
    },
    {
        "id": 996,
        "name": "Toledo",
        "departmentCode": 5
    },
    {
        "id": 997,
        "name": "Toledo",
        "departmentCode": 54
    },
    {
        "id": 998,
        "name": "Tolú",
        "departmentCode": 70
    },
    {
        "id": 999,
        "name": "Tolú Viejo",
        "departmentCode": 70
    },
    {
        "id": 1000,
        "name": "Tona",
        "departmentCode": 68
    },
    {
        "id": 1001,
        "name": "Topagá",
        "departmentCode": 15
    },
    {
        "id": 1002,
        "name": "Topaipí",
        "departmentCode": 25
    },
    {
        "id": 1003,
        "name": "Toribío",
        "departmentCode": 19
    },
    {
        "id": 1004,
        "name": "Toro",
        "departmentCode": 76
    },
    {
        "id": 1005,
        "name": "Tota",
        "departmentCode": 15
    },
    {
        "id": 1006,
        "name": "Totoró",
        "departmentCode": 19
    },
    {
        "id": 1007,
        "name": "Trinidad",
        "departmentCode": 85
    },
    {
        "id": 1008,
        "name": "Trujillo",
        "departmentCode": 76
    },
    {
        "id": 1009,
        "name": "Tubará",
        "departmentCode": 8
    },
    {
        "id": 1010,
        "name": "Tuchín",
        "departmentCode": 23
    },
    {
        "id": 1011,
        "name": "Tulúa",
        "departmentCode": 76
    },
    {
        "id": 1012,
        "name": "Tumaco",
        "departmentCode": 52
    },
    {
        "id": 1013,
        "name": "Tunja",
        "departmentCode": 15
    },
    {
        "id": 1014,
        "name": "Tunungua",
        "departmentCode": 15
    },
    {
        "id": 1015,
        "name": "Turbaco",
        "departmentCode": 13
    },
    {
        "id": 1016,
        "name": "Turbaná",
        "departmentCode": 13
    },
    {
        "id": 1017,
        "name": "Turbo",
        "departmentCode": 5
    },
    {
        "id": 1018,
        "name": "Turmequé",
        "departmentCode": 15
    },
    {
        "id": 1019,
        "name": "Tuta",
        "departmentCode": 15
    },
    {
        "id": 1020,
        "name": "Tutasá",
        "departmentCode": 15
    },
    {
        "id": 1021,
        "name": "Támara",
        "departmentCode": 85
    },
    {
        "id": 1022,
        "name": "Támesis",
        "departmentCode": 5
    },
    {
        "id": 1023,
        "name": "Túquerres",
        "departmentCode": 52
    },
    {
        "id": 1024,
        "name": "Ubalá",
        "departmentCode": 25
    },
    {
        "id": 1025,
        "name": "Ubaque",
        "departmentCode": 25
    },
    {
        "id": 1026,
        "name": "Ubaté",
        "departmentCode": 25
    },
    {
        "id": 1027,
        "name": "Ulloa",
        "departmentCode": 76
    },
    {
        "id": 1028,
        "name": "Une",
        "departmentCode": 25
    },
    {
        "id": 1029,
        "name": "Unguía",
        "departmentCode": 27
    },
    {
        "id": 1030,
        "name": "Unión Panamericana (ÁNIMAS)",
        "departmentCode": 27
    },
    {
        "id": 1031,
        "name": "Uramita",
        "departmentCode": 5
    },
    {
        "id": 1032,
        "name": "Uribe",
        "departmentCode": 50
    },
    {
        "id": 1033,
        "name": "Uribia",
        "departmentCode": 44
    },
    {
        "id": 1034,
        "name": "Urrao",
        "departmentCode": 5
    },
    {
        "id": 1035,
        "name": "Urumita",
        "departmentCode": 44
    },
    {
        "id": 1036,
        "name": "Usiacuri",
        "departmentCode": 8
    },
    {
        "id": 1037,
        "name": "Valdivia",
        "departmentCode": 5
    },
    {
        "id": 1038,
        "name": "Valencia",
        "departmentCode": 23
    },
    {
        "id": 1039,
        "name": "Valle de San José",
        "departmentCode": 68
    },
    {
        "id": 1040,
        "name": "Valle de San Juan",
        "departmentCode": 73
    },
    {
        "id": 1041,
        "name": "Valle del Guamuez",
        "departmentCode": 86
    },
    {
        "id": 1042,
        "name": "Valledupar",
        "departmentCode": 20
    },
    {
        "id": 1043,
        "name": "Valparaiso",
        "departmentCode": 5
    },
    {
        "id": 1044,
        "name": "Valparaiso",
        "departmentCode": 18
    },
    {
        "id": 1045,
        "name": "Vegachí",
        "departmentCode": 5
    },
    {
        "id": 1046,
        "name": "Venadillo",
        "departmentCode": 73
    },
    {
        "id": 1047,
        "name": "Venecia",
        "departmentCode": 5
    },
    {
        "id": 1048,
        "name": "Venecia (Ospina Pérez)",
        "departmentCode": 25
    },
    {
        "id": 1049,
        "name": "Ventaquemada",
        "departmentCode": 15
    },
    {
        "id": 1050,
        "name": "Vergara",
        "departmentCode": 25
    },
    {
        "id": 1051,
        "name": "Versalles",
        "departmentCode": 76
    },
    {
        "id": 1052,
        "name": "Vetas",
        "departmentCode": 68
    },
    {
        "id": 1053,
        "name": "Viani",
        "departmentCode": 25
    },
    {
        "id": 1054,
        "name": "Vigía del Fuerte",
        "departmentCode": 5
    },
    {
        "id": 1055,
        "name": "Vijes",
        "departmentCode": 76
    },
    {
        "id": 1056,
        "name": "Villa Caro",
        "departmentCode": 54
    },
    {
        "id": 1057,
        "name": "Villa Rica",
        "departmentCode": 19
    },
    {
        "id": 1058,
        "name": "Villa de Leiva",
        "departmentCode": 15
    },
    {
        "id": 1059,
        "name": "Villa del Rosario",
        "departmentCode": 54
    },
    {
        "id": 1060,
        "name": "Villagarzón",
        "departmentCode": 86
    },
    {
        "id": 1061,
        "name": "Villagómez",
        "departmentCode": 25
    },
    {
        "id": 1062,
        "name": "Villahermosa",
        "departmentCode": 73
    },
    {
        "id": 1063,
        "name": "Villamaría",
        "departmentCode": 17
    },
    {
        "id": 1064,
        "name": "Villanueva",
        "departmentCode": 13
    },
    {
        "id": 1065,
        "name": "Villanueva",
        "departmentCode": 44
    },
    {
        "id": 1066,
        "name": "Villanueva",
        "departmentCode": 68
    },
    {
        "id": 1067,
        "name": "Villanueva",
        "departmentCode": 85
    },
    {
        "id": 1068,
        "name": "Villapinzón",
        "departmentCode": 25
    },
    {
        "id": 1069,
        "name": "Villarrica",
        "departmentCode": 73
    },
    {
        "id": 1070,
        "name": "Villavicencio",
        "departmentCode": 50
    },
    {
        "id": 1071,
        "name": "Villavieja",
        "departmentCode": 41
    },
    {
        "id": 1072,
        "name": "Villeta",
        "departmentCode": 25
    },
    {
        "id": 1073,
        "name": "Viotá",
        "departmentCode": 25
    },
    {
        "id": 1074,
        "name": "Viracachá",
        "departmentCode": 15
    },
    {
        "id": 1075,
        "name": "Vista Hermosa",
        "departmentCode": 50
    },
    {
        "id": 1076,
        "name": "Viterbo",
        "departmentCode": 17
    },
    {
        "id": 1077,
        "name": "Vélez",
        "departmentCode": 68
    },
    {
        "id": 1078,
        "name": "Yacopí",
        "departmentCode": 25
    },
    {
        "id": 1079,
        "name": "Yacuanquer",
        "departmentCode": 52
    },
    {
        "id": 1080,
        "name": "Yaguará",
        "departmentCode": 41
    },
    {
        "id": 1081,
        "name": "Yalí",
        "departmentCode": 5
    },
    {
        "id": 1082,
        "name": "Yarumal",
        "departmentCode": 5
    },
    {
        "id": 1083,
        "name": "Yolombó",
        "departmentCode": 5
    },
    {
        "id": 1084,
        "name": "Yondó (Casabe)",
        "departmentCode": 5
    },
    {
        "id": 1085,
        "name": "Yopal",
        "departmentCode": 85
    },
    {
        "id": 1086,
        "name": "Yotoco",
        "departmentCode": 76
    },
    {
        "id": 1087,
        "name": "Yumbo",
        "departmentCode": 76
    },
    {
        "id": 1088,
        "name": "Zambrano",
        "departmentCode": 13
    },
    {
        "id": 1089,
        "name": "Zapatoca",
        "departmentCode": 68
    },
    {
        "id": 1090,
        "name": "Zapayán (PUNTA DE PIEDRAS)",
        "departmentCode": 47
    },
    {
        "id": 1091,
        "name": "Zaragoza",
        "departmentCode": 5
    },
    {
        "id": 1092,
        "name": "Zarzal",
        "departmentCode": 76
    },
    {
        "id": 1093,
        "name": "Zetaquirá",
        "departmentCode": 15
    },
    {
        "id": 1094,
        "name": "Zipacón",
        "departmentCode": 25
    },
    {
        "id": 1095,
        "name": "Zipaquirá",
        "departmentCode": 25
    },
    {
        "id": 1096,
        "name": "Zona Bananera (PRADO - SEVILLA)",
        "departmentCode": 47
    },
    {
        "id": 1097,
        "name": "Ábrego",
        "departmentCode": 54
    },
    {
        "id": 1098,
        "name": "Íquira",
        "departmentCode": 41
    },
    {
        "id": 1099,
        "name": "Úmbita",
        "departmentCode": 15
    },
    {
        "id": 1100,
        "name": "Útica",
        "departmentCode": 25
    }
];
