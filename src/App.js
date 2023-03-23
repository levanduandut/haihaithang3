import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  TeamOutlined,
  DesktopOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Avatar, Space, theme } from "antd";
import { useState } from "react";
import "./App.scss";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Generality", "1", <PieChartOutlined />),
  getItem("List Employee", "2", <DesktopOutlined />),
  getItem("Salary", "sub1", <UserOutlined />, [
    getItem("Table Salary", "3"),
    getItem("Individual Salary", "4"),
    getItem("Salary Step", "5"),
  ]),
  getItem("Revenue and expenditure", "sub2", <TeamOutlined />, [
    getItem("Revenue", "6", <PieChartOutlined />),
    getItem("Expenditure", "7", <DesktopOutlined />),
  ]),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          className="div-back"
          style={{
            height: 32,
            margin: 16,
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="Header"
          style={{
            padding: 0,
          }}
        >
          <div className="header">
            <div className="title-header">
              HỆ THỐNG QUẢN LÍ NHÂN SỰ NOVA SQUARE
            </div>
            <div className="icon-header">
              <QuestionCircleOutlined />
              <BellOutlined />
              <AppstoreOutlined />

              <span>
                <Avatar
                  style={{ backgroundColor: "#87d068", textAlign: "center" }}
                  
                />
              </span>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            NOVA SQUARE
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};
export default App;
