import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Models/producto';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-pruducto-list',
  templateUrl: './pruducto-list.component.html',
  styleUrl: './pruducto-list.component.css'
})
export class PruductoListComponent implements OnInit {

  producto: Producto [] = [];
    constructor (private productoService: ProductoService){}

    ngOnInit(): void {
      this.productoService.getproducto ()
        .subscribe({
        next: (producto: Producto[] )=>{this.producto=producto
        console.log(this.producto)
        },
        error:(err:any)=>{
          console.error(err)
        },
        complete:()=>{console.log('completado')}
        
      })
      
    }

}
