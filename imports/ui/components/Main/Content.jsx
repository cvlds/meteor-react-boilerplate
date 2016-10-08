import React from 'react';
import Loading from './Loading.jsx';

export default function Content(props) {
  return (
      <Loading {...props}>
        {props.children}
      </Loading>
  );
}

Content.propTypes = {
  children: React.PropTypes.node,
};
