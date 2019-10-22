import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
// import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  todo = {};
  constructor(private storage: Storage, public http: HttpClient) { }

  ngOnInit() {

  }

  loginForm() {
    console.log(this.todo);
    // let a = this.todo.username;
    // let b = this.todo.password;
    this.storage.set('email', this.todo['email']);
    this.storage.set('password', this.todo['password']);

    this.storage.get('username').then((val) => {
      // console.log('Username is>>', val);
    });


    this.http.post('https://reqres.in/api/login', this.todo).subscribe(res => {
      console.log(res);
    }),
      err => {
        console.log('error occured', err);
      }
  }




}
