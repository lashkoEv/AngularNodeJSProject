import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';

//COMPONENTS
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';

//MODULES
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { CarouselModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { HttpClientModule } from '@angular/common/http';
import { ProductsCarouselComponent } from './products-carousel/products-carousel.component';


@NgModule({
  declarations: [
    AppComponent, 
    CarouselComponent, ProductsCarouselComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    AppRoutingModule, 
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    CarouselModule,
    IconModule,
    HttpClientModule
  ],
  providers: [IconSetService, provideAnimationsAsync()],
=======

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalloutModule } from '@coreui/angular';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotificationComponent } from './components/notification/notification.component';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConsultationComponent,
    SpinnerComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalloutModule,
    IconModule,
  ],
  providers: [provideAnimationsAsync(), IconSetService],
>>>>>>> master
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
