import React from 'react';
import { connect } from 'react-redux';
import App from '../app';

function TemplateContainer(props) {
  return (
    <App progress={props.progress} />
  );
}

function mapStateToProps(state) {
  return {
    progress: state.progress,
  };
}

export default connect(mapStateToProps)(TemplateContainer);