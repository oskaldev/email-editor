import { FC } from 'react';
import styles from './EmailList.module.scss';
import EmailItem from './components/EmailItem';
import { useEmailList } from '@hooks/index';

const EmailList: FC = () => {
  const { data } = useEmailList();
  return (
    <div className={styles.list}>
      {data?.map(email => (
        <EmailItem key={email.id} text={email.text}></EmailItem>
      ))}
    </div>
  );
};

export default EmailList;