import React from 'react';
import { connect } from 'react-redux';

const ErrorContainer = ({ error }) => {
  return(

		<div className="wwse-error-container">
      {error &&
      <p className="wwse-error">{error}</p>
      }
		</div>
  )
}

function mapStateToProps(state){
  return{
    error: state.error
  }
}

export default connect(mapStateToProps)(ErrorContainer);
