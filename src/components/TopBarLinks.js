import React from "react"
import TopBarLink from "./TopBarLink"
import styled from 'styled-components'

const StyledWrapper = styled.div `
display: flex;
flex-flow: row nowrap;

  @media (max-width: 1080px) {
    flex-flow: column nowrap;
    background-color: rgb(25, 25, 25);
    padding-right: 20px;
    padding-left: 5px;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300x;
    padding-top: 100px;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
  }
  `

const TopBarLinks = ({open}) => {

  return (
    <StyledWrapper open={open}>
      <TopBarLink name="AboutTesting"/>
      {/* <TopBarLink name="Portfolio"/> */}
      {/* <TopBarLink name="Blog"/> */}
      <TopBarLink name="ContactTesting"/>
    </StyledWrapper>
  )
}

export default TopBarLinks;