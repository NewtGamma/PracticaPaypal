export class Producto {
  constructor(
    public id: number,
    public nombre: string,
    public precio: number,
    public imagen: string,
    public stock: number,
    public cantidad: number = 1 // Agrega esta propiedad con valor por defecto 1
  ) {}
}