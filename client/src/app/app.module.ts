import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConfirmationService, MessageService } from 'primeng/api';

//COMPONENTS
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CallUsModalWindowComponent } from './components/call-us-modal-window/call-us-modal-window.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { AuthorizationFormComponent } from './components/authorization-form/authorization-form.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { TestCarouselComponent } from './components/test-carousel/test-carousel.component';
import { ErrorComponent } from './components/error/error.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { CallRequestTableComponent } from './components/call-request-table/call-request-table.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { ShowProductModalComponent } from './components/show-product-modal/show-product-modal.component';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { ConsultationTableComponent } from './components/consultation-table/consultation-table.component';
import { ProductComponent } from './components/product/product.component';
import { ScrollUpComponent } from './components/scroll-up/scroll-up.component';

//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FileUploadModule } from 'primeng/fileupload';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FixedPhoneNumberFormatInputDirective } from './directives/fixed-phone-number-format-input.directive';
import { MatSelectModule } from '@angular/material/select';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DropdownModule } from 'primeng/dropdown';

import { ScrollTopModule } from 'primeng/scrolltop';
import { TreeModule } from 'primeng/tree';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { MatSliderModule } from '@angular/material/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CartComponent } from './components/cart/cart.component';
import { MegamenuComponent } from './components/megamenu/megamenu.component';

// primeNG
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { DataViewModule } from 'primeng/dataview';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { ImageModule } from 'primeng/image';
import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConsultationComponent,
    SpinnerComponent,
    NotificationComponent,
    CarouselComponent,
    ProductsCarouselComponent,
    CallUsModalWindowComponent,
    AdminFormComponent,
    AuthorizationFormComponent,
    AdminPanelComponent,
    FooterComponent,
    ProductTableComponent,
    CategoryTableComponent,
    CatalogueComponent,
    FixedPhoneNumberFormatInputDirective,
    CallRequestTableComponent,
    CategoryPageComponent,
    ShowProductModalComponent,
    MainComponent,
    SearchComponent,
    ConsultationTableComponent,
    ProductComponent,
    TestCarouselComponent,
    ErrorComponent,
    FiltersComponent,
    ScrollUpComponent,
    CartComponent,
    MegamenuComponent,
  ],
  imports: [
    FileUploadModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatPaginator,
    MatGridListModule,
    MatCardModule,
    InputGroupAddonModule,
    InputGroupModule,
    TabViewModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    AsyncPipe,
    ButtonModule,
    SidebarModule,
    CarouselModule,
    DropdownModule,
    SidebarModule,
    ScrollTopModule,
    TreeModule,
    SliderModule,
    InputTextModule,
    MatSliderModule,
    CheckboxModule,
    MatCheckboxModule,
    InputMaskModule,
    BadgeModule,
    CardModule,
    InputNumberModule,
    DataViewModule,
    TableModule,
    DialogModule,
    FieldsetModule,
    ConfirmPopupModule,
    ToastModule,
    MessagesModule,
    ImageModule,
    SplitterModule,
    PanelModule,
    RippleModule,
    BreadcrumbModule,
    InputTextareaModule,
    AutoCompleteModule,
    MegaMenuModule,
  ],
  providers: [provideAnimationsAsync(), ConfirmationService, MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
