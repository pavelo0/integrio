import { useSelector } from 'react-redux';
import ChatNotSelected from '../components/ChatNotSelected';
import ChatStats from '../components/ChatStats';
import type { RootState } from '../store/store';

const ServiceDashboardPage = () => {
  const currentChat = useSelector((state: RootState) => state.chat.currentChat);

  return (
    <div className="relative min-h-full py-8">
      <div className="absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="container relative z-10">
        <h1 className="text-4xl font-bold text-white tracking-tight">Dashboard</h1>
        <p className="mt-3 text-slate-400">Dashboard content.</p>

        <div className="mt-8">{currentChat ? <ChatStats /> : <ChatNotSelected />}</div>
      </div>
    </div>
  );
};

export default ServiceDashboardPage;
