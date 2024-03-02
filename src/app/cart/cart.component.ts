import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../product';
import { ProductsService } from '../products.service';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf,NgFor, CurrencyPipe, AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private productsService = inject(ProductsService);
  public cart$: Observable<Cart> = this.productsService.getCart();
}
