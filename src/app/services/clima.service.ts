import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class ClimaService {

  constructor(private _http: HttpClient) { }

  diasClima(): Observable <any>{
    const urlAPI='http://api.weatherapi.com/v1/forecast.json?key=586de621d2794a3586d223448220803&q=MEXICO&days=5';
    return this._http.get<any>(urlAPI)
    .pipe(map((res : Response) => {
      return res || {}
    }),
    catchError(this.handleError)
    );

  }

  // Error
handleError(error: HttpErrorResponse) {
  let msg = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    msg = error.error.message;
  } else {
    // server-side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(msg);
}

}
