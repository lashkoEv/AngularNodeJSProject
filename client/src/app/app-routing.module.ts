import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { ErrorComponent } from './components/error/error.component';
import { CartComponent } from './components/cart/cart.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AuthorizationFormComponent } from './components/authorization-form/authorization-form.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contacts', component: AppComponent },
  { path: 'delivery', component: AppComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'category/:id', component: CategoryPageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'checkout', component: OrderPageComponent },
  { path: 'login', component: AuthorizationFormComponent },
  { path: '**', pathMatch: 'full', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
