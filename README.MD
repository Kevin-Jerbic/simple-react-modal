## Basic Example

import { useState } from 'react';
import Modal from './modal';

const App = () => {
// Local state (Display modal)
const [displayModal, setDisplayModal] = useState(false);

    return (
        <div>
            <button onClick={() => setDisplayModal(true)}>Open Modal</button>
            <Modal
                message="This is a simple modal"
                toggle={() => setDisplayModal(false)}
            />
        </div>
    );

};

export default App;
