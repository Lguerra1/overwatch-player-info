import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import Marginer from './marginer';
import { SearchContext } from '../context/searchContext';

const PlayerInfoSection = styled(Element)`
width: 100%;
min-height: 1100px;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0;
background: #9e9e9d
`;

const UserInfoWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const SectionTitle = styled.h1`
font-size: 34px;
font-weight: bold;
color: #000;

@media screen and (max-width: 480px){
    text-align: center;
}
`;

const UserStats = styled.div`
    text-align: center;
`;

const PlayerInfo = () => {

    const { searchResults } = useContext(SearchContext)

    console.log(searchResults)

    // Inphinion-1371
    // BoomyZoomies-1815

    return (
        <PlayerInfoSection name="playerinfosection">
            <UserInfoWrapper>
                <SectionTitle>
                    {searchResults?.name ? `${searchResults.name} - Level: ${searchResults.level}` : null}
                </SectionTitle>
                <Marginer direction="vertical" margin="3em" />
                <UserStats>
                    {searchResults?.icon ? <img src={searchResults.icon} alt='player portrait' /> : null}
                    {searchResults?.gamesWon ? <p>Games Won: {searchResults.gamesWon}</p> : null}
                    {searchResults?.endorsement ? <p>Endorsement: {searchResults.endorsement}</p> : null}
                </UserStats>
            </UserInfoWrapper>
        </PlayerInfoSection>
    )
}

export default PlayerInfo
