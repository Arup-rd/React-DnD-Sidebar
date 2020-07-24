import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import Sidebar from "./component/sidebar";

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={8}>
          <Sidebar />
        </Col>
        <Col span={16}>col-12</Col>
      </Row>
    </div>
  );
}

export default App;
