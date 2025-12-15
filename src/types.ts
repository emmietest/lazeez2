export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  category: string;
  details?: string[]; // Content for the back of the card
  image: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
}