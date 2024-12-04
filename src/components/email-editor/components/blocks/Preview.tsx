import { FC } from 'react';
import parse from 'html-react-parser';
import styles from '../../EmailEditor.module.scss';

interface TextPreviewProps {
  text: string;
}

export const Preview: FC<TextPreviewProps> = ({ text }) => {
  return <div className={styles.preview}>{parse(text)}</div>;
};
