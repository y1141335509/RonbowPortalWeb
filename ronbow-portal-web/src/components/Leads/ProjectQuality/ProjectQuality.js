import React, { useState } from 'react';
import { Radio, Select, Space } from 'antd';


const options = [
  {
    value: 'Kitchen',
    label: 'Kitchen',
  },
  {
    value: 'Bath',
    label: 'Bath',
  },
];



const ProjectQuality = (props) => {
  const { initialProjects } = props; // Accept initialProjects as a prop

  return (
    <>
      <Select
        mode="multiple"
        size='small'
        placeholder="Please select"
        defaultValue={initialProjects} // Use the initialProjects prop as defaultValue
        style={{
          width: '100%',
        }}
        options={options}
      />
    </>
  );
};

export default ProjectQuality;