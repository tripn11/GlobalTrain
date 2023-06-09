import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { remove, ref } from "firebase/database";
import { database } from "../../Firebase/firebase";
import { removeItem } from '../../Reducers/recordsReducer';

const Item = (props) => {
    const [display, setDisplay] = useState(false);

    const remover = (id)=>{
        remove(ref(database, 'records/' + id))
            .then(()=>{
                props.dispatchDeleteItem(id);
            })
    }

    return (
        <div id='adminItem'>
            <div>{props.id}</div>
            <div>{props.shipperName}</div>
            <div>{props.name}</div>
            <div>{props.date}</div>
            <div>{props.status}</div>
            <div>
                <Link to={`/admin/editShipment/${props.id}`}><button className='alt'>Edit</button></Link>
                <button onClick={()=>setDisplay(true)} className='alt'>Delete</button>
            </div>
            <Modal
                isOpen={display}
                ariaHideApp={false}
                className='delete-item'
                overlayClassName='overlay-signIn'
            >
                <p>Are you sure you want to delete this item?</p>
                <button onClick={()=>setDisplay(false)}>Cancel</button>
                <button onClick={()=>remover(props.id)}>Yes, Delete</button>
            </Modal>
        </div>
    )
}

const mapDispatchToProps =(dispatch) => ({
    dispatchDeleteItem: (id) => dispatch(removeItem(id))
})

export default connect(undefined,mapDispatchToProps)(Item);