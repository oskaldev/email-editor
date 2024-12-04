// src/pages/home/Home.tsx
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div style={{ padding: '16px' }}>
      <h1>Welcome to the Email Editor</h1>
      <p>This is the home page where you can start creating your emails.</p>
      <Link
        to='email-editor'
        style={{
          display: 'inline-block',
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}>
        Go to Email Editor
      </Link>
    </div>
  );
};

export default Home;
