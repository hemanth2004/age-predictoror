import React from 'react'
import PropTypes from 'prop-types'

const ChartTitle = ({text}) => (
    <h3 style={{textAlign: 'center', marginBottom: '-1em', color: "white"}}>{text}</h3>
);

ChartTitle.propTypes = {
    text: PropTypes.string.isRequired
}

export default ChartTitle;