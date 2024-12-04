// components/SendButton.tsx
import { FC } from 'react';

interface SendButtonProps {
  onSend: () => void;
}

export const SendButton: FC<SendButtonProps> = ({ onSend }) => {
  return <button onClick={onSend}>Send</button>;
};
