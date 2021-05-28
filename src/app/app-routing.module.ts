import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { ProductOrderComponent } from './cart/product-order/product-order.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OutStoryComponent } from './out-story/out-story.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuardService } from './shared/services/guard.service';
import { CategoryComponent } from './shop/category/category.component';
import { ProductComponent } from './shop/category/product/product.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'out-story', component: OutStoryComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'shop', component: ShopComponent, children: [
    {path: ':id/:name', component: CategoryComponent}
  ]},
  {path: 'product/:id', component: ProductComponent},
  {path: 'cart', component: CartComponent, canActivate: [GuardService]},
  {path: 'order', component: ProductOrderComponent, canActivate: [GuardService]},
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
