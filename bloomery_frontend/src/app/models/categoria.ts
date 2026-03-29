

import { Producto } from "./producto";


export interface Categoria {
    name: string;
    description?: string;
    imageUrl: string;
    productos: Producto[];
}

