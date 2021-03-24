import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './cards.css';

function Card({ data }) {
  const [cardSelected, setCardSelected] = useState(false);
  const { drink, index, recipeCard } = data;
  const { strDrinkThumb, strDrink } = drink;

  if (cardSelected) {
    return <Redirect to={ `/bebidas/${drink.idDrink}` } />;
  }

  return (
    <section data-testid={ `${index}-recomendation-card` } className="card">
      <img
        data-testid={ `${index}-card-img` }
        src={ strDrinkThumb }
        alt={ strDrink }
      />
      <button
        onClick={ () => setCardSelected(true) }
        data-testid={ `${index}-recomendation-title` }
        type="button"
      >
        { strDrink }
      </button>
    </section>
  );
}

Card.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Card;
