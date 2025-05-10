import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productosIniciales: Producto[] = [
    new Producto(1, 'Star Wars Black Series Crosshair', 700, 'assets/crosshair.png', 10, 1),
    new Producto(2, 'Star Wars Black Series Hunter', 780, 'assets/hunter.png', 10, 1),
    new Producto(3, 'Star Wars Black Series Tech', 550, 'assets/tech.png', 10, 1),
    new Producto(4, 'Star Wars Black Series Wrecker', 890, 'assets/wrecker.png', 10, 1),
    new Producto(5, 'Star Wars Black Series Omega', 400, 'assets/omega.png', 10, 1),
    new Producto(6, 'Star Wars Black Series Echo', 620, 'assets/echo.png', 10, 1),
  ];

  constructor() {
    this.inicializarDatos();
  }

  private inicializarDatos(): void {
    if (typeof localStorage === 'undefined') return;
    
    if (!localStorage.getItem('productos')) {
      localStorage.setItem('productos', JSON.stringify(this.productosIniciales));
    }
  }

  obtenerProducto(): Producto[] {
    try {
      const productosGuardados = localStorage.getItem('productos');
      if (productosGuardados) {
        return JSON.parse(productosGuardados);
      }
      return this.productosIniciales;
    } catch (error) {
      console.error('Error al obtener productos:', error);
      return this.productosIniciales;
    }
  }

  actualizarProducto(producto: Producto): void {
    const productos = this.obtenerProducto();
    const index = productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      productos[index] = producto;
      localStorage.setItem('productos', JSON.stringify(productos));
    }
  }
}