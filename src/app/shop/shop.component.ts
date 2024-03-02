import { Component, inject } from '@angular/core';

import { HeroComponent } from '../hero/hero.component';
import { NgFor, AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [HeroComponent, NgFor, AsyncPipe, CurrencyPipe, DatePipe],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  private productsService = inject(ProductsService);
  public piesOfTheWeek = this.productsService.getSpecials();

  public today = new Date();
}
