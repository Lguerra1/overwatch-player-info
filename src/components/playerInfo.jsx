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

    // competitive: { rank: null, rank_img: null }
    // endorsement: { sportsmanship: { … }, shotcaller: { … }, teammate: { … }, level: null, frame: "https://static.playoverwatch.com/svg/icons/endorsement-frames-3c9292c49d.svg#_3", … }
    // games: { quickplay: { … }, competitive: { … } }
    // level: 748
    // levelFrame: " https://d15f34w2p8l1cc.cloudfront.net/overwatch/ba68d2c0f1b55e1991161cb1f88f369b97311452564b200ea1da226eb493e2e8.png "
    // playtime: { quickplay: "611:19:18", competitive: "21:48" }
    // portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5d60fae93b5b8bc2161bf03cb1c55f148d76ccaee6e5ac8d0f639bcf0587e95c.png"
    // private: false
    // star: " https://d15f34w2p8l1cc.cloudfront.net/overwatch/426c754c76cd12e6aacd30293a67363571341eea37880df549d3e02015a588fe.png "
    // username: "Inphinion"

    return (
        <PlayerInfoSection name="playerinfosection">
            <UserInfoWrapper>
                <SectionTitle>
                    {searchResults?.username ? <h3>{searchResults.username} - Level: {searchResults.level}</h3> : null}
                </SectionTitle>
                <Marginer direction="vertical" margin="3em" />
                <UserStats>
                    {searchResults?.portrait ? <img src={searchResults.portrait} alt='player portrait' /> : null}
                    {searchResults?.playtime?.quickplay ? <p>Quickplay Time: {searchResults.playtime.quickplay}</p> : null}
                    {searchResults?.games?.quickplay?.won ? <p>Quickplay Games Won: {searchResults.games.quickplay.won}</p> : null}
                </UserStats>
            </UserInfoWrapper>
        </PlayerInfoSection>
    )
}

export default PlayerInfo
