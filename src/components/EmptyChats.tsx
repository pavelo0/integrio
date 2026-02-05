interface EmptyChatsProps {
  onOpenCreateModal: () => void;
}

const EmptyChats = ({ onOpenCreateModal }: EmptyChatsProps) => {
  const handleClick = () => {
    onOpenCreateModal();
  };

  return (
    <div className="bg-blue-500 w-full min-h-full max-h-screen">
      <h2>You dont have any chat</h2>
      <p>You can crate a new one</p>
      <button onClick={handleClick}>Create</button>
    </div>
  );
};

export default EmptyChats;
