import parse from 'html-react-parser';
interface EmailItemProps {
  text: string;
}
const EmailItem = ({ text }: EmailItemProps) => {
  return (
    <div>
      <div>{parse(text)}</div>
    </div>
  );
};

export default EmailItem;
