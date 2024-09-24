import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, Input, output, Output } from '@angular/core';
import { Product } from '@interfaces/producto.inteface';
import { log } from 'node:console';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent { 

  //resivir el producto.
  // //forma tradicional
  // @Input({
  //   required: true,
  // }) product!: Product;
  //son nuevas funciones en angular
  public producto = input.required<Product>(); // no es un simple producto es una signal con el .required lo hace obligaorios

  //click a la reaccion del boton

  //forma anterior
  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>();

  //nueva forma
  public onIncrementQuantity = output<number>();

  public increment(): void {
    this.onIncrementQuantity.emit( this.producto().quantity + 1 );
  };

  public loginEffect = effect(() => {
    console.log("login user");
  })
}
