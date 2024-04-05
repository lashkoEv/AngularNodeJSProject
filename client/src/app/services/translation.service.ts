import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {}

  initializeTranslation() {
    this.translate.addLangs(['ua', 'ru']);
    this.translate.setDefaultLang('ua');
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }
}
