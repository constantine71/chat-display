import React from "react";
import { Avatar, Row, Col } from "antd";
import { userOutlined } from "@ant-design/icons";
import Message from "./Message";

const SelfMessageItem = ({ message }) => {
  const userAvatarImage = message.msgContent.user.userInfo.userAvatarUrl;
  return (
    <div className="self-message-item">
      <Row className="self-message-item-row" justify="end" gutter={[4, 4]}>
        <Col className="self-message-item-message" span={14}>
          <Message message={message} />
        </Col>
        <Col className="self-message-item-avatar">
          <Avatar
            shape="square"
            size="large"
            icon={<userOutlined />}
            src={userAvatarImage}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SelfMessageItem;
