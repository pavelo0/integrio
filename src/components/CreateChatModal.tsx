import { zodResolver } from '@hookform/resolvers/zod';
import type React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createChatSchema, type CreateChat } from '../schemas/chats';
import { create } from '../store/chatsSlice';
import type { RootState } from '../store/store';

interface CreateChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateChatModal = ({ isOpen, onClose }: CreateChatModalProps) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const chats = useSelector((state: RootState) => state.chat.chats);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<CreateChat>({
    resolver: zodResolver(createChatSchema),
    mode: 'onSubmit',
    defaultValues: {
      chatName: '',
      domain: '',
    },
  });

  const handleBackdropClick = () => onClose();
  const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

  const handleCreateChat = (data: CreateChat) => {
    if (!currentUser) return;

    const userId = String(currentUser.id);
    const existingChat = chats.find(
      (chat) => chat.userId === userId && chat.name === data.chatName.trim()
    );

    if (existingChat) {
      setError('chatName', {
        type: 'manual',
        message: 'Чат с таким именем уже существует.',
      });
      return;
    }

    dispatch(
      create({
        userId,
        name: data.chatName.trim(),
        domain: data.domain?.trim() || undefined,
      })
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="w-full z-50 h-screen flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="w-150 h-100 bg-amber-200" onClick={handleContentClick}>
        <h2>Create a new chat</h2>

        <form onSubmit={handleSubmit(handleCreateChat)} noValidate>
          <div>
            <label htmlFor="chatName">Enter chat name</label>
            <input
              id="chatName"
              type="text"
              placeholder="MyNewChat"
              autoComplete="off"
              {...register('chatName')}
            />
            {errors.chatName?.message && (
              <p className="text-xs text-rose-400">{errors.chatName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="domain">Enter chat&apos;s domain (optional)</label>
            <input
              id="domain"
              type="text"
              placeholder="MyDomain"
              autoComplete="off"
              {...register('domain')}
            />
            {errors.domain?.message && (
              <p className="text-xs text-rose-400">{errors.domain.message}</p>
            )}
          </div>

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateChatModal;
