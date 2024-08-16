import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IColumn } from '../../interfaces/IColumn';
import { OrderFormService } from '../../services/order-form.service';
import { IOrdering } from '../../interfaces/IOrdering';
import { OrderStatus } from '../../interfaces/IOrdering';
@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrl: './order-table.component.scss',
})
export class OrderTableComponent {
  visible: boolean = false;
  current: IOrdering;
  orders!: IOrdering[];
  cols!: IColumn[];
  selectedStatus: OrderStatus;
  statusOptions: { label: string; value: OrderStatus }[];
  constructor(
    private orderFormService: OrderFormService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.orderFormService.getAll().subscribe((data) => {
      this.orders = data;
      console.log(data);
    });

    this.statusOptions = [
      { label: 'Новий', value: OrderStatus.PENDING },
      { label: 'Підтверджений', value: OrderStatus.CONFIRMED },
      { label: 'Відправлений', value: OrderStatus.SHIPPED },
      { label: 'Виконаний', value: OrderStatus.COMPLETED },
    ];

    this.cols = [
      { field: '_id', header: 'Код' },
      { field: 'email', header: 'Почта' },
      // { field: 'topic', header: 'Тема' },
      // { field: 'message', header: 'Сообщение' },
      { field: 'status', header: 'Статус' },
      { field: '', header: '' },
    ];
  }

  async deleteOrder(id: String) {
    await this.orderFormService.deleteById(id).subscribe((data) => {
      if (data.ok) {
        this.ngOnInit();
      }
    });
  }

  async changeStatus(order: IOrdering) {
    await this.orderFormService.updateById(order).subscribe((data) => {
      if (data.ok) {
        console.log('NEW STATUS', data);
      }
    });
  }

  show(order: IOrdering) {
    this.current = order;
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
          this.deleteOrder(id);
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
