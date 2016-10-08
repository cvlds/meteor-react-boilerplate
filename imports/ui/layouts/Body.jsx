import React from 'react';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Body.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object,
};
