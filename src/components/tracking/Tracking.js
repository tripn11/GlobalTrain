import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { searchedId } from '../../Reducers/filtersReducer';
import History from './History';
import searcher from "../../Accessories/searcher";

const Tracking = (props) => {
    const navigate = useNavigate();

    const[display, setDisplay] = useState(false)
    const[userDetails, setUserDetails] = useState({email:'',password:''})

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
        <div>
            <div>
                <Link to='/' >Home</Link>
                <button onClick={() => setDisplay(true)}>Icon for Admin</button>
            </div>

            <Modal 
                isOpen={display}
                ariaHideApp={false}
            >
                <label>Email</label>
                <input 
                    value={userDetails.email}
                    onChange={emailUpdater}
                />

                <label>Password</label>
                <input 
                    value={userDetails.password}
                    onChange={passwordUpdater}
                />

                <button onClick={()=>setDisplay(false)}>Cancel</button>
                <button onClick={authenticate}>Sign In</button>
            </Modal>

            <div>
                <input 
                    placeholder="Enter Consignment Number"
                    value={props.state.filters.searchedId}
                    onChange={saveSearch}    
                />
            </div>
            
        
            <div>
                <div>
                    <p>Date</p>
                    <p>Time</p>
                    <p>Location</p>
                    <p>Status</p>
                    <p>Remarks</p>
                </div>

                {yourPackage.forClient.length > 0 ? yourPackage.forClient.map( (item) => <History key={item.editedAt} details={item} />) : <p>No record</p> }
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = (dispatch) => ({
    dispatchSearchedId:(code)=>dispatch(searchedId(code))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tracking);