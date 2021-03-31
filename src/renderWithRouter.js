import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import ProviderRecipes from './context/ProviderRecipes';

const renderWithRouter = (
  component,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => ({ ...render(
  <ProviderRecipes>
    <Router history={ history }>{component}</Router>
  </ProviderRecipes>,
),
history });

export default renderWithRouter;
