import React, { useEffect, useState } from 'react';
import moment from 'moment';

export default (props) => {
    const [myColor, setMyColor] = useState('black');

    useEffect(()=>{
        switch (props.details.status) {
            case 'pending' :
                setMyColor('red');
                break;
            
            case 'on hold':
                setMyColor('red');
                break;

            case 'in transit':
                setMyColor('blue');
                break;

            case 'delivered':
                setMyColor('green');
                break;
            default:
                setMyColor('black');
        }
    }, [props.details.status])

    return (<div className='item'>
        <p>{moment(props.details.editedAt).format('DD-MM-YYYY')}</p>
        <p>{props.details.location}</p>
        <p style={{color:myColor}}>{props.details.status}</p>
        <p>{props.details.remark}</p>
    </div>
)}