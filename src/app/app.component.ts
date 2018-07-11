import {Component} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

interface AppLanguageState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message$: Observable<string>;

  constructor(private store: Store<AppLanguageState>) {
    this.message$ = this.store.select('message');
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'});
    // console.log(this.store.source.value.message);
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'})
  }
}
