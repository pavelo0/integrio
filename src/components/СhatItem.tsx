import { useDispatch, useSelector } from 'react-redux';
import { setCurrentChat, type Chat } from '../store/chatsSlice';
import type { RootState } from '../store/store';

interface ChatItemProps {
  chat: Chat;
}

const ChatItem = ({ chat }: ChatItemProps) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.chat.currentChat);
  const isActive = currentUser?.id === chat.id;

  return (
    <article
      onClick={() => dispatch(setCurrentChat(chat))}
      role="button"
      tabIndex={0}
      aria-label={`Chat: ${chat.name}, domain ${chat.domain}`}
      className="w-full h-82 rounded-2xl border-2 p-5 text-left cursor-pointer transition-colors hover:border-(--accent)/50 focus:outline-none"
      style={{
        backgroundColor: 'var(--hero-bg)',
        borderColor: isActive ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
      }}
    >
      <div className="" style={{ backgroundColor: 'rgba()' }}></div>
      <h2 className="text-lg font-semibold text-white tracking-tight">{chat.name}</h2>
      <p className="mt-1 text-sm text-slate-400">
        <span className="text-slate-500">Domain:</span> {chat.domain}
      </p>
      <p>{isActive ? 'Selected' : ''}</p>
    </article>
  );
};

export default ChatItem;
