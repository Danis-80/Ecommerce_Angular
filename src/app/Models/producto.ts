export interface Producto {
    _id:            string;
    nombre:         string;
    description:    string;
    category:       string[];
    image_url:      string[];
    precio_venta:   number;
    precio_regular: number;
    slug?:           string;
    created_at:     Date;
    update_at?: Date
}