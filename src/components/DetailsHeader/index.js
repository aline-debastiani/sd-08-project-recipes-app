import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import copy from 'clipboard-copy';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
// import { Container } from './styles';

function DetailsHeader(props) {
  const { title, imgSrc, category, alcoholic } = props;
  const [useShow, setUseShow] = useState(false);

  // const url = navigator.clipboard.writeText(urlSite);
  function onclickUrl() {
    const urlSite = document.URL;
    const url = copy(urlSite);
    setUseShow(true);
    return url;
  }
  return (
    <>
      <Container className="fluid p-0">
        <img
          src={ imgSrc }
          alt={ title }
          className="img-fluid"
          data-testid="recipe-photo"
        />
      </Container>
      <Container className="mt-3">
        <Row>
          <Col xs="8">
            <h2 data-testid="recipe-title" className="mb-0">{title}</h2>
          </Col>
          <Col xs="4">
            <input
              type="image"
              src={ shareIcon }
              alt="Share Button"
              className="mr-2"
              data-testid="share-btn"
              onClick={ onclickUrl }
            />
            <input
              type="image"
              src={ whiteHeartIcon }
              alt="Favorite Button"
              data-testid="favorite-btn"
            />
          </Col>
        </Row>
        <h5 className="text-muted" data-testid="recipe-category">
          {alcoholic || category}
        </h5>
      </Container>
      { useShow && (
        <Alert onClick={ () => setUseShow(false) } variant="success">
          Link copiado!
        </Alert>
      )}
    </>
  );
}

DetailsHeader.defaultProps = {
  alcoholic: '',
};

DetailsHeader.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholic: PropTypes.string,
};
export default DetailsHeader;
