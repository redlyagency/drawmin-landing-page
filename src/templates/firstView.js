import React from "react"

import Header from "../components/NavBar"

import {
  MainWrapper,
  GlobalStyle,
} from "../styles/mainWrapper.style"

import {
  NavBarDiv,
} from "../styles/NavBar.style"

import {
  FirstView,
  TitleContentB,
  TitleContentS,
} from "../styles/FirstView.style"

const FirstPage= () => {
    return (
      <MainWrapper>
          <FirstView>
            <GlobalStyle/>
            <NavBarDiv>
              <Header/>
            </NavBarDiv>
            <TitleContentB>
              WSZYSTKO CZEGO POTRZEBUJESZ Z DREWNA
            </TitleContentB>
            <TitleContentS>
              POZNAJ NAS I NASZĄ OFERTĘ
            </TitleContentS>
          </FirstView>
      </MainWrapper>
    )
  }
  
  export default FirstPage