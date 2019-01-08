import React from 'react'
import { Link } from 'gatsby'
import { Layout, Menu, Icon, Card, Row, Col } from 'antd'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Image from '../components/image'
import SEO from '../components/seo'
import { FormField } from '../components/FormField'


const { Header, Content, Footer, Sider } = Layout
const StyledLogo = styled.div`
  color: #5d5a5a;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
`
const headerStyle = css`
  color: #5d5a5a;
  margin-top: 10px;
`
const CardStyle = css`
  background-color: #FFF9F;
`
const layout = {
    xs: { span: 20, offset: 2 },
    sm: { span: 18, offset: 3 },
    md: { span: 18, offset: 3 },
    lg: { span: 12, offset: 6 }
};
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Sider
      theme="light"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <StyledLogo>Logo here</StyledLogo>
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="home" />
          <span className="nav-text">Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="read" />
          <span className="nav-text">Articles</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="contacts" />
          <span className="nav-text">Contact</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout >
      <Header style={{ padding: 0, textAlign: 'center' }}>
        <h3 css={headerStyle}>Advanced Daily Calorie Intake Calculation</h3>
      </Header>
       <Content style={{ marginTop: '42px' }}>
         <Col {...layout}>
        <Card title="Advanced Daily Calorie Intake Calculation" css={CardStyle}>
          <FormField />
        </Card>
        </Col> 
        <Link to="/page-2">Go page-2</Link>

      </Content> 
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
)

export default IndexPage
