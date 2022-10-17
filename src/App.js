import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Avatar, Button, Dropdown, Layout, Menu, Select, Spin } from "antd";

import 'antd/dist/antd.css';
import './App.css';
import { Home } from "./components/Home";
import {
  ScanOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

import logo from "./assets/logo_white.png";
import { About } from "./components/About";

const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      {/* TODO: header bar */}

      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
          >
            <Menu.Item key={0}>
              <img
                src={logo}
                className="header-logo pointer"
                onClick={() => navigate("/")}
              />
               
            </Menu.Item>

            <Menu.Item key={'/map'} onClick={() => navigate("/map")}>
              <ScanOutlined /> Map
            </Menu.Item>

            <Menu.Item key={'/about'} onClick={() => navigate("/about")}>
              <QuestionCircleOutlined /> About
            </Menu.Item>

            </Menu>
            </Header>
          <Content>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/maps" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
              </Routes>
          </Content>
        </Layout>
      </div>
  );
}

export default App;
