import EmailItem from './components/EmailItem'
import styles from './EmailList.module.scss';
import { useEmailList } from '@hooks/index';

const EmailList = () => {
  const { data } = useEmailList();
  return (
    <div className={styles.list}>
      {data?.map(email => (
        <EmailItem key={email.text} text={email.text} />
      ))}
    </div>
  );
};

export default EmailList;
