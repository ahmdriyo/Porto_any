'use client';
import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children : any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.modal} onClick={e => e.stopPropagation()}>
                <button style={styles.closeButton} onClick={onClose}>&times;</button>
                <div>{children}</div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        position: 'relative' as 'relative',
    },
    closeButton: {
        position: 'absolute' as 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '24px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
    },
};

export default Modal;
