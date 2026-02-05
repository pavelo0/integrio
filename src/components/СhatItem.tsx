interface ChatItemProps {
  chat: {
    id: string;
    name: string;
    domain: string;
  };
}

const ChatItem = ({ chat }: ChatItemProps) => {
  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Chat: ${chat.name}, domain ${chat.domain}`}
      className="w-full h-82 rounded-2xl border p-5 text-left cursor-pointer transition-colors hover:border-(--accent)/50 focus:outline-none focus:ring-2 focus:ring-(--accent) focus:ring-offset-2 focus:ring-offset-(--hero-bg)"
      style={{
        backgroundColor: 'var(--hero-bg)',
        borderColor: 'rgba(255,255,255,0.1)',
      }}
    >
      <div className="" style={{ backgroundColor: 'rgba()' }}></div>
      <h2 className="text-lg font-semibold text-white tracking-tight">{chat.name}</h2>
      <p className="mt-1 text-sm text-slate-400">
        <span className="text-slate-500">Domain:</span> {chat.domain}
      </p>
    </article>
  );
};

export default ChatItem;
