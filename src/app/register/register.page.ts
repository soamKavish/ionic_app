import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  card: any;
  constructor() { }

  ngOnInit() {
  }

  //    card = document.querySelector('.card');
  // card.addEventListener( 'click', function() {
  //   card.classList.toggle('is-flipped');
  // });

  rightFunction() {
    let card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
  }

  leftFunction() {
    let card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
  }

  loadData(event) {
    console.log(event);
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }


}
