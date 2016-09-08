const root = 'src/';

const gulpConfig = {
  dist: './dist/',
  scripts: [`${root}/app/**/*.js`, `!${root}/app/**/*.spec.js`],
  tests: `${root}/app/**/*.spec.js`,
  styles: `${root}/sass/*.scss`,
  templates: `${root}/app/**/*.html`,
  moduleStyles: [
    'angular-loading-bar/build/loading-bar.min.css',
    'angular-material/angular-material.min.css'
  ],
  modules: [
    'angular/angular.js',
    'angular-animate/angular-animate.js',
    'angular-aria/angular-aria.js',
    'angular-material/angular-material.js',
    'angular-ui-router/release/angular-ui-router.js',
    'firebase/firebase.js',
    'angularfire/dist/angularfire.js',
    'angular-loading-bar/build/loading-bar.min.js'
  ],
  static: [
    `${root}/index.html`,
    `${root}/fonts/**/*`,
    `${root}/img/**/*`
  ]
};




export default gulpConfig
