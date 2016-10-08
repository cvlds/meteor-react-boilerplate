import React, {Component} from 'react';
import Content from '../components/Main/Content.jsx';
//import Header from '../components/Main/Header.jsx';
//import Footer from '../components/Main/Footer.jsx';
//import Login from '../components/Main/Login.jsx';

export default class Main extends Component {

  render() {
    return (
      <div>
        <Header/>
          <div className="flash-container"></div>
          <Login/>
        {this.props.isLoading
        ? <Content isLoading />
        : this.props.children}
        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {
  isLoading: React.PropTypes.bool,
  children: React.PropTypes.element,
  isLoggedIn: React.PropTypes.bool,
};
