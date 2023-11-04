import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse, Divider, Button, ConfigProvider, Menu,
  Dropdown, Image, QRCode, Input, Switch, Form,
  List, Typography
} from 'antd';
import './ProjectProfile624748504.css';
import {
  ExportOutlined, FilterOutlined, SearchOutlined, DownloadOutlined,
  ToolOutlined, PrinterOutlined, MailOutlined, UserOutlined,
} from '@ant-design/icons';
import Progress from './Progress/Progress';
import Zoom from '../../Zoom/Zoom';
import Calculator from './Calculator/Calculator';
import ProgressTest from './Progress/Progress-Test';
import ProgressCollapsed from './Progress/ProgressCollapsed';
import ModeIcon from '@mui/icons-material/Mode';
import FolderSharedIcon from '@mui/icons-material/FolderShared';



const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const { Panel } = Collapse;
const { TextArea } = Input;


const data = [
  "Your Wet Bar at San Mateo with L-shape style is being designed by Wendy from 2023/9/5.",
];



const items = [
  {
    key: '1',
    label: 'FLOOR PLAN',
    children: <div>
      <p>Hello world, check out this <a href="https://www.ronbow.com" target="_blank" rel="noopener noreferrer">Ronbow Site <ExportOutlined /></a>.</p>
      <Zoom />
    </div>
    ,
    headerStyle: { fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '2',
    label: 'BASIC INFO',
    children: <div>
      <ul>
        <li>Budget: $80K</li>
        <li>
          <p>Location: 680 8th St Suite 166, San Francisco, CA 94103 <a href="https://www.google.com/maps/place/Ronbow+-+San+Francisco+Showroom/@37.7705158,-122.4047388,17z/data=!3m1!4b1!4m6!3m5!1s0x808f7ff6c1506edd:0x6e721d2aa659d15b!8m2!3d37.7705158!4d-122.4047388!16s%2Fg%2F11krc64xsh?entry=ttu">(See Google Map) <ExportOutlined /></a></p>
        </li>
      </ul>

    </div>,
    headerStyle: { fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '3',
    label: 'INSPIRATION',
    children: <div>
      <img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image' />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>,
    headerStyle: { fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '4',
    label: 'DOCUMENTS',
    children: (
      <div>
        {[
          { label: 'Others', link: 'https://example.com/others' },
          { label: 'Invoices', link: 'https://example.com/invoices' },
          { label: 'Item Lists', link: 'https://example.com/item-lists' },
          { label: 'Final Document', link: 'https://example.com/final-document' },
          { label: 'Appliances', link: 'https://example.com/appliances' },
          { label: 'Drawings', link: 'https://example.com/drawings' },
          { label: 'Design & Deposit Agreement', link: 'https://example.com/design-deposit-agreement' },
        ].map((doc, index) => (
          <a
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
            key={index}
          >
            <p style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              verticalAlign: 'middle',
              margin: 0,
            }}>
              <FolderSharedIcon style={{ color: '#5D6465', marginRight: '8px' }} />
              {doc.label}
            </p>
          </a>
        ))}
        <Zoom />
      </div>
    ),
    headerStyle: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '14px',
      letterSpacing: '0.02em',
      textAlign: 'left',
    },
  },
  {
    key: '5',
    label: 'LIFESTYLE',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image' /></div>,
    headerStyle: { fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '6',
    label: 'BASIC INFO',
    children: <div>
    </div>,
    headerStyle: { fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '7',
    label: 'MEETING NOTES',
    children: <div style={{ textAlign: 'center', }}>
      <TextArea rows={4} />
      <Button style={{ backgroundColor: '#5D6465', color: '#F0ECEC', marginTop: '10px', }}>Save</Button>
    </div>,
    headerStyle: { fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '8',
    label: 'ALL PROJECTS',
    children: <div>
      <List
        header={<div style={{ fontWeight: '400', }}>All Your Projects:</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark></Typography.Text> {item}
            <Link to='https://designstudio.ronbow.com/' target="_blank" rel="noreferrer">  Check it Out! <ExportOutlined /></Link>
          </List.Item>
        )}
      />
    </div>,
    headerStyle: { fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
];


const handleDesignButton = () => {
  window.open('https://designstudio.ronbow.com/');
}

const handleEmailUs = () => {
  window.location.href = "mailto:example@gmail.com";
};

const handlePrint = () => {
  window.open("URL_TO_PDF", '_blank').print();
};

const handleDownload = () => {
  window.open("https://cdn.ronbow.com/resources/Ronbow-Company-Profile-V6.pdf", '_blank');
};

const handleUserSignon = () => {
  window.open("https://auth.services.adobe.com/en_US/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2Fdc-prod-virgoweb%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Facrobat.adobe.com%252Flink%252Fhome%252F%2523old_hash%253Daccess_token%253DeyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2OTgxMzEzNDI0MjZfNWFhNGU4M2ItOTVkYy00NzVlLWI5NGYtMmIzNzlmMmRkMjU5X3V3MiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJvY193ZWxjb21lIiwidXNlcl9pZCI6IjcyMkIxREFBNjUwMzk0QjAwQTQ5NUZFREBiMTRlNDBkMTYxYWE4YzdhNDk1ZmRiLmUiLCJzdGF0ZSI6IiIsImFzIjoiaW1zLW5hMSIsImFhX2lkIjoiNzIyQTFEQUE2NTAzOTRCMDBBNDk1RkVEQEFkb2JlSUQiLCJjdHAiOjAsImZnIjoiWDRORTI3QUZGUFA1TUhVS0hNUVZZSEFBVlk9PT09PT0iLCJzaWQiOiIxNjk0NzMzODI0OTc2XzY2MzNkZjZkLTJjNmYtNGFkNy05ZGQ0LTMxNDMyZTMxODcyMV91dzIiLCJtb2kiOiI4Y2QwY2YxNyIsInBiYSI6Ik1lZFNlY05vRVYsTG93U2VjIiwiZXhwaXJlc19pbiI6Ijg2NDAwMDAwIiwic2NvcGUiOiJBZG9iZUlELG9wZW5pZCIsImNyZWF0ZWRfYXQiOiIxNjk4MTMxMzQyNDI2In0.OuGHeeHNGVzZApZK_QcbBaGMj6Gh45BemBAMfbpMoZPxsujIMC6wwZ6f9lET6khDBYw6o4lRpHIitpy7yol2TlZ3B-Z10x_5C2CS4XwJLR-uXqMky10nGIkV0DOIYYdutwCwnf1NVuu5bjdfW1M7TeEVddVwlEIErbmVilmDr0M4hNW87xuxJsLC-f2OFiFZzY9g8seaWNF5wX_ogghrxl8atkjqfOKbqOQHn9ikcDdDiie8RT0066sCjydhbfU7ERKQRWROw4RerAVUia_faKcZGJGht-0M11MxIIqZLxyqOWyriMPvczYwDY53vfwvBWt7gNENvnoixOD08PFmHg%2526token_type%253Dbearer%2526expires_in%253D86399996%2526from_ims%253Dtrue%253Fclient_id%253Ddc-prod-virgoweb%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252CDCAPI%252Cadditional_info.account_type%252Cadditional_info.optionalAgreements%252Cagreement_sign%252Cagreement_send%252Csign_library_write%252Csign_user_read%252Csign_user_write%252Cagreement_read%252Cagreement_write%252Cwidget_read%252Cwidget_write%252Cworkflow_read%252Cworkflow_write%252Csign_library_read%252Csign_user_login%252Csao.ACOM_ESIGN_TRIAL%252Cee.dcweb%252Ctk_platform%252Ctk_platform_sync%252Cab.manage%252Cadditional_info.incomplete%252Cadditional_info.creation_source%252Cadditional_info.roles%252Cupdate_profile.first_name%252Cupdate_profile.last_name%26state%3D%257B%2522ac%2522%253A%2522adobe.com_acrobatweb_login%2522%252C%2522jslibver%2522%253A%2522v2-v0.38.0-17-g633319d%2522%252C%2522nonce%2522%253A%25221474989075291272%2522%257D%26code_challenge_method%3Dplain%26use_ms_for_expiry%3Dtrue&client_id=dc-prod-virgoweb&scope=AdobeID%2Copenid%2CDCAPI%2Cadditional_info.account_type%2Cadditional_info.optionalAgreements%2Cagreement_sign%2Cagreement_send%2Csign_library_write%2Csign_user_read%2Csign_user_write%2Cagreement_read%2Cagreement_write%2Cwidget_read%2Cwidget_write%2Cworkflow_read%2Cworkflow_write%2Csign_library_read%2Csign_user_login%2Csao.ACOM_ESIGN_TRIAL%2Cee.dcweb%2Ctk_platform%2Ctk_platform_sync%2Cab.manage%2Cadditional_info.incomplete%2Cadditional_info.creation_source%2Cadditional_info.roles%2Cupdate_profile.first_name%2Cupdate_profile.last_name&state=%7B%22ac%22%3A%22adobe.com_acrobatweb_login%22%2C%22jslibver%22%3A%22v2-v0.38.0-17-g633319d%22%2C%22nonce%22%3A%221474989075291272%22%7D&relay=a86a94fa-1a7e-4e55-b573-18c04043a7f5&locale=en_US&flow_type=token&dctx_id=v%3A2%2Cs%2C6eca5110-6cfa-11ed-b11c-3982bff8dfd0&idp_flow_type=login&s_p=google%2Cfacebook%2Capple&check_pba=true&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Facrobat.adobe.com%2Flink%2Fhome%2F%23old_hash%3Daccess_token%3DeyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2OTgxMzEzNDI0MjZfNWFhNGU4M2ItOTVkYy00NzVlLWI5NGYtMmIzNzlmMmRkMjU5X3V3MiIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJvY193ZWxjb21lIiwidXNlcl9pZCI6IjcyMkIxREFBNjUwMzk0QjAwQTQ5NUZFREBiMTRlNDBkMTYxYWE4YzdhNDk1ZmRiLmUiLCJzdGF0ZSI6IiIsImFzIjoiaW1zLW5hMSIsImFhX2lkIjoiNzIyQTFEQUE2NTAzOTRCMDBBNDk1RkVEQEFkb2JlSUQiLCJjdHAiOjAsImZnIjoiWDRORTI3QUZGUFA1TUhVS0hNUVZZSEFBVlk9PT09PT0iLCJzaWQiOiIxNjk0NzMzODI0OTc2XzY2MzNkZjZkLTJjNmYtNGFkNy05ZGQ0LTMxNDMyZTMxODcyMV91dzIiLCJtb2kiOiI4Y2QwY2YxNyIsInBiYSI6Ik1lZFNlY05vRVYsTG93U2VjIiwiZXhwaXJlc19pbiI6Ijg2NDAwMDAwIiwic2NvcGUiOiJBZG9iZUlELG9wZW5pZCIsImNyZWF0ZWRfYXQiOiIxNjk4MTMxMzQyNDI2In0.OuGHeeHNGVzZApZK_QcbBaGMj6Gh45BemBAMfbpMoZPxsujIMC6wwZ6f9lET6khDBYw6o4lRpHIitpy7yol2TlZ3B-Z10x_5C2CS4XwJLR-uXqMky10nGIkV0DOIYYdutwCwnf1NVuu5bjdfW1M7TeEVddVwlEIErbmVilmDr0M4hNW87xuxJsLC-f2OFiFZzY9g8seaWNF5wX_ogghrxl8atkjqfOKbqOQHn9ikcDdDiie8RT0066sCjydhbfU7ERKQRWROw4RerAVUia_faKcZGJGht-0M11MxIIqZLxyqOWyriMPvczYwDY53vfwvBWt7gNENvnoixOD08PFmHg%26token_type%3Dbearer%26expires_in%3D86399996%26from_ims%3Dtrue%3Fclient_id%3Ddc-prod-virgoweb%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2CDCAPI%2Cadditional_info.account_type%2Cadditional_info.optionalAgreements%2Cagreement_sign%2Cagreement_send%2Csign_library_write%2Csign_user_read%2Csign_user_write%2Cagreement_read%2Cagreement_write%2Cwidget_read%2Cwidget_write%2Cworkflow_read%2Cworkflow_write%2Csign_library_read%2Csign_user_login%2Csao.ACOM_ESIGN_TRIAL%2Cee.dcweb%2Ctk_platform%2Ctk_platform_sync%2Cab.manage%2Cadditional_info.incomplete%2Cadditional_info.creation_source%2Cadditional_info.roles%2Cupdate_profile.first_name%2Cupdate_profile.last_name&use_ms_for_expiry=true#/", '_blank');
};

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<DownloadOutlined />} onClick={handleDownload}>
      Preview & Download
    </Menu.Item>
    <Menu.Item key="2" icon={<PrinterOutlined />} onClick={handlePrint}>
      Print
    </Menu.Item>
    <Menu.Item key="3" icon={<MailOutlined />} onClick={handleEmailUs}>
      Email Customer
    </Menu.Item>
    <Menu.Item key="4" icon={<ModeIcon />} onClick={handleUserSignon}>
      Sign
    </Menu.Item>

  </Menu>
);


const ProjectProfile = () => (

  <div style={{ width: '100%', overflow: 'hidden', }}>
    {/* Old */}
    {/* <div style={{ float: 'left', width: '20%', marginLeft: '20px', }}>
      <Progress />
    </div> */}

    {/* Current progress bar */}
    {/* <div style={{ float: 'left', width: '20%', marginLeft: '20px', fontFamily: 'Roboto, sans-serif', }}>
      <ProgressTest />
    </div> */}

    {/* Progress bar collapsed: */}
    <div style={{ float: 'left', width: '20%', marginLeft: '20px', fontFamily: 'Roboto, sans-serif', }}>
      <ProgressCollapsed />
    </div>


    <div style={{ float: 'right', width: '70%', marginRight: '20px', marginLeft: '20px', }}>
      <span style={{
        fontFamily: 'Roboto, sans-serif',
        fontSize: '18px',
        fontWeight: "400",
        lineHeight: "14px",
        letterSpacing: "0.02em",
        textAlign: "left"
      }}
      >
        Kevin's Kitchen - Palo Alto
      </span>

      <Divider style={{ opacity: '0', }} />
      <Collapse accordion style={{ width: 'auto' }} expandIconPosition='end' >
        <div style={{
          fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
          lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left',
          backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px',
        }}>
          <span>Project Detail</span>
        </div>

        {items.slice(0, 5).map((item, index) => (
          <Panel header={<span style={item.headerStyle}>{item.label}</span>}
            key={item.key}
            style={{ borderTop: '1px solid #f0f0f0', }}
          >
            <div style={{
              fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
              lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left',
              paddingLeft: '30px'
            }}>
              {item.children}
            </div>
          </Panel>
        ))}

      </Collapse>

      <Divider style={{ opacity: '0', }} />
      <Collapse accordion style={{ width: 'auto' }} expandIconPosition='end' >
        <div style={{
          fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
          lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left',
          backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px',
        }}>
          <span>Customer Info</span>

        </div>

        {items.slice(5, 9).map((item, index) => (
          <Panel header={<span style={item.headerStyle}>{item.label}</span>}
            key={item.key}
            style={{ borderTop: '1px solid #f0f0f0', }}
          >
            <div style={{
              fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
              lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left',
              paddingLeft: '30px'
            }}>
              {item.children}
            </div>
          </Panel>
        ))}

      </Collapse>


      <div style={{ textAlign: 'center', }}>
        <Button
          size='large'
          onClick={() => handleDesignButton()}
          style={{ backgroundColor: '#5D6465', color: '#F0ECEC', marginRight: '10px', }}
        >
          Design Now!
        </Button>

        <Button
          size='large'
          onClick={() => handleDesignButton()}
          style={{ marginRight: '10px', }}
          disabled
        >
          Generate Proposal!
        </Button>

      </div>

      <Divider style={{ opacity: '0', }} />

      <span style={{
        fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
        lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left',
        backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px',
      }}>
        Price Calculator</span>
      <div style={{ textAlign: 'center', marginTop: '10px', }}>

        <Calculator />
        <Divider />
      </div>

      <div>
        <span style={{
          fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
          lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left',
          backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px',
        }}>
          Signature</span>    <br />

        <div style={{ textAlign: 'center', }}>
          <Dropdown overlay={menu} trigger={['click']}>
            <Button
              size='large'
              icon={<DownloadOutlined />}
              style={{ backgroundColor: '#fff', color: '#5D6465', marginLeft: '10px', }}
            >
              Files
            </Button>
          </Dropdown>
        </div>
      </div>


      <Divider />

      <div>
        <span style={{
          fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
          lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left',
          backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px',
        }}>
          Payment</span>
        <div style={{ textAlign: 'center', }}>
          <QRCode
            errorLevel="H"
            value="https://ant.design/"
            icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
          <Button style={{ marginRight: '20px', }}>
            Pay Now
          </Button>
          <Button style={{ marginRight: '20px', }}>
            Pay Online
          </Button>
          <Button style={{ marginRight: '20px', }}>
            Pay by Check
          </Button>
          <Button style={{ margin: 'auto', }}>
            Finance
          </Button>
        </div>
      </div>
      
      <Divider />

      <div>
        <span style={{
          fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
          lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left',
          backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px',
        }}>
          Submit</span>
      </div>

      <div style={{ textAlign: 'center', }}>

        <Form
          name="wrap"
          labelCol={{ flex: '200px' }}
          labelAlign="right"
          labelWrap
          wrapperCol={{ flex: 1 }}
          colon={false}
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="Deal ID: " name="deal_id" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Design Studio Link: " name="design_studio_link" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" htmlType="confirm" style={{ marginTop: '15px', }}>
              Confirm
            </Button>

            <div style={{ float: 'right',  marginTop: '18px', }}>
              <span style={{ marginRight: '10px', }}>Auto Submit</span>
              <Switch defaultChecked onChange={(checked) => {
                console.log(`switch to ${checked}`);
              }} />
            </div>

          </Form.Item>
        </Form>



      </div>

    </div>


  </div>

);


export default ProjectProfile;










