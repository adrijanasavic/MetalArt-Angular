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
    ShopComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
