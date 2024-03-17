import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalloutModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConsultationComponent,
    SpinnerComponent,
    NotificationComponent,
    AdminFormComponent,
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
    ReactiveFormsModule,
  ],
  providers: [provideAnimationsAsync(), IconSetService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
