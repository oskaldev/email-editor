import EmailEditor from '@components/email-editor/EmailEditor';
import EmailList from '@components/email-list/EmailList';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Email: FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        padding: '1.5rem',
      }}>
      <Link
        to='/'
        style={{
          display: 'inline-block',
          width: '50%',
          textAlign: 'center',
          backgroundColor: 'rgb(48, 4, 97)',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}>
        Go home
      </Link>
      <EmailEditor />
      <EmailList />
    </div>
  );
};

export default Email;
