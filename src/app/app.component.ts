import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // loadedFeature = 'recipe';
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
  private _sentence!: string;
  get sentence() {
    return this._sentence;
  }
  set sentence(value: string) {
    this._sentence = value;
    console.log(this._sentence);
  }
  writeLog(log: string) {
    console.log(log);
  }
}
