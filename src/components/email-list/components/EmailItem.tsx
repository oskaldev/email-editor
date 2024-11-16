// EmailItem.tsx
import parse from 'html-react-parser';

interface EmailItemProps {
  text: string;
}

const EmailItem = ({ text }: EmailItemProps) => {
  return <div>{parse(text)}</div>;
};

export default EmailItem;
