import Vue from 'vue'
import AppAside from '~/components/Aside.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import Callout from '~/components/Callout.vue'
import AppFooter from '~/components/Footer.vue'
import AppHeader from '~/components/Header/Header.vue'
import Sidebar from '~/components/Sidebar/Sidebar.vue'
import CustomForm from '~/components/form/form.vue'
import CardLine1ChartExample from '~/components/dashboard/CardLine1ChartExample'
import CardLine2ChartExample from '~/components/dashboard/CardLine2ChartExample'
import CardLine3ChartExample from '~/components/dashboard/CardLine3ChartExample'
import CardBarChartExample from '~/components/dashboard/CardBarChartExample'
import MainChartExample from '~/components/dashboard/MainChartExample'
import SocialBoxChartExample from '~/components/dashboard/SocialBoxChartExample'
import CalloutChartExample from '~/components/dashboard/CalloutChartExample'
import BootstrapVue from 'bootstrap-vue'

Vue.component('AppAside', AppAside)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('Callout', Callout)
Vue.component('AppFooter', AppFooter)
Vue.component('AppHeader', AppHeader)
Vue.component('Sidebar', Sidebar)
Vue.component('CardLine1ChartExample', CardLine1ChartExample)
Vue.component('CardLine2ChartExample', CardLine2ChartExample)
Vue.component('CardLine3ChartExample', CardLine3ChartExample)
Vue.component('CardBarChartExample', CardBarChartExample)
Vue.component('MainChartExample', MainChartExample)
Vue.component('SocialBoxChartExample', SocialBoxChartExample)
Vue.component('CalloutChartExample', CalloutChartExample)
Vue.component('customForm', CustomForm)
Vue.use(BootstrapVue)
