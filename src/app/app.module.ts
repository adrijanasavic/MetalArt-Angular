import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OutStoryComponent } from './out-story/out-story.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ShopComponent } from './shop/shop.component';
import { ShopService } from './shared/services/shop.service';
import { CategoryComponent } from './shop/category/category.component';
import { ProductComponent } from './shop/category/product/product.component';
import { MeetYouDialogComponent } from './auth/meet-you-dialog/meet-you-dialog.component';
import { HomeService } from './shared/services/home.service';
import { AuthService } from './shared/services/auth.service';
import { GuardService } from './shared/services/guard.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryCart } from './shared/in-memory-local-base/in-memory-cart';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    OutStoryComponent,
    GalleryComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    ShopComponent,
    CategoryComponent,
    ProductComponent,
    MeetYouDialogComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryCart, { dataEncapsulation: false }
    ),
    MatDialogModule
  ],
  providers: [
    ShopService,
    HomeService,
    AuthService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
