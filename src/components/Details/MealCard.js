import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './cards.css';

function Card({ data }) {
  const [cardSelected, setCardSelected] = useState(false);
  const { meal, index, recipeCard } = data;
  const { strMealThumb, strMeal } = meal;

  if (cardSelected) {
    return <Redirect to={ `/comidas/${meal.idMeal}` } />;
  }

  return (
    <section data-testid={ `${index}-recomendation-card` } className="card">
      <img
        data-testid={ `${index}-card-img` }
        src={ strMealThumb }
        alt={ strMeal }
      />
      <button
        onClick={ () => setCardSelected(true) }
        data-testid={ `${index}-recomendation-title` }
        type="button"
      >
        { strMeal }
      </button>
    </section>
  );
}

Card.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Card;
