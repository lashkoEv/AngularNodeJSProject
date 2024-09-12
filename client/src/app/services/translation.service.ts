import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, concatMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private apiUrl = 'https://lingva.ml/api/v1';

  constructor(private http: HttpClient) {}

  translate(
    text: string,
    sourceLang: String,
    targetLang: String
  ): Observable<string> {
    const encodedText = encodeURIComponent(text);
    const url = `${this.apiUrl}/${sourceLang}/${targetLang}/${encodedText}`;

    return this.http.get<{ translation: string }>(url).pipe(
      map((response) => response.translation),
      catchError((error) => {
        if (error.status === 429) {
          console.warn(
            'Превышен лимит запросов, повторная попытка через 10 секунд...'
          );
          return of(null).pipe(
            delay(10000),
            concatMap(() => this.translate(text, sourceLang, targetLang))
          );
        }
        return throwError(error);
      })
    );
  }
}
