import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment, googleCredentials } from '../environments/environment';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(googleCredentials.web.client_id)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  imports:      [ BrowserModule, FormsModule, ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }), SocialLoginModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
