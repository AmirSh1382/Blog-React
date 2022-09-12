import React from 'react';

// Spinner
import { TailSpin } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
            <TailSpin height="50" width="50" color="gray" />
        </div>
    );
};

export default Loading;