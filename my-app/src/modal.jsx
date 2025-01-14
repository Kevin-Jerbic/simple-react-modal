//import PropTypes from 'prop-types';
import './modal.css';

/**
 * Modal component to display a message in a modal dialog.
 *
 * @component
 * @param {string} message - The message to display in the modal.
 * @param {function} toggle - Function to call when the modal is closed.
 * @param {boolean} isOpen - Boolean to control the visibility of the modal.
 * @returns {JSX.Element} The rendered modal component.
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
