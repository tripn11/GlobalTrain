import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Form from "./Form";

const EditShipment = (props) => {
    let { id } = useParams()

    const fillForm = ()=>{
        const selected = props.state.records.filter( (item)=> item.id === id )
        return selected[0]
    }

    return (
        <div>
            <h2>Edit Shipment</h2>
            <Form 
                item={fillForm()}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    state
})

export default connect(mapStateToProps)(EditShipment);