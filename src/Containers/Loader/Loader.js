import React, { Component } from 'react';
import Spinner from 'react-spinner-material';

class Loader extends Component {
    render() {
        return (
            <div style={{display: "inline-block"}}>
                <Spinner
                    size={50}
                    color={"#333"}
                    width={5}
                    visible={true}
                />
            </div>
        );
    }
}

export default Loader;
