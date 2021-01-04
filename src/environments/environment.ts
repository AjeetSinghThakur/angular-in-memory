// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  bundlesOutputPath: 'assets/i18n',
  eventApiUrl: 'https://localhost:5001/api/',
  openIdConnectSettings: {
    authority: 'https://localhost:5010/',
    client_id: 'globoticketimplicit',
    redirect_uri: 'https://localhost:4200/signin-oidc',
    scope: 'openid profile globoticket.fullaccess',
    response_type: 'id_token token',
    post_logout_redirect_uri: 'https://localhost:4200/',
    automaticSilentRenew: true,
    silent_redirect_uri: 'https://localhost:4200/redirect-silentrenew'
  }
};

