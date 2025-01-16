//import PropTypes from 'prop-types';
import './modal.css';

/**
 * Modal component to display a message in a modal dialog.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.message - The message to display in the modal.
 * @param {function} props.toggle - Function to call when the modal is closed.
 * @param {boolean} props.isOpen - Boolean to control the visibility of the modal.
 * @returns {JSX.Element|null} The rendered modal component or null if not open.
 */
function Modal({ message, toggle, isOpen }) {
    if (!isOpen) return null;
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <p>{message}</p>
                <span className="modal-close" onClick={toggle}>
                    &times;
                </span>
            </div>
        </div>
    );
}

// Modal.propTypes = {
//     message: PropTypes.string,
//     toggle: PropTypes.func,
//     isOpen: PropTypes.bool,
// };

export default Modal;
