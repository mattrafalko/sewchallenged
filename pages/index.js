import React from 'react';
import withLayout from '../components/Layout';

const Home = () => {
  const title = 'Home Page';

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default withLayout(Home);
