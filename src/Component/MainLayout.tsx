import * as React from 'react';
import { Layout, Icon } from 'antd';
import PageFooter from './Footer';
import PageHeader from './Header';

const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends React.Component<any, any> {
  render() {
    return (
      <Layout>
        <Header>
          <PageHeader />
        </Header>
        <Content>
        </Content>
        <Footer>
          <PageFooter />
        </Footer>
      </Layout>
    );
  }
}

export default MainLayout;