import React from 'react';
import PropTypes from 'prop-types';

const SamplePage = (props) => {
    const {messages, onButtonClick} = props;
    return (
        <>
            <p>Hello Sample Page</p>
            <ul>
                {messages.map(message=>(<p>{message}</p>))}
            </ul>
            <button onClick={onButtonClick}>Make API Call</button>
        </>
    )
};

SamplePage.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
};

export default SamplePage;