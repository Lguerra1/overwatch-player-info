import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Element, scroller } from 'react-scroll';
import { SearchContext } from '../context/searchContext';

import Nav from './nav';

import BackgroundImg from '../assets/background.jpg';


const TopContainer = styled.div`
width: 100%;
height: 100vh;
padding: 0;
background-image: url(${BackgroundImg});
background-repeat: no-repeat center fixed;
background-size: cover;
position: relative;
text-align: center;
`;

const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
background-color: rgba(20, 20, 20, 0.3);
display: flex;
flex-direction: column;
align-items: center;
`;

const Search = () => {
    const { setSearchResults } = useContext(SearchContext);
    const [battleTag, setBattleTag] = useState('');

    // Inphinion-1371
    // BoomyZoomies-1815

    const getUserData = async (e) => {       

        e.preventDefault();
        e.stopPropagation();
        // formatBattleTag(battleTag);

        try {
            const response = await fetch(`https://best-overwatch-api.herokuapp.com/player/pc/us/${battleTag}`).then(res => {
                return res.json().then(data => data)
            })
            setSearchResults(response);
        } catch (err) {
            return console.log(err);
        }
    }

    // const formatBattleTag = (value) => {
    //     let split;
    //     if (value.includes('#')) {
    //         split = value.split('#');
    //         return setBattleTag(`${split[0]}-${split[1]}`);
    //     }
    //     return value;
    // }

    //   competitiveStats: {awards: {cards: 1, medals: 6, medalsBronze: 3, medalsSilver: 0, medalsGold: 3},…}
    // endorsement: 3
    // endorsementIcon: "https://static.playoverwatch.com/svg/icons/endorsement-frames-3c9292c49d.svg#_3"
    // gamesWon: 2675
    // icon: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5d60fae93b5b8bc2161bf03cb1c55f148d76ccaee6e5ac8d0f639bcf0587e95c.png"
    // level: 47
    // levelIcon: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ba68d2c0f1b55e1991161cb1f88f369b97311452564b200ea1da226eb493e2e8.png"
    // name: "Inphinion#1371"
    // prestige: 7
    // prestigeIcon: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/426c754c76cd12e6aacd30293a67363571341eea37880df549d3e02015a588fe.png"
    // private: false
    // quickPlayStats: {awards: {cards: 2041, medals: 12320, medalsBronze: 4351, medalsSilver: 4491, medalsGold: 3478},…}
    // rating: 0
    // ratingIcon: ""
    // ratings: null
    const scrollToNextSection = () => {
        scroller.scrollTo("playerinfosection", { smooth: true, duration: 1500 })
    }

    return (
        <Element name="topSection">
            <TopContainer>
                <BackgroundFilter>
                    <Nav />
                    <div>
                        <h1>Enter your battletag</h1>
                        <form>
                            <input value={battleTag} onChange={e => setBattleTag(e.target.value)} type="text" className="form-control" placeholder="username-1234" />
                            <button onClick={(e) => {
                                getUserData(e)
                                scrollToNextSection()
                            }
                            }>Submit</button>
                        </form>
                    </div>
                </BackgroundFilter>
            </TopContainer>
        </Element>
    )
}

export default Search
