import React from 'react';
import SearchContextProvider from './context/searchContext';
import styled from 'styled-components';
import Search from './components/search';
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
    <SearchContextProvider>
      <PageContainer>
        <Search />
        <PlayerInfo />
      </PageContainer>
    </SearchContextProvider>
  )
}

export default App
