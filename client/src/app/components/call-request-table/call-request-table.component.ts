import { CallRequestService } from './../../services/call-request.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ICallRequest } from '../../interfaces/ICallRequest';

@Component({
  selector: 'app-call-request-table',
  templateUrl: './call-request-table.component.html',
  styleUrl: './call-request-table.component.scss',
})
export class CallRequestTableComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;

  displayedColumns = ['_id', 'name', 'phone', 'delete'];

  dataSource: MatTableDataSource<ICallRequest>;

  constructor(private callRequestService: CallRequestService) {}

  ngOnInit() {
    this.callRequestService.getAll().subscribe((data) => {
      this.dataSource = new MatTableDataSource<ICallRequest>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator._intl.itemsPerPageLabel =
        'Продуктов на странице: ';
    });
  }

  async deleteCallRequest(id: String) {
    await this.callRequestService.deleteById(id).subscribe((data) => {
      if (data.ok) {
        this.ngOnInit();
      }
    });
  }
}
