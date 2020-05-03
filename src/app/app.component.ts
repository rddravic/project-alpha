import { Component, OnInit } from '@angular/core';
import { Network } from '@ngx-pwa/offline';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Alpha User';
  networkStatus$;
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(protected network: Network, private authService: AuthService,
  private matIconRegistry: MatIconRegistry,
  private domSanitizer: DomSanitizer) {
    this.networkStatus$ = this.network.onlineChanges;
    this.matIconRegistry.addSvgIcon(
      "google",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/logo-google.svg")
    );
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit(){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
}
