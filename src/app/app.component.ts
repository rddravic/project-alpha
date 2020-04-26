import { Component } from '@angular/core';
import { Network } from '@ngx-pwa/offline';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Alpha';
  networkStatus$;
  constructor(protected network: Network) {
    this.networkStatus$ = this.network.onlineChanges;
  }
}
