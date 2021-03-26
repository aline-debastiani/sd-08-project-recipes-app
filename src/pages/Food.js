import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import ListCard from '../components/ListCard';
import Footer from '../components/Footer';
import Filtro from '../components/Filtros';

export default class Food extends Component {
  render() {
    const { history: { push } } = this.props;
    const values = {
      name: 'Comidas',
      url: {
        byIngredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
        byName: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
        byFirstLetter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
      },
      defaultSearch: 'chicken',
    };
    const food = {
      id: 'idMeal',
      name: 'strMeal',
      thumb: 'strMealThumb',
      linkRedirect: '/comidas/',
      history: push,
    };
    return (
      <div>
        <Header params={ values } />
        <Filtro />
        <ListCard infos={ food } />
        <Footer />
      </div>
    );
  }
}

Food.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
