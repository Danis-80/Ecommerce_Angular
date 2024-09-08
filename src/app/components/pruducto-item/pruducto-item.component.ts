import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../Models/producto';

@Component({
  selector: 'app-pruducto-item',
  templateUrl: './pruducto-item.component.html',
  styleUrl: './pruducto-item.component.css'
})
export class PruductoItemComponent  implements OnInit{
  @Input() producto: Producto | undefined;
  ngOnInit(): void {
    console.log(this.producto)
  }

}
