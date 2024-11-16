interface SendButtonProps {
  isPending: boolean;
  onSend: () => void;
}

export function SendButton({ isPending, onSend }: SendButtonProps) {
  return (
    <button disabled={isPending} onClick={onSend}>
      Send now
    </button>
  );
}
