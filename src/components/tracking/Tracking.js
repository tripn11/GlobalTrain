import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { get, ref } from "firebase/database";
import { setRecords } from "../../Reducers/recordsReducer";
import { database } from '../../Firebase/firebase';
import { searchedId } from '../../Reducers/filtersReducer';
import History from './History';
import searcher from "../../Accessories/searcher";

const Tracking = (props) => {
    const navigate = useNavigate();

    const[display, setDisplay] = useState(false)
    const[userDetails, setUserDetails] = useState({email:'',password:''})

    useEffect(() => {
        const records = [];
        get(ref(database,'records'))
            .then((snapshot) => {
                if(snapshot.exists()) {
                    snapshot.forEach((child) =>{
                        records.push(child.val())
                    })
                props.dispatchSetRecords(records);  
                }
            })
    }, [])

    const saveSearch = (e) => {
        props.dispatchSearchedId(e.target.value);
    }

    const yourPackage = searcher(props.state.records, props.state.filters)

    const emailUpdater = (e) => {
        setUserDetails((previousState) => ({
            ...previousState,
            email:e.target.value
        }))
    }

    const passwordUpdater = (e) => {
        setUserDetails((previousState) => ({
            ...previousState,
            password:e.target.value
        }))
    }

    const authenticate = () => {
        signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
            .then(()=>{
                navigate("/admin")
            })
            .catch(()=>{
                alert('sorry you are not authorized')
            })
    }


    return (
        <div id='tracking'>
            <div>
                <Link to='/' title="Home"><ion-icon name="home"></ion-icon></Link>
                <p>GlobalTrain Logistics</p>
                <ion-icon name="person" onClick={() => setDisplay(true)} title="Admin"></ion-icon>
            </div>

            <Modal 
                isOpen={display}
                ariaHideApp={false}
                className='signIn-Modal'
                overlayClassName='overlay-signIn'
            >
                <div>
                    <label>Email</label>
                    <input 
                        type="email"
                        value={userDetails.email}
                        onChange={emailUpdater}
                    />
                </div>
                
                <div>
                    <label>Password</label>
                    <input 
                        value={userDetails.password}
                        onChange={passwordUpdater}
                        type="password"
                    />
                </div>
               
                <div>
                    <button onClick={()=>setDisplay(false)}>Cancel</button>
                    <button onClick={authenticate}>Sign In</button>
                </div>
                
            </Modal>

            <input 
                placeholder="Enter Consignment Number"
                value={props.state.filters.searchedId}
                onChange={saveSearch}    
            />
            
            <div>
                <h2>Shipment History</h2>
                <div>
                    <p>Date</p>
                    <p>Time</p>
                    <p>Location</p>
                    <p>Status</p>
                    <p>Remarks</p>
                </div>
                {yourPackage.forClient.length > 0 ? 
                    yourPackage.forClient.map( (item) => <History key={item.editedAt} details={item} />) : 
                    <p>{props.state.filters.searchedId ===''? '':'No records'}</p>}
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = (dispatch) => ({
    dispatchSearchedId:(code)=>dispatch(searchedId(code)),
    dispatchSetRecords: (records) => dispatch(setRecords(records))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tracking);