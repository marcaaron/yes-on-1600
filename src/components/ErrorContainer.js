import React from 'react';
import { connect } from 'react-redux';

const ErrorContainer = ({ error }) => {
  if(error){
    return(
  		<div className="wwse-error-container">
        <p className="wwse-error">{error}</p>
  		</div>
    )
  }else{
    return null;
  }
}

function mapStateToProps(state){
  return{
    error: state.error
  }
}

export default connect(mapStateToProps)(ErrorContainer);
