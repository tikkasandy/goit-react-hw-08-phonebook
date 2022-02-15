
import { lazy, Suspense, useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from 'components/PrivateRouter';
import PublicRoute from 'components/PublicRoute';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import Footer from 'components/Footer/Footer';
import CustomLoader from 'components/CustomLoader';


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
  const dispatch = useDispatch();
  const isRefreshUser = useSelector(authSelectors.getIsRefreshUser);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshUser && (<>
        <AppBar />
        <main>
          <Container>
            <Suspense fallback={<CustomLoader />}>

              <Switch>

                <PublicRoute exact path='/register' restricted>
                  <RegisterPage />
                </PublicRoute>

                <PublicRoute exact path='/login' restricted redirectTo='/contacts'>
                  <LoginPage />
                </PublicRoute>

                <PrivateRoute path='/contacts'>
                  <ContactsPage />
                </PrivateRoute>

                <Redirect to="/login" />
              </Switch>

            </Suspense>
          </Container>
        </main>
      </>
      )}
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;