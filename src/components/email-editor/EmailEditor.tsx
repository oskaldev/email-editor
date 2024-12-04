import { FC } from 'react';
import styles from './EmailEditor.module.scss';
import { useEmailEditor } from '@hooks/email-hooks/useEmailEditor';
import { FormattingTools, Preview, SendButton, TextEditor } from './components'

const EmailEditor: FC = () => {
  const { text, setText, handleTextSelect, handleStyle, handleFocus, handleSend, selectedText } =
    useEmailEditor();
  return (
    <div>
      <h1>Email editor</h1>
      <Preview text={text} />
      <div className={styles.card}>
        <TextEditor
          text={text}
          setText={setText}
          handleTextSelect={handleTextSelect}
          handleFocus={handleFocus}
        />

        <div className={styles.actions}>
          <FormattingTools
            onClear={() => setText('')}
            onApplyStyle={handleStyle}
            selectedText={selectedText}
          />
          <SendButton onSend={handleSend} />
        </div>
      </div>
    </div>
  );
};

export default EmailEditor;