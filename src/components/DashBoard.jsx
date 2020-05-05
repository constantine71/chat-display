import React from "react";
import MessageBoard from "./message-display/MessageBoard";
import ControlPanel from "./controls/ControlPanel";
import { Row, Col } from "antd";

const DashBoard = () => {
  return (
    <div className="dash-board">
      <p>this is dashboard component</p>
      <Row justify="space-around" alingn="middle">
        <Col span={12} className="dash-columns">
          <MessageBoard />
        </Col>
        <Col span={6} className="dash-columns">
          <ControlPanel />
        </Col>
      </Row>
    </div>
  );
};

export default DashBoard;
