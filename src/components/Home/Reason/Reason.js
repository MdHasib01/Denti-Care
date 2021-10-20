import { faAward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Reason.css'
const Reason = (props) => {
    const {reason, details} = props.reason
    return (
        <div className="col-md-4">
            <h4 className="reason-text"><FontAwesomeIcon icon={faAward} /> {reason}</h4>
            <p className="details">{details}</p>
        </div>
    );
};

export default Reason;