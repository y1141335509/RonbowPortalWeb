import React from 'react';
import { Collapse } from 'antd';
import './customerprofile.css';


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
    children: <p>{text}</p>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '2',
    label: 'FLOOR PLAN',
    children: <p>Hello world</p>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '3',
    label: 'INSPIRATION',
    children: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>, 
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
},
  {
    key: '4',
    label: 'QUESTIONAIRE',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '5',
    label: 'DESIGN REVIEW - ROUND 1',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '6',
    label: 'DESIGN REVIEW - ROUND 2',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '7',
    label: 'PAYMENT 1',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '8',
    label: 'FINAL DESIGN',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '9',
    label: 'PAYMENT 2',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '10',
    label: 'PRODUCTION',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '11',
    label: 'INSTALLATION',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
];

const CustomerProfile = () => (
    <div >
      <span style={{ fontFamily: 'Roboto, sans-serif', 
                      fontSize: '12px', 
                      fontWeight: "400",
                      lineHeight: "14px",
                      letterSpacing: "0.02em",
                      textAlign: "left",
                     }}
      >
        Customer Profile
      </span>
  
      <Collapse accordion style={{ width: 'auto', }}>
        {items.map(item => (
          <Panel header={<span style={item.headerStyle}>{item.label}</span>} key={item.key} >
            {/* The div below contains detail contents */}
            <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
                          lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
                          paddingLeft: '30px'}}>
                {item.children}
            </div>
          </Panel>
        ))}
      </Collapse>
    </div>
  );

export default CustomerProfile;
