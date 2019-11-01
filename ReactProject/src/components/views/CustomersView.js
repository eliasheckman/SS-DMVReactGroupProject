import React from 'react';
import PropTypes from 'prop-types';
import CRMView from './CRMView.js';

let _DATA_TYPE = "customer";
let _ROW_KEY = "madmv_ma_customerid";
let _COLUMNS = [
    {header: "Name",  key: "madmv_fullname"},
    {header: "Age",   key: "madmv_age"},
    {header: "SSN",   key: "madmv_cssn"},
    {header: "Email", key: "madmv_email"},
    {header: "Phone", key: "madmv_phonenumber"}
]

const view = function(props) {
    return (
        <CRMView
            dataType   = {_DATA_TYPE}
            tableState = {props.stores[_DATA_TYPE]}
            rowKey     = {_ROW_KEY}
            columns    = {_COLUMNS}
        />
    );
}

view.propTypes = {
    stores: PropTypes.object.isRequired
};

export default view;