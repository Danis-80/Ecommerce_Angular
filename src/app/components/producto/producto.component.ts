import { Component,OnDestroy,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Producto } from '../../Models/producto';
import { ProductoService } from '../../service/producto.service';
import { error } from 'console';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit, OnDestroy{
  slug: string| undefined
  producto:Producto | undefined
  productoSub: Subscription | undefined
  constructor(private route: ActivatedRoute, private productoService:ProductoService) {}
ngOnInit(): void {
 
  this.slug=this.route.snapshot.params['id']
   
   this.productoSub = this.productoService.getproducto()
   .subscribe({
    next : (productos: Producto[])=>{
      this.producto=productos.filter(p=> p.slug === this.slug)[0]
      
    },
    error:(err:any)=> {
      console.error ('Error',err)
    }
  
})

}
ngOnDestroy(): void {
  this.productoSub?.unsubscribe()
}
}
