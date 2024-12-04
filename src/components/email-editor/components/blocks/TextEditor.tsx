// components/TextEditor.tsx
import { FC } from 'react';
import styles from '../../EmailEditor.module.scss';

interface TextEditorProps {
  text: string;
  setText: (value: string) => void;
  handleTextSelect: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFocus: () => void;
}

export const TextEditor: FC<TextEditorProps> = ({
  text,
  setText,
  handleTextSelect,
  handleFocus,
}) => {
  return (
    <textarea
      onSelect={handleTextSelect}
      onFocus={handleFocus}
      onBlur={handleFocus}
      value={text}
      onChange={e => setText(e.target.value)}
      className={styles.editor}
    />
  );
};
