// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDiTgBjTrYDtitN2sI3RK41UcYN9Ec53uQ',
    authDomain: 'tero-testing.firebaseapp.com',
    databaseURL: 'https://tero-testing.firebaseio.com',
    projectId: 'tero-testing',
    storageBucket: 'tero-testing.appspot.com',
    messagingSenderId: '288082662514'
  }
};
