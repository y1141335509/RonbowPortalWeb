import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ProjectForm from './ProjectForm/ProjectForm';



const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setModalOpen(true)}>
        Add a Project
      </Button>
      <Modal
        title="Add a Project"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          // <Button key="back" onClick={handleCancel}>
          //   Cancel
          // </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Add
          </Button>,
        ]}
      >

        <ProjectForm />
      
      </Modal>
    </>
  );
};
export default App;