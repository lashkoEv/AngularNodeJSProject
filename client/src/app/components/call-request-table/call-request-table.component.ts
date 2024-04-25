import { CallRequestService } from './../../services/call-request.service';
import { Component, OnInit } from '@angular/core';
import { ICallRequest } from '../../interfaces/ICallRequest';
import { IColumn } from '../../interfaces/IColumn';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-call-request-table',
  templateUrl: './call-request-table.component.html',
  styleUrl: './call-request-table.component.scss',
})
export class CallRequestTableComponent implements OnInit {
  visible: boolean = false;
  current: ICallRequest;
  callRequests!: ICallRequest[];
  cols!: IColumn[];

  constructor(
    private callRequestService: CallRequestService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.callRequestService.getAll().subscribe((data) => {
      this.callRequests = data;
    });

    this.cols = [
      { field: '_id', header: 'Код' },
      { field: 'name', header: 'Имя' },
      { field: 'phone', header: 'Телефон' },
      { field: '', header: '' },
      { field: '', header: '' },
    ];
  }

  private async deleteCallRequest(id: String) {
    await this.callRequestService.deleteById(id).subscribe((data) => {
      if (data.ok) {
        this.ngOnInit();
      }
    });
  }

  show(callRequest: ICallRequest) {
    this.current = callRequest;
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
          this.deleteCallRequest(id);
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
