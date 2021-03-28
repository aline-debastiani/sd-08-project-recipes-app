import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
import Footer from '../components/Footer';

function Perfil() {
  const history = useHistory();

  function getEmail() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
      <p
        type="text"
        data-testid="profile-email"
      >
        { user.email }
      </p>
    );
  }

  return (
    <div>
      <div>
        <HeaderWithoutSearch />
      </div>
      { getEmail() }
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => {
          history.push('/receitas-feitas');
        } }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => {
          history.push('/receitas-favoritas');
        } }
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => {
          localStorage.removeItem('user');
          localStorage.removeItem('mealsToken');
          localStorage.removeItem('cocktailsToken');
          history.push('/');
        } }
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}

export default Perfil;
