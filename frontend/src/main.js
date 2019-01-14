// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: 'https://4b3ad81cf5ff4c02a8dffa5cc30e5dbb@sentry.io/1371393',
  integrations: [new Sentry.Integrations.Vue({ Vue })]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
