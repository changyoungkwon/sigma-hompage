import * as React from 'react';
import { Layout, Icon } from 'antd';
import PageFooter from './Footer';

const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends React.Component<any, any> {
  render() {
    return (
      <Layout>
        <Header>

        </Header>
        <Content>
        </Content>
        <Sider collapsed={false}>

        </Sider>
        <Footer>
          <PageFooter />
        </Footer>
      </Layout>
    );
  }
}

export default MainLayout;