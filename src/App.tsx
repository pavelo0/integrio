import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import Landing from './layouts/Landing';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${ROUTES.HOME}`} element={<Landing />}>
          <Route index path={`${ROUTES.HOME}`} element={<LandingPage />} />
          <Route index path={`${ROUTES.LOGIN}`} element={<LoginPage />} />
          <Route index path={`${ROUTES.REGISTRATION}`} element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
