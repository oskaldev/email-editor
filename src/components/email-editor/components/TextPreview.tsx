import parse from 'html-react-parser';
import styles from '../EmailEditor.module.scss';

interface TextPreviewProps {
  text: string;
}

export function TextPreview({ text }: TextPreviewProps) {
  if (!text) return null;

  return <div className={styles.preview}>{parse(text)}</div>;
}
