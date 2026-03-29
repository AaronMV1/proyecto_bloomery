

import { Categoria } from "../models/categoria";


export const Categorias: Categoria[] = [
    {
        name: 'Plantas de Interiores',
        description: 'Descubre nuestra selección de plantas de interiores para embellecer tu hogar.',
        imageUrl: '/images/categorias/Interiores.png',
        productos: [
            {
                id: 1,
                name: 'Aglonema Rosa',
                imageUrl: '/images/productos/interiores/Aglonema Rosa.png',
                description: 'Planta ornamental de interior con hojas rosadas y verdes, ideal para dar un toque elegante y moderno a espacios con poca luz.',
                wateringLevel: 3,
                price: 35,
                discount: 10
            },
            {
                id: 2,
                name: 'Aglonema',
                imageUrl: '/images/productos/interiores/Aglonema.png',
                description: 'Planta resistente de interior con hojas verdes decorativas, perfecta para ambientes con luz indirecta.',
                wateringLevel: 3,
                price: 28
            },
            {
                id: 3,
                name: 'Alocasia',
                imageUrl: '/images/productos/interiores/Alocasia.png',
                description: 'Planta exótica de hojas grandes y llamativas, ideal para interiores con buena humedad.',
                wateringLevel: 4,
                price: 45
            },
            {
                id: 4,
                name: 'Boa Neón',
                imageUrl: '/images/productos/interiores/Boa Neon.png',
                description: 'Planta colgante de fácil cuidado con hojas verde brillante, perfecta para decorar estantes o repisas.',
                wateringLevel: 2,
                price: 25
            },
            {
                id: 5,
                name: 'Difenbachia',
                imageUrl: '/images/productos/interiores/Difenbachia.png',
                description: 'Planta de interior con hojas grandes y variegadas, muy usada para decoración de oficinas y hogares.',
                wateringLevel: 3,
                price: 30
            },
            {
                id: 6,
                name: 'Dracena Roja',
                imageUrl: '/images/productos/interiores/Dracena Roja.png',
                description: 'Planta elegante con tonos rojizos en sus hojas, ideal para interiores modernos.',
                wateringLevel: 2,
                price: 32,
                discount: 20
            },
            {
                id: 7,
                name: 'Dracena',
                imageUrl: '/images/productos/interiores/Dracena.png',
                description: 'Planta resistente y de bajo mantenimiento, perfecta para interiores con luz indirecta.',
                wateringLevel: 2,
                price: 26
            },
            {
                id: 8,
                name: 'Helecho Babilonico',
                imageUrl: '/images/productos/interiores/Helecho Babilonico.png',
                description: 'Planta frondosa que aporta frescura, ideal para ambientes húmedos y sombreados.',
                wateringLevel: 5,
                price: 30
            },
            {
                id: 9,
                name: 'Hortencias',
                imageUrl: '/images/productos/interiores/Hortencias.png',
                description: 'Planta con flores abundantes y coloridas, perfecta para dar vida a cualquier espacio.',
                wateringLevel: 5,
                price: 40,
                discount: 10
            },
            {
                id: 10,
                name: 'Licuala',
                imageUrl: '/images/productos/interiores/Licuala.png',
                description: 'Palmera ornamental de hojas redondeadas, ideal para interiores elegantes.',
                wateringLevel: 4,
                price: 55,
                discount: 15
            },
            {
                id: 11,
                name: 'Lirio de Paz',
                imageUrl: '/images/productos/interiores/Lirio de Paz.png',
                description: 'Planta de interior muy popular por sus flores blancas y su capacidad de purificar el aire.',
                wateringLevel: 4,
                price: 30
            },
            {
                id: 12,
                name: 'Monstera',
                imageUrl: '/images/productos/interiores/Monstera.png',
                description: 'Planta tropical de hojas grandes con cortes naturales, muy usada en decoración moderna.',
                wateringLevel: 3,
                price: 50,
                discount: 20
            },
            {
                id: 13,
                name: 'Oreja de Elefante',
                imageUrl: '/images/productos/interiores/Oreja de Elefante.png',
                description: 'Planta de hojas grandes y llamativas que aporta un estilo tropical a cualquier ambiente.',
                wateringLevel: 4,
                price: 45
            },
            {
                id: 14,
                name: 'Palmera Hawaiana',
                imageUrl: '/images/productos/interiores/Palmera Hawaiana.png',
                description: 'Palmera decorativa ideal para interiores, aporta frescura y elegancia.',
                wateringLevel: 3,
                price: 35
            },
            {
                id: 15,
                name: 'Peperonias',
                imageUrl: '/images/productos/interiores/Peperonias.png',
                description: 'Plantas compactas con hojas decorativas, ideales para espacios pequeños.',
                wateringLevel: 2,
                price: 22
            },
            {
                id: 16,
                name: 'Zamioculca',
                imageUrl: '/images/productos/interiores/Zamioculca.png',
                description: 'Planta muy resistente que requiere poco riego, perfecta para principiantes.',
                wateringLevel: 1,
                price: 28
            }
        ]
    },
    {
        name: 'Plantas de Exteriores',
        description: 'Explora nuestra variedad de plantas de exteriores para tu jardín.',
        imageUrl: '/images/categorias/Exteriores.png',
        productos: [
            {
                id: 1,
                name: 'Bugambilia Trepadora',
                imageUrl: '/images/productos/exteriores/Bugambilia Trepadora.png',
                description: 'Planta trepadora de exterior con flores vibrantes, ideal para decorar muros, rejas o jardines amplios.',
                wateringLevel: 2,
                price: 35
            },
            {
                id: 2,
                name: 'Bugambilia',
                imageUrl: '/images/productos/exteriores/Bugambilia.png',
                description: 'Planta ornamental resistente con flores coloridas, perfecta para jardines soleados.',
                wateringLevel: 2,
                price: 25
            },
            {
                id: 3,
                name: 'Cactus San Pedro',
                imageUrl: '/images/productos/exteriores/Cactus San Pedro.png',
                description: 'Cactus de rápido crecimiento, ideal para exteriores y climas secos, requiere muy poco riego.',
                wateringLevel: 1,
                price: 30,
                discount: 10
            },
            {
                id: 4,
                name: 'Crotón',
                imageUrl: '/images/productos/exteriores/Croton.png',
                description: 'Planta de hojas multicolores muy decorativas, ideal para dar vida a jardines o terrazas.',
                wateringLevel: 3,
                price: 28
            },
            {
                id: 5,
                name: 'Dieffenbachia',
                imageUrl: '/images/productos/exteriores/Dieffenbachia.png',
                description: 'Planta de hojas grandes y vistosas, adaptable tanto a exteriores como interiores con sombra.',
                wateringLevel: 3,
                price: 30
            },
            {
                id: 6,
                name: 'Ficus Benjamin',
                imageUrl: '/images/productos/exteriores/Ficus Benjamin.png',
                description: 'Árbol ornamental muy popular para jardines, aporta sombra y elegancia.',
                wateringLevel: 3,
                price: 45,
                discount: 15
            },
            {
                id: 7,
                name: 'Ficus Elástica',
                imageUrl: '/images/productos/exteriores/Ficus Elastica.png',
                description: 'Planta robusta con hojas grandes y brillantes, ideal para exteriores protegidos.',
                wateringLevel: 2,
                price: 35
            },
            {
                id: 8,
                name: 'Galán de Noche',
                imageUrl: '/images/productos/exteriores/Galan de Noche.png',
                description: 'Planta aromática que florece por la noche, ideal para jardines y patios.',
                wateringLevel: 3,
                price: 28
            },
            {
                id: 9,
                name: 'Lengua de Suegra',
                imageUrl: '/images/productos/exteriores/Lengua de Suegra.png',
                description: 'Planta muy resistente y de bajo mantenimiento, perfecta para exteriores e interiores.',
                wateringLevel: 1,
                price: 22,
                discount: 10
            },
            {
                id: 10,
                name: 'Palmera Bambú',
                imageUrl: '/images/productos/exteriores/Palmera Bambu.png',
                description: 'Palmera decorativa que aporta frescura y un estilo tropical a jardines o terrazas.',
                wateringLevel: 3,
                price: 40
            },
            {
                id: 11,
                name: 'Palmera Cicca',
                imageUrl: '/images/productos/exteriores/Palmera Cicca.png',
                description: 'Planta de crecimiento lento y gran resistencia, ideal para exteriores soleados.',
                wateringLevel: 1,
                price: 55,
                discount: 10
            },
            {
                id: 12,
                name: 'Palmera Rubelina',
                imageUrl: '/images/productos/exteriores/Palmera Rubelina.png',
                description: 'Palmera ornamental elegante, perfecta para jardines decorativos.',
                wateringLevel: 3,
                price: 38
            },
            {
                id: 13,
                name: 'Palmera Viajera',
                imageUrl: '/images/productos/exteriores/Palmera Viajera.png',
                description: 'Planta tropical de gran tamaño con hojas en abanico, ideal para jardines amplios.',
                wateringLevel: 4,
                price: 65,
                discount: 20
            },
            {
                id: 14,
                name: 'Pino',
                imageUrl: '/images/productos/exteriores/Pino.png',
                description: 'Árbol ornamental ideal para jardines, aporta sombra y un ambiente natural.',
                wateringLevel: 2,
                price: 30
            },
            {
                id: 15,
                name: 'Yuca',
                imageUrl: '/images/productos/exteriores/Yuca.png',
                description: 'Planta resistente al sol y sequía, ideal para exteriores de bajo mantenimiento.',
                wateringLevel: 1,
                price: 28
            },
            {
                id: 16,
                name: 'Zamioculca Negra',
                imageUrl: '/images/productos/exteriores/Zamioculca Negra.png',
                description: 'Variedad elegante de zamioculca con hojas oscuras, muy resistente y decorativa.',
                wateringLevel: 1,
                price: 45
            }
        ]
    },
    {
        name: 'Decoración y Macetas',
        description: 'Encuentra la decoración perfecta y macetas para tus plantas.',
        imageUrl: '/images/categorias/Decoraciones.png',
        productos: [
            {
                id: 1,
                name: 'Maceta de barro',
                imageUrl: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&auto=format&fit=crop&q=80',
                description: 'La Maceta de barro es ideal para tus plantas, ofreciendo un estilo rústico y natural.',
                price: 9.
            },
            {
                id: 2,
                name: 'Maceta blanca minimal',
                imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1200&auto=format&fit=crop&q=80',
                description: 'La Maceta blanca minimal es perfecta para un estilo moderno y elegante en tu hogar.',
                price: 12
            },
            {
                id: 3,
                name: 'Soporte de madera',
                imageUrl: 'https://images.unsplash.com/photo-1470165518248-ff4c3f2d7f18?w=1200&auto=format&fit=crop&q=80',
                description: 'El Soporte de madera es ideal para exhibir tus plantas de manera elegante y natural.',
                price: 19
            }
        ]
    },
    {
        name: 'Arreglos Fúnebres',
        description: 'Arreglos florales elegantes para honrar a tus seres queridos.',
        imageUrl: '/images/categorias/Funebres.png',
        productos: [
            {
                id: 1,
                name: 'Corona Floral Clásica',
                imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&auto=format&fit=crop&q=80',
                description: 'La Corona Floral Clásica es un arreglo elegante y tradicional para honrar a tus seres queridos.',
                price: 75
            },
            {
                id: 2,
                name: 'Arreglo Lirios Blancos',
                imageUrl: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=1200&auto=format&fit=crop&q=80',
                description: 'El Arreglo Lirios Blancos es un homenaje delicado y sofisticado para momentos de recuerdo.',
                price: 49
            },
            {
                id: 3,
                name: 'Centro de Mesa Sobrio',
                imageUrl: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1200&auto=format&fit=crop&q=80',
                description: 'El Centro de Mesa Sobrio es un arreglo elegante y discreto para cualquier ocasión.',
                price: 39
            }
        ]
    }
];



