import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private phoneNumber = new BehaviorSubject<string>('+380505667571');
  private location = new BehaviorSubject<string>(
    'Харьков, Проспект Гагарина 1'
  );
  private workingHours = new BehaviorSubject<{ days: string; hours: string }>({
    days: 'ПН-ПТ',
    hours: '08:00 - 18:00',
  });
  private socialIcons = new BehaviorSubject<string[]>([
    'viber',
    'telegram',
    'facebook',
    'instagram',
  ]);
  private languageSwitch = new BehaviorSubject<string>('RU | UA');

  constructor() {}

  getPhoneData(): Observable<string> {
    return this.phoneNumber.asObservable();
  }

  getLocationData(): Observable<string> {
    return this.location.asObservable();
  }

  getHoursData(): Observable<{ days: string; hours: string }> {
    return this.workingHours.asObservable();
  }

  getSocialIcons(): Observable<string[]> {
    return this.socialIcons.asObservable();
  }

  getLanguageSwitch(): Observable<string> {
    return this.languageSwitch.asObservable();
  }
}
