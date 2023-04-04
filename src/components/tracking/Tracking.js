import React from "react";
import { connect } from "react-redux";
import { searchGoods } from '../../Reducers/recordsReducer'
import Navigation from '../landing/Navigation';

const Tracking = (props) => {

    const saveSearch = (e) => {
        props.dispatchSaveCode(e.target.value);
    }

    return (
        <div>
            <Navigation />
            <input 
                placeholder="Enter Consignment Number"
                value={props.state.records.tracker}
                onChange={saveSearch}    
            />

            <div>
                <div>
                    <p>Date</p>
                    <p>Time</p>
                    <p>Location</p>
                    <p>Status</p>
                    <p>Remarks</p>
                </div>

                <div>
                    <p>2022-08-01</p>
                    <p>05:32 am</p>
                    <p>UK</p>
                    <p>On hold</p>
                    <p>Payment has not been made</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = (dispatch) => ({
    dispatchSaveCode:(code)=>dispatch(searchGoods(code))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tracking);