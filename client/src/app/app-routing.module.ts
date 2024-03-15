import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConsultationComponent } from './components/consultation/consultation.component';

const routes: Routes = [
  { path: 'contacts', component: AppComponent },
  { path: 'delivery', component: AppComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'products', component: AppComponent },
  { path: 'products/:id', component: AppComponent },
  { path: 'cart', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
