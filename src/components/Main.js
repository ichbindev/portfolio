import PropTypes from 'prop-types';
import React from 'react';
import Intro from './Intro';
import Work from './Work';
import About from './About';
// import Contact from './Contact';
import ContactCard from './ContactCard';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <Intro close={close} {...this.props} />
        <Work close={close} {...this.props} />
        <About close={close} {...this.props} />
        <ContactCard close={close} {...this.props} />
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
