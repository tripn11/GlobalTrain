import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import moment from 'moment';
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
        if(props.state.records.length === 0) {
            get(ref(database,'records'))
            .then((snapshot) => {
                if(snapshot.exists()) {
                    snapshot.forEach((child) =>{
                        records.push(child.val())
                    })
                props.dispatchSetRecords(records);  
                }
            })
        } 
        
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

    const myAlert = (close) => {
        const alertBox = document.getElementById('my-alert');
        alertBox.classList.add('alert')
        if(close) {
            alertBox.classList.remove('alert');
        }
    }

    const authenticate = () => {
        signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
            .then(()=>{
                navigate("/admin")
            })
            .catch(()=>{
                myAlert()
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
                <div id="my-alert">
                    <p>Sorry you are not authorized</p>
                    <button onClick={()=>myAlert('a')}>Ok</button>
                </div>

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

            {yourPackage.forClient.length > 0 && 
            (<div id="details">
                <div>
                    <div>Sender</div>
                    <div>
                        <div>
                            <label>Name:</label>
                            <p>{yourPackage.shipperDetails.name}</p>
                        </div>
                        <div>
                            <label>Phone:</label>
                            <p>{yourPackage.shipperDetails.phone}</p>
                        </div>
                        <div>
                            <label>Email:</label>
                            <p>{yourPackage.shipperDetails.email}</p>
                        </div>
                        <div>
                            <label>Address:</label>
                            <p>{yourPackage.shipperDetails.address}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>Receiver</div>
                    <div>
                        <div>
                            <label>Name:</label>
                            <p>{yourPackage.receiverDetails.name}</p>
                        </div>
                        <div>
                            <label>Phone:</label>
                            <p>{yourPackage.receiverDetails.phone}</p>
                        </div>
                        <div>
                            <label>Email:</label>
                            <p>{yourPackage.receiverDetails.email}</p>
                        </div>
                        <div>
                            <label>Address:</label>
                            <p>{yourPackage.receiverDetails.address}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>Shipment Details</div>
                    <div>
                        <div>
                            <label>Quantity:</label>
                            <p>{yourPackage.shipmentDetails.quantity}</p>
                        </div>
                        <div>
                            <label>Weight:</label>
                            <p>{yourPackage.shipmentDetails.weight}</p>
                        </div>
                        <div>
                            <label>Product:</label>
                            <p>{yourPackage.shipmentDetails.product}</p>
                        </div>
                        <div>
                            <label>Pickup Date:</label>
                            <p>{moment(yourPackage.shipmentDetails.pickupDate).format("DD-MM-YYYY")}</p>
                        </div>
                    </div>
                </div>

            </div>)}
            
            <div>
                <h2>Shipment Summary</h2>
                <div>
                    <p>Date</p>
                    <p>Location</p>
                    <p>Status</p>
                    <p>Remarks</p>
                </div>
                {yourPackage.forClient.length > 0 ? 
                    <History details={yourPackage.forClient[yourPackage.forClient.length-1]} /> : 
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