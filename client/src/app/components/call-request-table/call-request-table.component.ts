import { CallRequestService } from './../../services/call-request.service';
import { Component, OnInit } from '@angular/core';
import { ICallRequest } from '../../interfaces/ICallRequest';
import { IColumn } from '../../interfaces/IColumn';

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

  constructor(private callRequestService: CallRequestService) {}

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

  async deleteCallRequest(id: String) {
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
}
