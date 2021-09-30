import React from "react";
import Datatable from "./Datatable.js";
// import App from "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // BrowserRouter,
} from "react-router-dom";
import Login from "./login.js";
import About from "./about.js";
// import Navbar from './navbar.js'
// import Table from "./table.js";
// import { data } from "./data.js";
// import { columns } from "./colums.js";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Side extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Router>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3"> Ahmad </Menu.Item>
                <Menu.Item key="4"> Haider </Menu.Item>
                <Menu.Item key="5"> Daniyal </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="NavBar">
                <Menu.Item key="6">
                  
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="7">
                  
                  <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="8">
                  
                  <Link to="/about">ABout</Link>
                </Menu.Item>
                <Menu.Item key="9">
                  
                  <Link to="/contact">Contact</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="10" icon={<FileOutlined />}>
                Files
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Login</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <div>
                  <Switch>
                    <Route exact path="/login">
                      <Login />
                    </Route>
                    <Route exact path="/about">
                      <About />
                    </Route>
                    <Route exact path="/contact"></Route>
                  </Switch>
                </div>
                <br />
                {/* <nav>
        <Link  to="/login">Add into table </Link> <br/><br/>
        
      </nav> */}
                <Datatable/>
                {/* <Table columns={columns} data={data} /> */}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              DH-Design@copyright2021
            </Footer>
          </Layout>
        </Router>
      </Layout>
    );
  }
}

export default Side;
