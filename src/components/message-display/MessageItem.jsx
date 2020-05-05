import React from "react";
import { Avatar, Row, Col } from "antd";
import { userOutlined } from "@ant-design/icons";
import Message from "./Message";

const MessageItem = ({ message }) => {
  const userAvatarImage = message.msgContent.user.userInfo.userAvatarUrl;
  return (
    <div className="message-item">
      <Row className="message-item-row" gutter={[4, 4]}>
        <Col className="message-item-avatar">
          <Avatar
            shape="square"
            size="large"
            icon={<userOutlined />}
            src={userAvatarImage}
          />
        </Col>
        <Col className="message-item-message" span={14}>
          <Message message={message} />
        </Col>
      </Row>
    </div>
  );
};

export default MessageItem;
