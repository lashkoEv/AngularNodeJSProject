import { Component } from '@angular/core';
import { ConsultationService } from '../../services/consultation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss',
})
export class ConsultationComponent {
  public inputEmail: string = '';
  public inputTopic: string = '';
  public inputMessage: string = '';

  constructor(private consultationService: ConsultationService) {}

  // public isValidData()

  public add(data: any) {
    this.consultationService.add(data).subscribe((data) => {
      if (data.ok) {
        console.log(data);
      }
    });
  }
}
