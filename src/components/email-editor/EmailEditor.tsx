import { useEmailEditor } from '@hooks/index';
import styles from './EmailEditor.module.scss';
import { FormattingTools, SendButton, TextEditor, TextPreview } from './components';

export function EmailEditor() {
  const { text, setText, textRef, isPending, mutate, updateSelection, applyFormat } =
    useEmailEditor();

  return (
    <div>
      <h1>Email editor</h1>
      <TextPreview text={text} />
      <div className={styles.card}>
        <TextEditor
          text={text}
          setText={setText}
          textRef={textRef}
          updateSelection={updateSelection}
        />
        <div className={styles.actions}>
          <FormattingTools onClear={() => setText('')} onApplyFormat={applyFormat} />
          <SendButton isPending={isPending} onSend={mutate} />
        </div>
      </div>
    </div>
  );
}
