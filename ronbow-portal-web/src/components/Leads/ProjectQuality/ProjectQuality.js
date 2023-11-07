import React, { useState } from 'react';
import { Tag, Select, Input } from 'antd';

const ProjectQuality = ({ initialProjects }) => {
  const [selectedProjects, setSelectedProjects] = useState(initialProjects);
  const [projectOptions, setProjectOptions] = useState([
    'Kitchen',
    'Bath',
    'Wet Bar',
    'Gallery',
  ]);
  const [newProjectName, setNewProjectName] = useState('');

  // Handler for when projects are selected or deselected
  const handleChange = (value) => {
    setSelectedProjects(value.filter((v) => v !== 'Add New'));
  };

  const handleNewProjectInput = (event) => {
    setNewProjectName(event.target.value);
  };

  const addNewProjectOption = () => {
    if (newProjectName && !projectOptions.includes(newProjectName)) {
      setProjectOptions([...projectOptions, newProjectName]);
      setSelectedProjects([...selectedProjects, newProjectName]);
      setNewProjectName('');
    }
  };

  // Custom dropdown render
  const dropdownRender = (menu) => (
    <>
      {menu}
      <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
        <Input style={{ flex: 'auto' }} value={newProjectName} onChange={handleNewProjectInput} />
        <a
          style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer', color: 'rgb(0, 0, 0, 0.88)' }}
          onClick={addNewProjectOption}
        >
          Add item
        </a>
      </div>
    </>
  );

  return (
    <Select
      mode="multiple"
      style={{ minWidth: 120 }}
      value={selectedProjects}
      onChange={handleChange}
      dropdownRender={dropdownRender}
      options={projectOptions.map((project) => ({ value: project, label: project }))}
    />
  );
};

export default ProjectQuality;
