import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrl: './admin-form.component.scss',
})
export class AdminFormComponent implements OnInit {
  public productForm: FormGroup;

  constructor(private fb: FormBuilder, public formService: FormService) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    if (
      this.formService.getIsAddProduct() ||
      this.formService.getIsEditProduct()
    ) {
      this.productForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        country: ['', Validators.required],
        wholesalePrice: ['', Validators.required],
        count: ['', Validators.required],
        fields: this.fb.array([]),
        retailPrice: [''],
        category: [''],
        imgSrc: [
          'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
        ],
      });
    } else if (
      this.formService.getIsAddCategory() ||
      this.formService.getIsUpdateCategory()
    ) {
      this.productForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        imgSrc: ['https://i.postimg.cc/BvBv0Dqt/15.png'],
      });
    }
  }

  private createField(): FormGroup {
    return this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  public addField() {
    const fields = this.productForm.get('fields') as FormArray;
    fields.push(this.createField());
  }

  public invokeEditForm() {
    this.formService.invokeEditForm();
  }
  public invokeAddForm() {
    this.formService.invokeAddForm();
  }

  public onSubmit(): void {
    this.formService.onSubmit(this.productForm);
  }
}
