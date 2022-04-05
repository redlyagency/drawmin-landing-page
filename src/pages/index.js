import React from "react"

import {
  MainWrapper,

} from "../styles/mainWrapper.style"

import "@fontsource/poppins"
import FirstPage from "../templates/firstView"
import SecondPage from "../templates/secondView"



const Index= () => {
  return (
    <MainWrapper>
        <FirstPage/>
        <SecondPage/>
    </MainWrapper>
  )
}

export default Index
