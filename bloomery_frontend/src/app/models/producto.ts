

export interface Producto {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    wateringLevel?: number;
    price: number;
    discount?: number;
}

