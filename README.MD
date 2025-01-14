# Simple React Modal

A simple and customizable React modal component, designed for ease of use and flexibility.

## Getting Started

Install this package:

```shell
npm i @kevin-j/simple-react-modal
```

Import the Modal component:

```js
import Modal from '@kevin-j/simple-react-modal/src/modal.jsx';
```

## Usage

Here's how you can use the modal component in your React project.

# Basic Example

```js
import { useState } from 'react';
import Modal from '@kevin-j/simple-react-modal/src/modal.jsx';

const App = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button onClick={() => setDisplayModal(true)}>Open my Modal</button>
            <Modal
                message="Hello, I am a modal"
                toggle={() => setDisplayModal(false)}
                isOpen={displayModal}
            />
        </div>
    );
};

export default App;
```

# Props

The Modal component accepts the following props:

| Prop      | Type         | Required | Description                                    |
| --------- | ------------ | -------- | ---------------------------------------------- |
| `message` | `string`     | Yes      | The content to be displayed.                   |
| `toggle`  | `() => void` | Yes      | Callback function to handle closing the modal. |
| `isOpen`  | `boolean`    | Yes      | Controls wether the modal is visible or not.   |

# CSS Styling

If you want to customize the styles, you can either modify Modal.css or override the styles in your own stylesheet by targeting the following class names:

-   **`.modal`** – The background the modal.
-   **`.modal-content`** – The main modal container.
-   **`.modal-close`** – The close button inside the modal.
