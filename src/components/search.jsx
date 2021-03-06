import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Element, scroller } from 'react-scroll';
import { SearchContext } from '../context/searchContext';

import Nav from './nav';

import BackgroundImg from '../assets/overwatch.jpg';

const TopContainer = styled.div`
width: 100%;
height: 100vh;
padding: 0;
background-image: url(${BackgroundImg});
background-position: center center;
background-repeat: no-repeat;
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

const SectionTitle = styled.h1`
font-size: 34px;
font-weight: bold;
color: #9e9e9d;

@media screen and (max-width: 480px){
    text-align: center;
}
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
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://ow-api.com/v1/stats/pc/us/${battleTag}/profile`, {
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(res => {
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

    const scrollToNextSection = () => {
        scroller.scrollTo("playerinfosection", { smooth: true, duration: 1500 })
    }

    return (
        <Element name="topSection">
            <TopContainer>
                <BackgroundFilter>
                    <Nav />
                    <div>
                        <SectionTitle>Enter your battletag</SectionTitle>
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
