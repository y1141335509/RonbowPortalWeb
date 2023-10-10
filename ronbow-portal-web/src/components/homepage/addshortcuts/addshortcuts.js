import React, { useState } from 'react';
import { Modal, Checkbox, Button } from 'antd';

const AddShortcutModal = ({ isVisible, onClose, onSave }) => {
  const [selectedShortcuts, setSelectedShortcuts] = useState([]);

  const shortcuts = [
    { label: 'Shortcut 1', value: 'shortcut1' },
    { label: 'Shortcut 2', value: 'shortcut2' },
    // Add more shortcuts as needed
  ];

  const onChange = checkedValues => {
    setSelectedShortcuts(checkedValues);
  };

  const handleSave = () => {
    onSave(selectedShortcuts);
    onClose();
  };

  return (
    <Modal
      title="Add Shortcuts"
      visible={isVisible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      <Checkbox.Group options={shortcuts} onChange={onChange} />
    </Modal>
  );
};

export default AddShortcutModal;
