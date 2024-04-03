import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
  animations: [
    trigger('fade', [
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        })
      ),
      transition('hidden => visible', [
        animate(
          '0.5s ease-in-out',
          keyframes([
            style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(50%)', offset: 0.5 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
          ])
        ),
      ]),
      transition('visible => hidden', [
        animate(
          '0.3s ease-in-out',
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(-50%)', offset: 0.5 }),
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class NotificationComponent implements OnInit {
  constructor(private notification: NotificationService) {}
  public callNotify() {
    this.notification.notify();
  }

  public getIsVisible() {
    return this.notification.getIsVisible();
  }
  ngOnInit(): void {}
}
