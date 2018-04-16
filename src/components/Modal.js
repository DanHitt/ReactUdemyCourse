import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleModalOkay}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal" // use this to replace all the default style on modal
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleModalOkay}> Okay </button>
    </Modal>
);

export default OptionModal;