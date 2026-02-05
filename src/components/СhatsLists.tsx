import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import ChatItem from './СhatItem';

const ChatsList = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const allChats = useSelector((state: RootState) => state.chat.chats);
  const chats = currentUser
    ? allChats.filter((chat) => chat.userId === String(currentUser.id))
    : [];

  return (
    <section aria-labelledby="chats-heading" className="mt-8">
      <h2 id="chats-heading" className="sr-only">
        Your chat widgets
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {chats.map((chat) => (
          <li key={chat.id}>
            <ChatItem chat={chat} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChatsList;
