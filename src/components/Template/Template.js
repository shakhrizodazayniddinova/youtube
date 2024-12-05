import { CssBaseline } from '@mui/material';
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Aside from './Aside/Aside';
import Header from './Header/Header';
import { MainStyled, TemplateStyled } from './TemplateStyled';
import { toggleAsideVisibility } from '../../Redux/actions';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Videos from './Main/Videos/Videos';

export default function Template() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isVisible = useSelector((state) => state.aside.isVisible);
  
  // aside visible or not visible
  const toggleVisible = () => dispatch((toggleAsideVisibility()));

  // Adjust visibility when the path is '/play'
  useEffect(() => { 
    if (location.pathname === '/play') {
      dispatch(toggleAsideVisibility()); // Hide aside on /play route
    } else {
      dispatch(toggleAsideVisibility()); // Show aside on other routes
    }
  }, [location.pathname, dispatch]);

  return (
    <TemplateStyled>
        <CssBaseline/>

        <ErrorBoundary>
          <header>
            <Header toggleVisible={toggleVisible}/>
          </header>

          <MainStyled>
            <aside className={location.pathname === '/play' ? 'playAside' : ''}>
              <Aside isVisible={isVisible}/>
            </aside>

            <main>
              <Outlet/>
            </main>
          </MainStyled>
        </ErrorBoundary>
    </TemplateStyled>
  )
}
