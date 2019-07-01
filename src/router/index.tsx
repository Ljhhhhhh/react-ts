import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';
import BlankLayout from '../layouts/BlankLayout';
import ExceptionLayout from '../layouts/ExceptionLayout';

import Home from '../pages/home'
import About from '../pages/about'
import Login from '../pages/login'

const Router = () => {
  const RouterMap = [
    {
      path: '/404',
      exact: true,
      component: ExceptionLayout
    },
    {
      path: '/login',
      exact: true,
      component: Login,
      layout: BlankLayout
    },
    {
      path: '/home',
      exact: true,
      component: Home,
      layout: BasicLayout
    },
    {
      path: '/about',
      exact: true,
      component: About,
      layout: BasicLayout
    },
  ]

  const renderLayout = (route:any) => {
    const layout:any = route.layout || null;
    
    
    return layout ? <layout><Route {...route} /></layout> : <Route {...route} />
  }
  return (
    <BrowserRouter>
      <Switch>
        {
          RouterMap.map(r => {
            return renderLayout(r)
          })
        }
      </Switch>
    </BrowserRouter>
  )
}

// const Basic = () => {
//   return (
//     <BasicLayout>
//       <Route exact={true} path='/' component={Home} />
//       <Route exact={true} path='/about' component={About} />
//       <Redirect to="/" />
//     </BasicLayout>
//   )
// }

export default Router;

// export default [
//   {
//     path: '/home',
//     component: Home,
//   },
//   {
//     path: '/about',
//     component: About,
//   }
// ];