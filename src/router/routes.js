// Layout
// import DefaultLayout from '@/layouts/DefaultLayout';

// GeneralViews
// import NotFound from '@/views/GeneralViews/NotFoundPage';

const Home = () => import('@/pages/index.vue');

const routes = [
  {
    path: '/',
    component: Home,
    name: 'index'
  },
  // {
  //   path: '/products',
  //   component: DefaultLayout,
  //   redirect: {name: 'employee.index'},
  //   name: 'product',
  //   meta: {BreadCrumb: 'Produtos'},
  //   children: [
  //     ...withPrefix('/employees', 'employee.','Funcionários', [
  //       {path: '/', name: 'index', component: IndexEmployee, meta: {BreadCrumb: 'Listagem'}},
  //       {path: '/show/:id', name: 'show', component: ShowEmployee, props: true, meta: {BreadCrumb: 'Exibição'}},
  //     ])
  //   ]
  // }
  // {
  //   path: '/checkout',
  //   component: DefaultLayout,
  //   redirect: {name: 'customer.index'},
  //   name: 'checkout',
  //   meta: {BreadCrumb: 'Checkout'},
  //   children: [
  //     ...withPrefix('/customers', 'customer.', true, 'Clientes',[
  //       {path: '/', name: 'index', component: IndexCustomer, meta: {BreadCrumb: 'Listagem'}},
  //       {path: '/create', name: 'create', component: CreateCustomer, meta: {BreadCrumb: 'Criação'}},
  //       {path: '/edit/:id', name: 'edit', component: EditCustomer, props: true, meta: {BreadCrumb: 'Edição'}},
  //       {path: '/show/:id', name: 'show', component: ShowCustomer, props: true, meta: {BreadCrumb: 'Exibição'}},
  //     ])
  //   ]
  // }
];

export default routes;
