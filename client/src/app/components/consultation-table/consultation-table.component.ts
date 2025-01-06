import { IConsultation } from './../../interfaces/IConsultation';
import { ConsultationService } from './../../services/consultation.service';
import { Component, OnInit } from '@angular/core';
import { IColumn } from '../../interfaces/IColumn';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-consultation-table',
  templateUrl: './consultation-table.component.html',
  styleUrl: './consultation-table.component.scss',
})
export class ConsultationTableComponent implements OnInit {
  visible: boolean = false;
  current: IConsultation;
  consultations!: IConsultation[];
  cols!: IColumn[];

  constructor(
    private consultationService: ConsultationService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.consultationService.getAll().subscribe((data) => {
      this.consultations = data;
    });

    this.cols = [
      { field: '_id', header: 'Код' },
      { field: 'email', header: 'Почта' },
      { field: 'topic', header: 'Тема' },
      { field: 'message', header: 'Сообщение' },
      { field: '', header: '' },
      { field: '', header: '' },
    ];
  }

  async deleteConsultation(id: String) {
    await this.consultationService.deleteById(id).subscribe((data) => {
      if (data.ok) {
        this.ngOnInit();
      }
    });
  }

  show(consultation: IConsultation) {
    this.current = consultation;
    this.visible = true;
  }

  confirm(event: Event, id: String) {
    this.confirmationService.confirm({
      key: 'popup1',
      target: event.target as EventTarget,
      message: 'Вы точно хотите удалить запись?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      acceptIcon: 'pi pi-check',
      rejectIcon: 'pi pi-times',
      acceptLabel: ' ',
      rejectLabel: ' ',
      accept: () => {
        setTimeout(() => {
          this.deleteConsultation(id);
        }, 2100);
        this.messageService.clear();

        this.messageService.add({
          severity: 'info',
          summary: 'Запись удалена!',
          detail: 'Запись удалена успешно!',
        });
      },
      reject: () => {
        this.messageService.clear();
        this.messageService.add({
          severity: 'warn',
          summary: 'Удаление отменено!',
          detail: 'Запись не удалена!',
        });
      },
    });
  }
}
