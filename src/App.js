import React from 'react';
import styled from 'styled-components';

import Header from './components/header';
import PlayerInfo from './components/playerInfo';

import './index.css';


const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`

const App = () => {
  return (
    <PageContainer>
      <Header />
      <PlayerInfo />
    </PageContainer>
  )
}

export default App
