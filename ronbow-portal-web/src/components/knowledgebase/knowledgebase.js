import React from 'react';
import { Collapse, Divider } from 'antd';
import './knowledgebase.css';
import { ExportOutlined, FilterOutlined, SearchOutlined } from '@ant-design/icons';



const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const { Panel } = Collapse;

const items = [
  {
    key: '1',
    label: 'COMPANY OVERVIEW',
    children: <>
        <p>{text}
            <a 
            href="https://cdn.ronbow.com/resources/Ronbow-Company-Profile-V6.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{color: 'blue', textDecoration: 'underline'}}
            >
            Download PDF
            </a>
        </p>
    </>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '2',
    label: 'BRAND VALUE AND CULTURE',
    children: <p>Hello world, check out this <a href="https://www.ronbow.com" target="_blank" rel="noopener noreferrer">Ronbow Site <ExportOutlined /></a>.</p>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '3',
    label: 'INTRODUCTION TO CABINETS',
    children: 
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/pXafDypqbdA" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </div>
    , 
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
},
  {
    key: '4',
    label: 'MATERIAL AND CONSTRUCTION',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '5',
    label: 'DESIGN AND STYLE',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '6',
    label: 'CUSTOMER INFO',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '7',
    label: 'CONTACT METHOD',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '8',
    label: 'LIFESTYLE',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '9',
    label: 'MEETING NOTES',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  }
];

const KnowledgeBase = () => (

  <div >
    <div className="header">
      <span style={{ 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '18px', 
          fontWeight: "400",
          lineHeight: "14px",
          letterSpacing: "0.02em",
          textAlign: "left" 
      }}>
        Academy - Designer
      </span>
      <div>
        <FilterOutlined className="icon" />
        <SearchOutlined className="icon" />
      </div>
    </div>


  
      <Divider style={{ opacity: '0', }}/>
      <Collapse accordion style={{ width: 'auto' }} expandIconPosition='right'>
        <div  style={{fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
                      lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
                      backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px', }}>
          <span>Introduction</span>
        </div>

        {items.slice(0, 2).map((item, index) => (
          <Panel header={<span style={item.headerStyle}>{item.label}</span>} 
                 key={item.key} 
                 style={{ borderTop: '1px solid #f0f0f0', }}
          >
            <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
                          lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
                          paddingLeft: '30px'}}>
                {item.children}
            </div>
          </Panel>
        ))}

        <div  style={{fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
                      lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
                      backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px',  }}>
          <span>Cabinet Product Knowledge</span>
        </div>

        {items.slice(2, 10).map((item, index) => (
          <Panel header={<span style={item.headerStyle}>{item.label}</span>} 
                 key={item.key} 
                 style={{ borderTop: '1px solid #f0f0f0', }}
          >
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


export default KnowledgeBase;
