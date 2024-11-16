import { TStyle } from '@utils/apply-style';
import { Bold, Eraser, Italic, Underline } from 'lucide-react';
import styles from '../EmailEditor.module.scss';

interface FormattingToolsProps {
  onClear: () => void;
  onApplyFormat: (type: TStyle) => void;
}

export function FormattingTools({ onClear, onApplyFormat }: FormattingToolsProps) {
  return (
    <div className={styles.tools}>
      <button onClick={onClear}>
        <Eraser size={17} />
      </button>
      <button onClick={() => onApplyFormat('bold')}>
        <Bold size={17} />
      </button>
      <button onClick={() => onApplyFormat('italic')}>
        <Italic size={17} />
      </button>
      <button onClick={() => onApplyFormat('underline')}>
        <Underline size={17} />
      </button>
    </div>
  );
}
