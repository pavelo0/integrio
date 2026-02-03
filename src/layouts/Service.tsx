import { Outlet } from 'react-router-dom';
import ServiceHeader from '../components/ServiceHeader';

const Service = () => {
  return (
    <div className="flex h-screen bg-(--hero-bg)">
      <ServiceHeader />
      <main className="flex-1 min-w-0 pl-[8rem] pt-[1rem]">
        <Outlet />
      </main>
    </div>
  );
};

export default Service;
