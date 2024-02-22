import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SubHeaderComponent } from './Components/sub-header/sub-header.component';
import { CarouselComponent } from './carousel/carousel.component';

//MODULES
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    SubHeaderComponent, CarouselComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
