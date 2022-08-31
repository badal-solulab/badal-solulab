import Modal from "react-modal";

import React from 'react'

const ModalComponent = ({modal,updateList,setmodal}) => {
  return (
    <>
    <Modal
        isOpen={modal}
        onRequestClose={() => {
          setmodal(false);
        }}
      >
        <div className="modalBox">
          <p>Name:-</p>
          <h4>{updateList.name}</h4>
        </div>
        <div className="modalBox">
          <p>Contact:-</p>
          <h4>{updateList.contact}</h4>
        </div>
        <div className="modalBox">
          <p>Company:-</p>
          <h4>{updateList.company}</h4>
        </div>
        <div className="modalBox">
          <p>Email:-</p>
          <h4>{updateList.email}</h4>
        </div>
      </Modal></>
  )
}

export default ModalComponent