import Vue from 'vue'
import './plugins/vuetify'
import  './plugins/axios';
import App from './App.vue'

import router from './router.js'
import store from '@/store/store'

Vue.config.productionTip = false

Vue.filter('currency', value => {
	return '$ ' + value.toLocaleString()
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
