import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SpinnerService } from './services/spinner.service';
import { CallUsModalWindowService } from './services/call-us-modal-window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private spinner: SpinnerService, public callUsModalWindow: CallUsModalWindowService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
      }
    });
  }

  ngOnDestroy(): void {}

  open() {
    // * form
  }
}
