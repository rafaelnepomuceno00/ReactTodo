import React from 'react'
import Card from './Card'
import './Modal.css'

const Modal = (props) => {
   function hideModal(e) {
    let target = e.target;
    if (target.id === 'Modal') {
        props.onHideModal()
    }
   }

    return (
        <div id='Modal' onClick={hideModal} className={props.show ? 'Modal':'Modal hideModal'}> 
            <Card className='CardModal'>{props.children}</Card>
        </div>
    )
}

export default Modal
