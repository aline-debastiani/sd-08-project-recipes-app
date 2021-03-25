import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchMealThunk from '../redux/actions/fetchMealAction';
import clearRecipesAction from '../redux/actions/clearRecipesAction';
import clearSearchAction from '../redux/actions/clearSearchAction';
import MealCatsButtons from '../components/MealCatsButton';
import fetchRecipesMealCatsThunk from '../redux/actions/fetchMealCatRecipesAction';

function MealsRecipes() {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.search.inputValue);
  const type = useSelector((state) => state.search.inputType);
  const meals = useSelector((state) => state.recipes.recipes);
  const filter = useSelector((state) => state.recipes.mealFilter);
  useEffect(() => {
    const fetchData = (inputf, typef) => dispatch(fetchMealThunk(inputf, typef));
    fetchData(input, type);
  }, [dispatch, input, type]);

  useEffect(() => () => {
    dispatch(clearRecipesAction());
    dispatch(clearSearchAction());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = (filterf) => dispatch(fetchRecipesMealCatsThunk(filterf));
    fetchData(filter);
  }, [dispatch, filter]);

  return (
    <main>
      {meals && meals.length === 1 && <Redirect to={ `/comidas/${meals[0].idMeal}` } />}
      <Header />
      <MealCatsButtons />
      { meals && meals.map((elem) => (
        <div key={ elem.idMeal }>
          <h4>{ elem.strMeal }</h4>
          <span>{ elem.idMeal }</span>
          <img
            className="card"
            src={ elem.strMealThumb }
            alt={ elem.strMeal }
          />
        </div>
      ))}
      <Footer />
    </main>
  );
}

export default MealsRecipes;
