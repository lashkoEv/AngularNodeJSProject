import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrl: './admin-form.component.scss',
})
export class AdminFormComponent {
  public productForm: FormGroup;

  constructor(private fb: FormBuilder, public formService: FormService) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      country: ['', Validators.required],
      price: ['', Validators.required],
      count: ['', Validators.required],
      fields: [{ key: '' }],
      category: [''],
      imgSrc: [''],
    });
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
