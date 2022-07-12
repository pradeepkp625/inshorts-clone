import React from 'react';
import { CircularProgress } from '@mui/material';

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Loading = () => {
    return <div>
        <div className="loading">
        <CircularProgress color='error' />
        </div>
    </div>;
}

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;
// #endregion

export default Loading;