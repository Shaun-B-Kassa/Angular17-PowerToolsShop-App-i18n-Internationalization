import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path: "store", component: StoreComponent},
    { path: "cart", component: CartComponent },
    { path: "", component: ShopComponent },
    { path: "shop", redirectTo: "", pathMatch: "full" }
];
