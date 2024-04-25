import { ProductModalWindowService } from './../../services/product-modal-window.service';
import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-show-product-modal',
  templateUrl: './show-product-modal.component.html',
  styleUrl: './show-product-modal.component.scss',
})
export class ShowProductModalComponent {
  @Input() public data: IProduct;

  constructor(private modalWindowService: ProductModalWindowService) {}

  close() {
    this.modalWindowService.changeFormState();
  }
}
