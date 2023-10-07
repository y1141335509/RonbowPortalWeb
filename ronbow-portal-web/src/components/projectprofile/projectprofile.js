import React from 'react';
import { Collapse } from 'antd';
import './projectprofile.css';


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const { Panel } = Collapse;

const items = [
  {
    key: '1',
    label: 'BASIC INFO',
    children: <p style="font-weight: 150;">{text}</p>,
  },
  {
    key: '2',
    label: 'FLOOR PLAN',
    children: <p>Hello world</p>,
  },
  {
    key: '3',
    label: 'INSPIRATION',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" /></div>,
  },
  {
    key: '4',
    label: 'QUESTIONAIRE',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" /></div>,
  },
  {
    key: '5',
    label: 'DESIGN REVIEW - ROUND 1',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" /></div>,
  },
  {
    key: '6',
    label: 'DESIGN REVIEW - ROUND 2',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" /></div>,
  },
  {
    key: '7',
    label: 'PAYMENT 1',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" /></div>,
  },
  {
    key: '8',
    label: 'FINAL DESIGN',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" /></div>,
  },
  {
    key: '9',
    label: 'PAYMENT 2',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" /></div>,
  },
  {
    key: '10',
    label: 'PRODUCTION',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" /></div>,
  },
  {
    key: '11',
    label: 'INSTALLATION',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" /></div>,
  },
];

const App = () => (

  <div style={{ fontStyle: "roboto", }}>
    <span style={{ fontStyle: 'roboto', fontSize: '20px', fontWeight: '150', }}>The Process</span>

    <Collapse accordion>
      {items.map(item => (
        <Collapse.Panel header={item.label} key={item.key}>
          {item.children}
        </Collapse.Panel>
      ))}
    </Collapse>
  </div>
  
);

export default App;
