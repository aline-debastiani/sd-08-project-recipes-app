import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './cards.scss';

function Card({ data }) {
  const [cardSelected, setCardSelected] = useState(false);
  const { drink, index, recipeCard } = data;
  const { strDrinkThumb, strDrink } = drink;

  if (cardSelected) {
    return <Redirect to={ `/bebidas/${drink.idDrink}` } />;
  }

  return (
    <section data-testid={ `${index}-card-name` } className="card cardFade">
      <img
        data-testid={ `${index}-card-img` }
        src={ strDrinkThumb }
        alt={ strDrink }
      />
      <div className="buttonContainer">
        <button
          onClick={ () => setCardSelected(true) }
          data-testid={ `${index}${recipeCard}` }
          type="button"
        >
          { strDrink }
        </button>
      </div>
    </section>
  );
}

Card.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Card;
