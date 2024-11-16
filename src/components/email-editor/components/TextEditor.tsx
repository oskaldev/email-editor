import styles from '../EmailEditor.module.scss';
interface TextEditorProps {
  text: string;
  setText: (text: string) => void;
  textRef: React.RefObject<HTMLTextAreaElement>;
  updateSelection: () => void;
}

export function TextEditor({ text, setText, textRef, updateSelection }: TextEditorProps) {
  return (
    <textarea
      ref={textRef}
      onSelect={updateSelection}
      className={styles.editor}
      spellCheck='false'
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}
