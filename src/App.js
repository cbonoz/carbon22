import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Avatar, Button, Dropdown, Layout, Menu, Select, Spin } from "antd";

import './App.css';
import { Home } from "./components/Home";
import {
  ScanOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

import { About } from "./components/About";

import 'antd/dist/antd.css';
import logo from "./assets/logo_trans.png";
import "@ant-design/flowchart/dist/index.css";

const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;

function App() {
  const navigate = useNavigate()

  // const height = window.innerHeight - 120;

  
  return (
    <div className="App">
      {/* TODO: header bar */}

      <Layout>
        <Header>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['/carbon-map']}
            selectedKeys={[window.location.pathname]}
          >
            <Menu.Item key={0}>
              <img
                src={logo}
                className="header-logo pointer"
                onClick={() => navigate("/")}
              />
               
            </Menu.Item>

            <Menu.Item key={'/carbon-map'} onClick={() => navigate("/carbon-map")}>
              <ScanOutlined /> Carbon Map
            </Menu.Item>

            <Menu.Item key={'/about'} onClick={() => navigate("/about")}>
              <QuestionCircleOutlined /> About
            </Menu.Item>

            </Menu>
            </Header>
          <Content>
            <div style={{ margin: '0 auto', paddingLeft: '60px', paddingRight: '60px' }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carbon-map" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
              </Routes>
            </div>
          </Content>

          <Footer>
            <hr/>
            Built for the <a href="https://taikai.network/gsf/hackathons/carbonhack22">TaikAI CarbonHack 2022</a> hackathon. CarbonOracle &copy;2022
          </Footer>
        </Layout>
      </div>
  );
}

export default App;
