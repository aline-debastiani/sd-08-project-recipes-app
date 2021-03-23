import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';
import Input from './Inputs';
import Button from './Button';
import getResultFromAPI from '../api/getResultFromAPI';
import contextRecipes from '../context/Context';

const Header = (props) => {
  const { title } = props;
  const [showSearchBar, setShow] = useState(false);
  const [userButton, setUserButton] = useState('');
  const [userInput, setUserInput] = useState('');

  const location = useLocation();
  const context = useContext(contextRecipes);

  function handleSearchInput({ target: { value } }) {
    setUserInput(value);
  }

  function handleFilterType({ target: { value } }) {
    setUserButton(value);
  }

  async function handleSearchButton() {
    if (userButton === 'busca da primeira letra' && userInput.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
      return;
    }
    const results = await getResultFromAPI(location.pathname, userButton, userInput);
    if (results) context.setFilter(results);
  }

  function renderSearchBar() {
    return (
      <section>
        <Input
          type="text"
          datatestid="search-input"
          onChange={ handleSearchInput }
          value={ userInput }
        />
        <br />
        <Input
          type="radio"
          datatestid="ingredient-search-radio"
          value="Ingredients"
          name="food"
          label="Ingredientes"
          onChange={ handleFilterType }
        />
        <Input
          type="radio"
          datatestid="name-search-radio"
          value="busca por nome"
          label="Nome"
          name="food"
          onChange={ handleFilterType }
        />
        <Input
          type="radio"
          datatestid="first-letter-search-radio"
          value="busca da primeira letra"
          label="Letra"
          name="food"
          onChange={ handleFilterType }
        />
        <Button
          datatestid="exec-search-btn"
          type="button"
          label="Buscar"
          onClick={ handleSearchButton }
        />
      </section>
    );
  }

  return (
    <header>
      <section className="header-bar">
        <Link to="/perfil">
          <input type="image" src={ profile } alt="prof" data-testid="profile-top-btn" />
        </Link>
        <h3 data-testid="page-title">{ title }</h3>
        <Input
          type="image"
          src={ search }
          alt="search"
          onClick={ () => setShow(!showSearchBar) }
          datatestid="search-top-btn"
        />
      </section>
      { showSearchBar && renderSearchBar() }
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
