// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true
};

export const googleCredentials = {
	"web":{
			"client_id":"2953282896-c535rpc4t3fg054708pcad7hi32l3p8q.apps.googleusercontent.com",
			"project_id":"dev-project-alpha",
			"auth_uri":"https://accounts.google.com/o/oauth2/auth",
			"token_uri":"https://oauth2.googleapis.com/token",
			"auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
			"client_secret":"zi4QiMc8C2mD-t6dfLowJxDk",
			"redirect_uris":["https://project-alpha.stackblitz.io"],
			"javascript_origins":["https://project-alpha.stackblitz.io"]
			}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
