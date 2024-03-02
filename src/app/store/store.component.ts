import { Component, inject } from '@angular/core';
import { ProductsService } from '../products.service';
import { HeroComponent } from '../hero/hero.component';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [HeroComponent, NgFor, AsyncPipe],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {
  private productsService = inject(ProductsService);
  public preparing = this.productsService.getFresh();
}
