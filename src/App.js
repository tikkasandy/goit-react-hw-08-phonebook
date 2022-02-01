
import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from 'components/Navbar';

const HomePage = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);
const LoginPage = lazy(() =>
  import(
    './views/LoginView' /* webpackChunkName: "login-page" */
  ),
);
const RegisterPage = lazy(() =>
  import('./views/RegisterView' /*webpackChunkName: "register-page" */),
);
const ContactsPage = lazy(() =>
  import('./views/ContactsView' /*webpackChunkName: "rcontacts-page" */),
);


const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/contacts' component={ContactsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;