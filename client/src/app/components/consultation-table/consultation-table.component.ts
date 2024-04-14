import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IConsultation } from '../../interfaces/IConsultation';
import { ConsultationService } from '../../services/consultation.service';

@Component({
  selector: 'app-consultation-table',
  templateUrl: './consultation-table.component.html',
  styleUrl: './consultation-table.component.scss',
})
export class ConsultationTableComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;

  displayedColumns = ['_id', 'email', 'topic', 'message', 'delete'];

  dataSource: MatTableDataSource<IConsultation>;

  constructor(private consultationService: ConsultationService) {}

  ngOnInit() {
    this.consultationService.getAll().subscribe((data) => {
      this.dataSource = new MatTableDataSource<IConsultation>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator._intl.itemsPerPageLabel =
        'Запросов на странице: ';
    });
  }

  async deleteConsultation(id: String) {
    await this.consultationService.deleteById(id).subscribe((data) => {
      if (data.ok) {
        this.ngOnInit();
      }
    });
  }
}
