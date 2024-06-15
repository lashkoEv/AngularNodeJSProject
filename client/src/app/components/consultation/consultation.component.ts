import { Component, ViewChild } from '@angular/core';
import { ConsultationService } from '../../services/consultation.service';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss',
})
export class ConsultationComponent {
  @ViewChild('form') form!: NgForm;
  public inputEmail: string = '';
  public inputTopic: string = '';
  public inputMessage: string = '';

  constructor(
    private consultationService: ConsultationService,
    private messageService: MessageService
  ) {}

  public add(data: any) {
    console.log(data);
    this.consultationService.add(data).subscribe(
      (response) => {
        if (response.ok) {
          console.log(response);
          this.messageService.add({
            severity: 'success',
            summary: 'Сообщение отправлено!',
            detail: 'Сообщение отправлено!',
          });
          this.form.reset();
        }
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Ошибка',
          detail: 'Не удалось отправить сообщение.',
        });
      }
    );
  }
}
