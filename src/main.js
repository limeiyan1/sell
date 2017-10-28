import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import 'common/stylus/index.css';
Vue.use(VueRouter);
Vue.use(VueResource);
let app = Vue.extend(App);
let router = new VueRouter({
	linkActiveClass: 'active'
});
router.map({
	'/': {
		component: goods
	},
	'/goods': {
		component: goods
	},
	'/ratings': {
		component: ratings
	},
	'/seller': {
		component: seller
	}
});
Vue.config.debug = true;
router.start(app, '#app');

