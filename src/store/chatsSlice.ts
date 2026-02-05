import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Chat {
  id: string;
  userId: string;
  name: string;
  domain: string;
}

interface ChatState {
  chats: Chat[];
  currentChat: Chat | null;
}

export interface CreateChatData {
  userId: string;
  name: string;
  domain?: string;
}

const initialState: ChatState = {
  chats: [],
  currentChat: null,
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState: initialState,
  reducers: {
    create: (state, action: PayloadAction<CreateChatData>) => {
      const existingChat = state.chats.find(
        (chat) => chat.userId === action.payload.userId && chat.name === action.payload.name
      );

      if (!existingChat) {
        state.chats.push({
          id: Date.now().toString(),
          userId: action.payload.userId,
          name: action.payload.name,
          domain: action.payload.domain ?? '',
        });
      }
    },
  },
});

export default chatsSlice.reducer;
export const { create } = chatsSlice.actions;
