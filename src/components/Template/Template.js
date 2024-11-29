import { Box, CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import Aside from './Aside/Aside';
import Header from './Header/Header';
import { MainStyled, TemplateStyled } from './TemplateStyled';
import Types from './Main/Types/Types';
import Videos from './Main/Videos/Videos';

export default function Template() {
  const [ isVisible, setIsVisible ] = useState(true);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  }

  return (
    <TemplateStyled>
        <CssBaseline/>

        <header>
            <Header toggleVisible={toggleVisible}/>
        </header>

        <MainStyled>
          <aside>
            {isVisible && <Aside/>}
          </aside>

          <main>
            <Types/>
            <Videos/>
          </main>
        </MainStyled>
    </TemplateStyled>
  )
}
