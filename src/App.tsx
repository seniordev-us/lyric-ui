import { CssBaseline } from '@material-ui/core';
import type { FC } from 'react';
import { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { HttpClient } from './api/HttpClient';
import { AuthRoute } from './components/atoms/AuthRoute';
import { Theme } from './components/organisms/Theme';
import { PrivateRoute } from './components/PrivateRoute';
import { Routes } from './config/Routes';
import { useAppSelector } from './hooks/useAppSelector';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { RegisterPage } from './pages/RegisterPage';
import { UploadPage } from './pages/UploadPage';
import { persistor, store } from './redux';

export const App: FC = () => {
  return (
    <Theme>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <Content />
        </PersistGate>
      </ReduxProvider>
    </Theme>
  );
};

const Content: FC = () => {
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      HttpClient.setToken(token);
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute exact component={LoginPage} path={Routes.Login} />
        <AuthRoute exact component={RegisterPage} path={Routes.Register} />
        {/* <PrivateRoute exact component={DashboardPage} path={Routes.Dashboard} /> */}
        <PrivateRoute exact component={ProfilePage} path={Routes.Profile} />
        <PrivateRoute exact component={UploadPage} path={Routes.Upload} />

        <Redirect to={Routes.Login} />
      </Switch>
    </BrowserRouter>
  );
};
