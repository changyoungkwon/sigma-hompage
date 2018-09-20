import * as React from 'react';
import { Icon } from 'antd';
import 'antd/dist/antd.min.css';
import './Footer.css';

interface AtProps {
  content: string | React.ReactElement<any>;
}
function AtWaffle(props:AtProps) : React.ReactElement<any> {
  return (
    <a href="https://facebook.com/wafflestudio" style={{color:'rgba(0, 0, 0,.65)'}}>{props.content}</a>
  );
}

export default function Footer(props:any) : React.ReactElement<any> {
  return (
    <div className="page-footer">
      {/* navigation to go up */}
      <a className="top-nav" href="#">
        <Icon type="up"/>
      </a>
      {/* Footer comment */}
      <span>
        &copy; Copyrighted by WaffleStudio 2017&emsp;|&emsp;All Rights Reserved&emsp;|&emsp;Powered by&ensp;
          <AtWaffle content="Waffle Studio" />
      </span>
      <AtWaffle content={<Icon type="facebook" style={{float:'right', fontSize: '2em'}}/> }/>
    </div>
  );
}