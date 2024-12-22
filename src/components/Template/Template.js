import { CssBaseline } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Aside from './Aside/Aside';
import Header from './Header/Header';
import { MainStyled, TemplateStyled } from './TemplateStyled';
import { toggleAsideVisibility } from '../../Redux/actions';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Videos from './Main/Videos/Videos';
import Types from './Main/Types/Types';

export default function Template() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isVisible = useSelector((state) => state.aside.isVisible);
  const [searchQuery, setSearchQuery] = useState('');  // state for search

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  
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
            <Header toggleVisible={toggleVisible} onSearch={handleSearch}/>
          </header>

          <MainStyled>
            <aside className={location.pathname === '/play' ? 'playAside' : ''}>
              <Aside isVisible={isVisible}/>
            </aside>

            <main>
              {location.pathname === '/' ? (
                <>
                  <Types/>
                  <Videos searchQuery={searchQuery} />
                </>
              ) : (
                <Outlet />
              )}
            </main>
          </MainStyled>
        </ErrorBoundary>
    </TemplateStyled>
  )
}
