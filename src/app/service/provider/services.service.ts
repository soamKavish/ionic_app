import { Injectable, OnInit } from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
// import { Response } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ServicesService implements OnInit {

  private apiUrl = 'https://reqres.in/api/';
  extractData: any;
  handleError: any;

  constructor(private http: HttpClient) { }
  header = '';

  ngOnInit() {
  }

}
