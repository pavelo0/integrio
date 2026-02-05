import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import Landing from './layouts/Landing';
import Service from './layouts/Service';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ServiceDashboardPage from './pages/ServiceDashboardPage';
import ServiceHomePage from './pages/ServiceHomePage';
import ServiceProfilePage from './pages/ServiceProfilePage';
import ServiceWorkshopPage from './pages/ServiceWorkshopPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Landing />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTRATION} element={<RegisterPage />} />

        <Route path={ROUTES.SERVICE} element={<Service />}>
          <Route path="home" element={<ServiceHomePage />} />
          <Route path="dashboard" element={<ServiceDashboardPage />} />
          <Route path="workshop" element={<ServiceWorkshopPage />} />
          <Route path="profile" element={<ServiceProfilePage />} />
          <Route index element={<Navigate to={ROUTES.SERVICE_HOME} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
