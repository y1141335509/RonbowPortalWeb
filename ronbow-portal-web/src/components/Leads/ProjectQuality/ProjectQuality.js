// Assuming ProjectQuality.js looks something like this
import React, { useState } from 'react';
import { Tag, Select } from 'antd';

const ProjectQuality = ({ initialProjects }) => {
  // Use the initialProjects for the initial state
  const [selectedProjects, setSelectedProjects] = useState(initialProjects);

  // Handler for when projects are selected or deselected
  const handleChange = (value) => {
    setSelectedProjects(value);
  };

  // Additional project options
  const projectOptions = [
    'Kitchen',
    'Bath',
    'Living Room',  // Adding more options
    'Dining Room',  // Adding more options
    'Bedroom',      // Adding more options
    // Add as many as you need
  ];

  return (
    <Select
      mode="multiple"
      style={{ minWidth: 120 }}
      value={selectedProjects}
      onChange={handleChange}
      options={projectOptions.map((project) => ({ value: project, label: project }))}
    />
  );
};

export default ProjectQuality;
