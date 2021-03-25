import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as mealApi from '../services/mealApi';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import LoadingScreen from '../components/LoadingScreen';

const MealsDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    mealApi.getById(id).then((response) => {
      setMeal(response.meals[0]);
      setIsFetching(false);
    });
  }, []);

  useEffect(() => {
    const ingredientKeys = Object.keys(meal)
      .filter((item) => item.includes('Ingredient'));
    const ingredientList = ingredientKeys.map((key) => meal[key])
      .filter((item) => item !== '');
    setIngredients(ingredientList);
  }, [meal]);

  if (isFetching) return <LoadingScreen />;
  console.log(ingredients);
  return (
    <div>
      <img src={ meal.strMealThumb } alt="Thumbnail" />
      <h2 data-testid="recipe-title">{meal.strMeal}</h2>
      <button type="button" data-testid="share-btn">
        <img src={ shareIcon } alt="Share Icon" />
      </button>
      <button type="button" data-testid="favorite-btn">
        <img src={ blackHeartIcon } alt="Share Icon" />
      </button>
      <p data-testid="recipe-category">{ meal.strCategory}</p>
      <h3>Ingredients</h3>
      <section>
        {ingredients
          .map((ingredient, index) => (
            <p
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {ingredient}
            </p>))}
      </section>
      <h3>Instructions</h3>
      <p>
        { meal.strInstructions }
      </p>
      <video width="320" height="240" controls>
        <track kind="captions" />
        <source src="..Videos/video1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default (MealsDetails);
