"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExclamationTriangle } from 'react-icons/fa';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
  isDeleting?: boolean;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  itemName,
  isDeleting = false
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="delete-modal-overlay" onClick={onClose}>
          <motion.div
            className="delete-modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="delete-modal-close"
              onClick={onClose}
              aria-label="Close delete confirmation"
            >
              <FaTimes />
            </button>

            <div className="delete-modal-icon">
              <FaExclamationTriangle />
            </div>

            <h3 className="delete-modal-title">Delete Confirmation</h3>

            <p className="delete-modal-message">
              Are you sure you want to delete <strong>"{itemName}"</strong>?
            </p>

            <p className="delete-modal-warning">
              This action cannot be undone.
            </p>

            <div className="delete-modal-actions">
              <button
                className="delete-modal-btn delete-modal-btn-cancel"
                onClick={onClose}
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                className="delete-modal-btn delete-modal-btn-confirm"
                onClick={onConfirm}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DeleteConfirmModal;