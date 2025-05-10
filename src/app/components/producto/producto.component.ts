import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  error: string | null = null;

  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    try {
      this.productos = this.productoService.obtenerProducto();
      if (this.productos.length === 0) {
        this.error = 'No se encontraron productos disponibles.';
      }
    } catch (e) {
      this.error = 'Error al cargar los productos. Por favor, recarga la página.';
      console.error('Error al cargar productos:', e);
    }
  }

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarProducto(producto);
  }
}