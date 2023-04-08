import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { searchedId } from '../../Reducers/filtersReducer';
import History from './History';
import searcher from "../../Accessories/searcher";

const Tracking = (props) => {

    const saveSearch = (e) => {
        props.dispatchSearchedId(e.target.value);
    }

    const yourPackage = searcher(props.state.records, props.state.filters)

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