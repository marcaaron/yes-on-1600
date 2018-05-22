import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import {closeModal} from '../actions';

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItem: 'center'
	}
};

const ModalContainer = (props) => {
  return(
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={()=>props.closeModal()}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 className="modal-header">Alert:</h2>
      <div className="modal-text">{props.error}</div>
      <button className="modal-btn" onClick={()=>props.closeModal()}>Close</button>
    </Modal>
  )
}

function mapStateToProps(state){
  return{
    error: state.error,
    modalIsOpen: state.modalIsOpen
  }
}

export default connect(mapStateToProps, {closeModal})(ModalContainer);
