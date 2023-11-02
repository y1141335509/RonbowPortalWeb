import React, { useEffect, useState } from 'react';
import { Form, List, Button, Checkbox, Modal } from 'antd';

const AddShortcut = ({ visible, allShortcuts, selectedShortcuts, onSave, onCancel }) => {
  const [selected, setSelected] = useState(selectedShortcuts);
  console.log({ visible, allShortcuts, selectedShortcuts, onSave, onCancel });

  useEffect(() => {
    if (visible) {
      setSelected(selectedShortcuts);
    }
  }, [visible, selectedShortcuts]);

  const handleChange = (checkedValues) => {
    setSelected(checkedValues);
  };

  const handleSave = () => {
    const selectedShortcuts = allShortcuts.filter((shortcut) => selected.includes(shortcut.key));
    onSave(selectedShortcuts);
    onCancel();  // Close the modal after saving
  };

  return (
    <Modal
      title="Select Shortcuts"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      {/* <Form>
        <Checkbox.Group value={selected} onChange={handleChange}>
          {allShortcuts.map((shortcut) => (
            <Checkbox
              key={shortcut.key}
              value={shortcut.key}
              disabled={shortcut.key === '10'}
            >
              {shortcut.label}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Form> */}


      <Form>
        <Checkbox.Group value={selected} onChange={handleChange}>
            {allShortcuts.map((shortcut) => (

              <div>

                <Checkbox
                key={shortcut.key}
                value={shortcut.key}
                disabled={shortcut.key === '10'}
              >
                {shortcut.label}
              </Checkbox>
              </div>
            ))}
          </Checkbox.Group>
      </Form>
    </Modal>
  );
};

export default AddShortcut;

