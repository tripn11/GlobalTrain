import React, {useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { adminSearchedId, status, date, sort } from "../../Reducers/filtersReducer";
import Item from "./Item";
import sorter from "../../Accessories/sorter";


const Admin = (props) => {
    const [dateRange, setDateRange] = useState(
        {
            startDate:null,
            endDate:null
        }
    );

    const [focusedState, setFocusedState] = useState(null);

    const addAdminSearchedId = (e) => {
        props.dispatchAdminSearchedId(e.target.value)
    }

    const statusChanger = (e) => {
        props.dispatchStatus(e.target.value)
    }

    const datesChanged = ({startDate, endDate}) => {
        let state;
        setDateRange((previousState) =>{
            if(startDate && startDate < moment().valueOf()){
                state = {
                    ...previousState,
                    startDate:startDate.valueOf()
                }
                if(endDate && endDate.valueOf() < moment().valueOf()) {
                    state = {
                        ...previousState,
                        startDate:startDate.valueOf(),
                        endDate:endDate.valueOf()
                    }
                }
            }else{
                state={
                    startDate:null,
                    endDate:null
                }
            }

            props.dispatchDate(state);
            return state;
        });
    }



    const focusChanged = (focused) => {
        setFocusedState(focused);
    }

    const sortChanged =(choice)=>{
        props.dispatchSort(choice)
    }


    const newRecords = sorter(props.state.records, props.state.filters)

    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/tracker'>Track Package</Link>
            </div>

            <div>
                <div>
                    <h2>Shipment</h2>
                    <Link to='addShipment'>Add Shipment</Link>
                </div>
                <div>
                    <input 
                        placeholder="search tracking number"
                        value={props.state.filters.adminSearchedId}
                        onChange={addAdminSearchedId}
                    />
                </div>
            </div>

            <div>
                <select
                    value={props.state.filters.status}
                    onChange={statusChanger}>
                    <option value='all status'>Select All Status</option>
                    <option value='pending'>Pending</option>
                    <option value='on hold'>On Hold</option>
                    <option value='in transit'>In Transit</option>
                    <option value='delivered'>Delivered</option>
                </select>

                <div>
                    <p>Time range</p>
                    <DateRangePicker 
                        startDate={dateRange.startDate ? moment(dateRange.startDate): null}
                        endDate={dateRange.endDate ? moment(dateRange.endDate): null}
                        onDatesChange={datesChanged}
                        focusedInput={focusedState}
                        onFocusChange={focusChanged}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        displayFormat='DD-MM-YYYY'
                        startDatePlaceholderText='Start Date'
                        endDatePlaceholderText='End Date'    
                    />
                </div>

                <div>
                    <button onClick={()=>sortChanged('up')}>arrow up icon</button>
                    <button onClick={()=>sortChanged('down')}>arrow down icon</button>
                </div>
                
            </div>

            <div>
                <div>
                    <div>Tracking Number</div>
                    <div>Shipper Name</div>
                    <div>Reciever Name</div>
                    <div>Date</div>
                    <div>Status</div>
                    <div>Actions</div>
                </div>
                <div>
                    {newRecords.length > 0 ?newRecords.map((record) => (
                        <Item 
                            key={record.id}
                            id={record.id}
                            shipperName={record.shipperDetails.name}
                            name={record.receiverDetails.name}
                            date={moment(record.createdAt).format("DD-MM-YYYY")}
                            status={record.status}
                        />
                    )):''}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = (dispatch) => ({
    dispatchAdminSearchedId:(id)=>dispatch(adminSearchedId(id)),
    dispatchStatus:(currentStatus) => dispatch(status(currentStatus)),
    dispatchDate:(currentDate) => dispatch(date(currentDate)),
    dispatchSort:(desire) => dispatch(sort(desire))
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);