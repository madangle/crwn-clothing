import React from 'react';
import {SpinnerOverlay, SpinnerContainer} from './Spinner.styles';

const Spinner = (WrappedComponent) => ({isLoading, ...otherProps}) => {
    return isLoading ?
    (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} /> 
    );
}; //function inside another function - HOC

export default Spinner;