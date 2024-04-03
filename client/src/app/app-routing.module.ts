import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';

const routes: Routes = [
  { path: 'contacts', component: AppComponent },
  { path: 'delivery', component: AppComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'catalogue/:id', component: AppComponent },
  { path: 'cart', component: AppComponent },
  { path: 'admin', component: AdminPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
