import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    return (<h2>{this.props.headline}</h2>);
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
