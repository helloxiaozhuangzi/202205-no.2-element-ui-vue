import Vue from 'vue'
import App from './App.vue'
import {
  Button,
  Radio, Container, Main, Aside, Header, Menu, MenuItem, MenuItemGroup, Submenu, Dropdown, DropdownMenu, DropdownItem, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem,
  Tag,
  Form, FormItem,
  Input,
  Select,
  Option,
  Switch,
  DatePicker,

  Dialog,

  Pagination,

  MessageBox,
  Message


}
  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

import router from '../router'
import store from '../src/store'

// 5.5引入axios
import http from 'axios'

// 5.5引入mock
import '../api/mock'




Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio)


Vue.use(Container)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)

Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.use(Row)
Vue.use(Col)
Vue.use(Card)

Vue.use(Table)
Vue.use(TableColumn)

// 5.6注入面包屑
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

// 5.7注入Tag
Vue.use(Tag)

Vue.use(Form)
Vue.use(FormItem)

Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)

// 5.8分页组件
Vue.use(Pagination)



// 将axios绑定在vue的prototype属性上
Vue.prototype.$http = http

// 5.9
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
