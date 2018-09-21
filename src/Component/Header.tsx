import * as React from 'react';
import { Menu, Button } from 'antd';
import './Header.css';
import 'antd/dist/antd.min.css';
import logoPng from './logo.png';

export default function Header(props:any) : React.ReactElement<any> {
  return (
    <div>
      <div className="logo-wrapper">
        <a href="/">
          <img src={logoPng} />
        </a>
      </div>
      <Menu className="header-menu" mode="horizontal">
        <Menu.Item key="1"><a href="/">HOME</a></Menu.Item>
        <Menu.Item key="2"><a href="/tracks">TRACKS</a></Menu.Item>
        <Menu.Item key="3"><a href="/projects">PROJECTS</a></Menu.Item>
        <Menu.Item key="4"><a href="/donations">DONATIONS</a></Menu.Item>
      </Menu>
      <div className="button-wrapper">
        <Button type="primary" href="/contact-us" >Contact Us</Button>
      </div>
    </div>
  )
}

