import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '@interfaces/producto.inteface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-outputs',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
  ],
  templateUrl: './input-outputs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputsComponent implements OnDestroy {


  public products = signal<Product[]>([
    {
      id: 1,
      name: "Pro 2", 
      quantity: 0,
    },
    {
      id: 2,
      name: "Pro 2", 
      quantity: 0,
    },
  ]);

  private intervalSubscription = interval(1000).pipe(
    tap(() => {
      this.products.update( ( product => [
        ...product,
        {
          id: product.length + 1,
          name: `Producto ${ product.length + 1 }`,
          quantity:  0,
        }
      ] ) )
    }),
    take(7) //despues de 7 se limpia y nohace nada
  ).subscribe();

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  } 
}
