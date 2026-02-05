import { useState } from 'react';
import { useSelector } from 'react-redux';
import CreateChatModal from '../components/CreateChatModal';
import EmptyChats from '../components/EmptyChats';
import ChatsList from '../components/СhatsLists';
import type { RootState } from '../store/store';

const ServiceHomePage = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const allChats = useSelector((state: RootState) => state.chat.chats);
  const userChatsLength = currentUser
    ? allChats.filter((c) => c.userId === String(currentUser.id)).length
    : 0;
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  const openChatCreateModal = () => setIsCreateModalOpen(true);
  const closeChatCreateModal = () => setIsCreateModalOpen(false);

  return (
    <div className="relative min-h-full py-8">
      <div className="absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="container relative z-10">
        <h1 className="text-4xl font-bold text-white tracking-tight">Chat library</h1>
        <p className="mt-3 text-slate-400">Your chat widgets will appear here.</p>

        {userChatsLength > 0 ? (
          <ChatsList />
        ) : (
          <EmptyChats onOpenCreateModal={openChatCreateModal} />
        )}
        <CreateChatModal isOpen={isCreateModalOpen} onClose={closeChatCreateModal} />
      </div>
    </div>
  );
};

export default ServiceHomePage;
