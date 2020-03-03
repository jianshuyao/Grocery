//Step 2 -- Define Routes
import PageContent from './components/PageContent.vue'
import AddItem from './components/AddItem.vue'
import Login from './components/Login.vue'
export default[
    { path: '/', component: PageContent},
    { path: '/add', component: AddItem},
    { path: '/login', component: Login}
]