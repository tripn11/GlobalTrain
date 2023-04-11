import React, { useState } from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { set, ref } from "firebase/database";
import generator from '../../Accessories/IdGenerator';
import { addItem, editItem } from '../../Reducers/recordsReducer';
import { database } from '../../Firebase/firebase';
import { setLoading } from '../../Reducers/authReducer';


const Form = (props) => {
    const navigate = useNavigate();
    const [record, setRecord] = useState({
        id: props.item?props.item.id:'',
        createdAt: props.item?props.item.createdAt:moment().valueOf(),
        shipperDetails:props.item?props.item.shipperDetails:{
            name:'',
            phone:'',
            address:'',
            email:''
        },
        receiverDetails:props.item?props.item.receiverDetails:{
            name:'',
            phone:'',
            address:'',
            email:''
        },
        shipmentDetails:props.item?props.item.shipmentDetails:{
            typeOfShipment:'',
            weight:'',
            packages:'',
            product:'',
            paymentMethod:'',
            carrier:'',
            departureTime:'',
            destination:'',
            courier:'',
            quantity:'',
            totalFreight:'',
            carrierReferenceNumber:'',
            origin:'',
            pickupDate:''
        },
        forClient:props.item?props.item.forClient:[{
            status:'pending',
            location:'',
            remark:'',
            editedAt:moment().valueOf()
        }]
    });
    const [focusedState, setFocusedState] = useState(false)
    const [clientInfo, setClientInfo] = useState({
        status:props.item?props.item.forClient[props.item.forClient.length-1].status:'Pending',
        location:props.item?props.item.forClient[props.item.forClient.length-1].location:'',
        remark:props.item?props.item.forClient[props.item.forClient.length-1].remark:''
    })

    const shipperNameChange = (e) => {
        setRecord((previousState) => ({
            ...previousState,
            shipperDetails:{
                ...previousState.shipperDetails,
                name:e.target.value
            }
        }))
    }

    const shipperPhoneChange =(e)=> {
        const regex = /^(0|\+)/;
        setRecord((previousState) => ({
            ...previousState,
            shipperDetails:{
                ...previousState.shipperDetails,
                phone:regex.test(e.target.value) ? e.target.value : ''
            }
        }))
    }

    const shipperAddressChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipperDetails:{
                ...previousState.shipperDetails,
                address:e.target.value
            }
        }))
    }

    const shipperEmailChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipperDetails:{
                ...previousState.shipperDetails,
                email:e.target.value
            }
        }))
    }

    const receiverNameChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            receiverDetails:{
                ...previousState.receiverDetails,
                name:e.target.value
            }
        }))
    }

    const receiverPhoneChange =(e)=> {
        const regex = /^(0|\+)/;
        setRecord((previousState) => ({
            ...previousState,
            receiverDetails:{
                ...previousState.receiverDetails,
                phone: regex.test(e.target.value) ? e.target.value : ''
            }
        }))
    }

    const receiverAddressChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            receiverDetails:{
                ...previousState.receiverDetails,
                address:e.target.value
            }
        }))
    }

    const receiverEmailChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            receiverDetails:{
                ...previousState.receiverDetails,
                email:e.target.value
            }
        }))
    }

    const typeOfShipmentChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                typeOfShipment:e.target.value
            }
        }))
    }

    const weightChange =(e)=> {
        const regex = /^[0-9]/
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                weight:regex.test(e.target.value) ? e.target.value:''
            }
        }))
    }

    const packagesChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                packages:e.target.value
            }
        }))
    }

    const productChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                product:e.target.value
            }
        }))
    }

    const paymentMethodChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                paymentMethod:e.target.value
            }
        }))
    }

    const carrierChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                carrier:e.target.value
            }
        }))
    }

    const departureTimeChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                departureTime:e.target.value
            }
        }))
    }

    const destinationChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                destination:e.target.value
            }
        }))
    }

    const courierChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                courier:e.target.value
            }
        }))
    }

    const quantityChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                quantity: e.target.value > 0 ? e.target.value : ''
            }
        }))
    }

    const totalFreightChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                totalFreight:e.target.value
            }
        }))
    }

    const carrierReferenceNumberChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                carrierReferenceNumber:e.target.value
            }
        }))
    }

    const originChange =(e)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                origin:e.target.value
            }
        }))
    }

    const pickupDateChange =(date)=> {
        setRecord((previousState) => ({
            ...previousState,
            shipmentDetails:{
                ...previousState.shipmentDetails,
                pickupDate:date ? date.valueOf() : null
            }
        }))
    }

    const focusChanged = ({ focused }) => {
        setFocusedState(focused);
    }

    const locationChange = (e) => {
        setClientInfo((previousState)=>({
            ...previousState,
            location:e.target.value
        }))
    }

    const statusChange = (e) => {
        setClientInfo((previousState)=>({
            ...previousState,
            status:e.target.value
        }))
    }

    const remarkChange = (e) => {
        setClientInfo((previousState)=>({
            ...previousState,
            remark:e.target.value
        }))
    }


    const submit = (e) => {
        e.preventDefault();
        props.dispatchSetLoading(true);
        if(!props.item) {
            const name = record.receiverDetails.name;
            const array = name.split(" ");
            const nameId = array[0];
            const id = generator(nameId)
            set(ref(database, 'records/'+id),{...record,id})
                .then(() =>{
                    props.dispatchAddItem({...record, id})
                    props.dispatchSetLoading(false)
                })
        }else{
            const newObject = JSON.stringify(clientInfo);
            const oldObject = props.item.forClient.length > 0 ? JSON.stringify({
                status:props.item?props.item.forClient[props.item.forClient.length-1].status:'Pending',
                location:props.item?props.item.forClient[props.item.forClient.length-1].location:'',
                remark:props.item?props.item.forClient[props.item.forClient.length-1].remark:''
            }) : '';
            if(newObject === oldObject) {
                set(ref(database, 'records/'+ props.item.id),record)
                    .then(()=>{
                        props.dispatchEditItem(record);
                    })
            } else {
                set(ref(database, 'records/' + props.item.id), {...record,forClient:[...record.forClient,{...clientInfo,editedAt:moment().valueOf()}]})
                    .then(()=>{
                        props.dispatchEditItem({...record,forClient:[...record.forClient,{...clientInfo,editedAt:moment().valueOf()}]});
                    })
            }
        }
        navigate("/admin");
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <h2>SHIPPER DETAILS</h2>
                    <div>
                        <label>Shipper Name</label>
                        <input
                            value={record.shipperDetails.name}
                            onChange={shipperNameChange}
                        />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input 
                            value={record.shipperDetails.phone}
                            onChange={shipperPhoneChange}
                        />
                    </div>
                    <div>
                        <label>Address</label>
                        <input 
                            value={record.shipperDetails.address}
                            onChange={shipperAddressChange}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            value={record.shipperDetails.email}
                            onChange={shipperEmailChange}
                        />
                    </div>
                </div>

                <div>
                    <h2>RECEIVER DETAILS</h2>
                    <div>
                        <label>Receiver Name</label>
                        <input
                            value={record.receiverDetails.name}
                            onChange={receiverNameChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input 
                            value={record.receiverDetails.phone}
                            onChange={receiverPhoneChange}
                        />
                    </div>
                    <div>
                        <label>Address</label>
                        <input 
                            value={record.receiverDetails.address}
                            onChange={receiverAddressChange}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            value={record.receiverDetails.email}
                            onChange={receiverEmailChange}
                            type='email'
                            required
                        />
                    </div>
                </div>

                <div>
                    <h2>SHIPMENT DETAILS</h2>
                    <div>
                        <div>
                            <label>Type of Shipment</label>
                            <select
                                value={record.shipmentDetails.typeOfShipment}
                                onChange={typeOfShipmentChange}
                            >
                                <option value='air' >Air Freight</option>
                                <option value='road'>Road Freight</option>
                                <option value='sea'>Sea Freight</option>
                                <option value='intermodal'>Intermodal Freight</option>
                            </select>
                        </div>
                        <div>
                            <label>Weight</label>
                            <input 
                                value={record.shipmentDetails.weight}
                                onChange={weightChange}
                            />
                        </div>
                        <div>
                            <label>Packages</label>
                            <input 
                                value={record.shipmentDetails.packages}
                                onChange={packagesChange}
                            />
                        </div>
                        <div>
                            <label>Product</label>
                            <input 
                                value={record.shipmentDetails.product}
                                onChange={productChange}
                            />
                        </div>
                        <div>
                            <label>Payment Method</label>
                            <select
                                value={record.shipmentDetails.paymentMethod}
                                onChange={paymentMethodChange}
                            >
                                <option value='cash'>Cash</option>
                                <option value='credit'>Credit Card</option>
                                <option value='debit'>Debit Card</option>
                                <option value='transfer'>Bank Transfer</option>
                                <option value='check'>Check</option>
                                <option value='crypto'>Crypto</option>
                            </select>
                        </div>
                        <div>
                            <label>Carrier</label>
                            <select
                                value={record.shipmentDetails.carrier}
                                onChange={carrierChange}
                            >
                                <option value='dhl'>DHL</option>
                                <option value='fedex'>FedEx</option>
                                <option value='ups'>UPS</option>
                                <option value='schenker'>DB Schenker</option>
                                <option value='maersk'>Maersk</option>
                            </select>
                        </div>
                        <div>
                            <label>Departure Time</label>
                            <input 
                                value={record.shipmentDetails.departureTime}
                                onChange={departureTimeChange}
                                type='time'
                            />
                        </div>
                        <div>
                            <label>Destination</label>
                            <input 
                                value={record.shipmentDetails.destination}
                                onChange={destinationChange}
                            />
                        </div>
                    </div>


                    <div>
                        <div>
                            <label>Courier</label>
                            <input 
                                value={record.shipmentDetails.courier}
                                onChange={courierChange}
                            />
                        </div>
                        <div>
                            <label>Quantity</label>
                            <input 
                                value={record.shipmentDetails.quantity}
                                onChange={quantityChange}
                                type='number'
                            />
                        </div>
                        <div>
                            <label>Total Freight</label>
                            <input 
                                value={record.shipmentDetails.totalFreight}
                                onChange={totalFreightChange}
                            />
                        </div>
                        <div>
                            <label>Carrier Reference Number</label>
                            <input 
                                value={record.shipmentDetails.carrierReferenceNumber}
                                onChange={carrierReferenceNumberChange}
                            />
                        </div>
                        <div>
                            <label>Origin</label>
                            <input 
                                value={record.shipmentDetails.origin}
                                onChange={originChange}
                            />
                        </div>
                        <div>
                            <label>Pickup Date</label>
                            <SingleDatePicker 
                                date={record.shipmentDetails.pickupDate ? moment(record.shipmentDetails.pickupDate): null}
                                onDateChange={pickupDateChange}
                                focused={focusedState}
                                onFocusChange={focusChanged}
                                showClearDate={true}
                                numberOfMonths={1}
                                displayFormat='DD-MM-YYYY'
                                placeholder='Date'
                            />
                        </div>
                    </div>
                </div>

                {props.item && 
                    <div>
                        <h2>For Client</h2>
                        <div>
                            <label>Current Location</label>
                            <input 
                                value={clientInfo.location}
                                onChange={locationChange}
                            />
                        </div>

                        <div>
                            <label>Status</label>
                            <select
                                value={clientInfo.status}
                                onChange={statusChange}
                            >
                                <option value="pending">Pending</option>
                                <option value='on hold'>On Hold</option>
                                <option value='in transit'>In Transit</option>
                                <option value='delivered'>Delivered</option>
                            </select>
                        </div>

                        <div>
                            <label>Remark</label>
                            <input 
                                value={clientInfo.remark}
                                onChange={remarkChange}
                            />
                        </div>
                    </div>
                }

                <button>{props.item?'Save':'Add Item'}</button>
            </form>
        </div>
    )
}

 const mapDispatchToProps = (dispatch) => ({
    dispatchAddItem: (item) => dispatch(addItem(item)),
    dispatchEditItem: (item) => dispatch(editItem(item)),
    dispatchSetLoading: (action) => dispatch(setLoading(action))
 })

export default connect(undefined, mapDispatchToProps)(Form);