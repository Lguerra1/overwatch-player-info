import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const UserInfoSection = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`

const PlayerInfo = () => {


  const [userData, setUserData] = useState({});
  const [battleTag, setBattleTag] = useState('')

  // Inphinion-1371
  // BoomyZoomies-1815

  useEffect(() => {
  }, [])

  const getUserData = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`https://ow-api.com/v1/stats/pc/us/${battleTag}/complete`).then(res => {
        return res.json().then(data => data)
      })
      setUserData(response);
    } catch (err) {
      return console.log(err);
    }
  }

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

  return (
    <div>
      <InfoWrapper>
        <div>
          <h1>Get Player Info</h1>
          <form>
            <input value={battleTag} onChange={e => setBattleTag(e.target.value)} type="text" className="form-control" placeholder="battle tag" />
            <button type="submit" onClick={getUserData}>Submit</button>
          </form>
        </div>
        <UserInfoSection>
          <div>
            {userData?.name ? <h3>{userData.name} - Level: {userData.level}</h3> : null}
          </div>
          <div>
            {userData?.icon ? <img src={userData.icon} alt='player icon' /> : null}
            {userData?.gamesWon ? <p>Games Won: {userData.gamesWon}</p> : null}
            {userData?.endorsement ? <p>Endorsement Lvl: {userData.endorsement}</p> : null}
          </div>
        </UserInfoSection>
      </InfoWrapper>
    </div>
  )
}

export default PlayerInfo
