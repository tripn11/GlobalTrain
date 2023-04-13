import React from 'react';
import moment from 'moment';

export default (props) => (
    <div className='item'>
        <p>{moment(props.details.editedAt).format('DD-MM-YYYY')}</p>
        <p>{moment(props.details.editedAt).format('hh:mm a')}</p>
        <p>{props.details.location}</p>
        <p>{props.details.status}</p>
        <p>{props.details.remark}</p>
    </div>
)