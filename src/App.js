import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import { Row, Col, Layout } from "antd";
import Sidebar from "./pages/sidebar";

function App() {
  const { Footer, Content } = Layout;

  return (
    <div className="App">
      <Layout>
        <Content style={{ backgroundColor: "white" }}>
          <Row>
            <Col span={6}>
              <Sidebar />
            </Col>
            <Col span={16}>col-12</Col>
          </Row>
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
