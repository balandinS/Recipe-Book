import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  featureSelect = 'recipe';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDA0vAXSwZaRs2VofE14xTiB0mAA3UoNOI',
      authDomain: 'ng-recipe-book-1d243.firebaseapp.com'
    });
  }

  onNavigate(seleckted: string) {
        this.featureSelect = seleckted;
  }

}
