import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { searchedId } from '../../Reducers/filtersReducer';
import History from './History';

const Tracking = (props) => {

    const saveSearch = (e) => {
        props.dispatchSearchedId(e.target.value);
    }

    return (
        <div>
            <div>
                <Link to='/' >Home</Link>
                <Link to='/admin'>Icon for Admin</Link>
            </div>
            <div>
                <input 
                placeholder="Enter Consignment Number"
                value={props.state.filters.searchedId}
                onChange={saveSearch}    
                />
                <button>Search</button>
            </div>
            
        
            <div>
                <div>
                    <p>Date</p>
                    <p>Time</p>
                    <p>Location</p>
                    <p>Status</p>
                    <p>Remarks</p>
                </div>

                <div>
                    <History />
                </div>
                
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