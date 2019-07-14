import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  private url: string = "https://jsonplaceholder.typicode.com/todo";
  private submitUrl: string = "";



  constructor(private http: HttpClient) { }

  getData(): Observable<[]> {
    return (
      this.http.get<[]>(this.url)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            return (throwError(err.message || "server error"))
          })
        )
    );
  }



  submitData(data) {
    console.log("service data", data)
    return (
      this.http.post<any>(this.submitUrl, data)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            return (throwError(err.message || "server error"))
          })
        )
    );
  }
}
