// eslint-disable-next-line import/no-extraneous-dependencies
import electron from 'electron';
import Vue from 'vue';
import App from './renderer/App';
import { initializeReporter } from './modules/reporting';
import LoggerPlugin from './plugins/logger';
import vuetify from './plugins/vuetify';
import router from './renderer/router';
import store from './renderer/store';

initializeReporter();


const logger = electron.remote.getGlobal('logger');
logger.info('The renderer process got the logger');
Vue.use(LoggerPlugin, { logger });

Vue.config.productionTip = process.env.NODE_ENV !== 'production';

new Vue({
  router,
  store,

  created() {
    logger.info('Main Vue component registered');
  },

  vuetify,
  render: (h) => h(App),
}).$mount('#app');
