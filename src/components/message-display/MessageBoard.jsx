import React from "react";
import MessageItem from "./MessageItem";
import { Row, Col } from "antd";
import SelfMessageItem from "./SelfMessageItem";
import NotificationMessageItem from "./NotificationMessageItem";
import { useSelector } from "react-redux";

const MessageBoard = () => {
  const localUser = useSelector((state) => state.user);
  const messages = useSelector((state) => state.messages);

  const messagesToShow = messages.map((m) => {
    const messageOwner = m.msgContent.user;
    if (m.msgContent.type === "notification") {
      return (
        <Row justify="center" gutter={[16, 16]} key={m.msgId}>
          <Col>
            <NotificationMessageItem message={m} />
          </Col>
        </Row>
      );
    }
    if (messageOwner.userId === localUser.userId) {
      return (
        <Row justify="end" gutter={[16, 16]} key={m.msgId}>
          <Col>
            <SelfMessageItem message={m} />
          </Col>
        </Row>
      );
    } else {
      return (
        <Row justify="start" gutter={[16, 16]} key={m.msgId}>
          <Col>
            <MessageItem message={m} />
          </Col>
        </Row>
      );
    }
  });
  return (
    <div id="message-board" className="message-board">
      {messagesToShow}
    </div>
  );
};

export default MessageBoard;
