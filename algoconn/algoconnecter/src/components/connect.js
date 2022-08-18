import React from 'react'
import MyAlgoConnect from '@randlabs/myalgo-connect';

const Connect = () => {

    const myAlgoConnect = new MyAlgoConnect({ disableLedgerNano: false });

    const settings = {
        shouldSelectOneAccount: false,
        openManager: false
        };

    const accounts = myAlgoConnect.connect(settings);

}

export default Connect;