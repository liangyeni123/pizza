import Home from './components/Home';
import Menu from './components/Menu';
import Admin from './components/Admin';
import About from './components/about/About';
import Login from './components/Login';
import Register from './components/Register';

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

export const routes = [
  {path:'/',name:"homeLink",components:{
    default: Home,
    'orderingGuide':OrderingGuide,
    'delivery':Delivery,
    'history':History
  }},
  {path:'/menu',name:"menuLink",component:Menu},
  {path:'/admin',name:"adminLink",component:Admin},
  {path:'/about',name:"aboutLink",redirect:'/about/contact', component:About, children:[
    {path:'/about/contact', name:"contactLink", component:Contact},
    {path:'/history', name:"historyLink", component:History},
    {path:'/delivery', name:"deliveryLink", component:Delivery},
    {path:'/OrderingGuide', name:"orderingGuideLink", component:OrderingGuide},
  ]},
  {path:'/login',name:"loginLink",component:Login},
  {path:'/register',name:"registerLink",component:Register},
  {path:'*', redirect:'/'}
]
