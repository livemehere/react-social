import React from 'react';
import Container from '../../layouts/Container';
import { WriteIcon, WriteIconWrap } from './styles.tsx';

const Home = () => {
  return (
    <Container>
      <div>Home</div>
      <WriteIconWrap to={'/write'}>
        <WriteIcon />
      </WriteIconWrap>
    </Container>
  );
};
export default Home;
