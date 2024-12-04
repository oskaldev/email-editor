// FormattingTools.tsx

import { FC } from 'react';
import { Bold, Italic, Underline, Eraser } from 'lucide-react';
import styles from '../../EmailEditor.module.scss';
import { TStyle } from '@utils/apply-style'

interface FormattingToolsProps {
  onClear: () => void;
  onApplyStyle: (style: TStyle, selectedText: string) => void;
  selectedText: string;
}

export const FormattingTools: FC<FormattingToolsProps> = ({
  onClear,
  onApplyStyle,
  selectedText,
}) => {
  return (
    <div className={styles.tools}>
      <button onClick={onClear}>
        <Eraser size={17} />
      </button>
      <button onClick={() => onApplyStyle('bold', selectedText)}>
        <Bold size={17} />
      </button>
      <button onClick={() => onApplyStyle('italic', selectedText)}>
        <Italic size={17} />
      </button>
      <button onClick={() => onApplyStyle('underline', selectedText)}>
        <Underline size={17} />
      </button>
    </div>
  );
};
