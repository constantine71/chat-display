import React, { useCallback } from "react";
import { Menu, Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Message = ({ message }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { msgId } = message;
  const { type, text, imgUrl } = message.msgContent;
  const initMessage = () => {
    const message = {
      msgId: "",
      msgContent: {},
    };
    message.msgId = uuidv4();
    message.msgContent.user = user;
    return message;
  };
  const send = useCallback(
    (m) => dispatch({ type: "ADD_MESSAGE", payload: m }),
    [dispatch]
  );
  const userName = user.userInfo.userName;
  const recallNotification = () => {
    const message = initMessage();
    message.msgContent.type = "notification";
    message.msgContent.notification = `${userName} recalled a message`;
    send(message);
  };
  const messageToShow =
    type === "text" ? (
      <p>{text}</p>
    ) : (
      <img className="message-img" src={imgUrl} alt="not found"></img>
    );
  const recall = useCallback(
    (id) => dispatch({ type: "REMOVE_MESSAGE", payload: id }),
    [dispatch]
  );
  const recallMessageHandler = (msgId) => {
    console.log(msgId + "is recalled");
    recall(msgId);
    recallNotification();
  };
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => recallMessageHandler(msgId)}>
        Recall Message
      </Menu.Item>
      <Menu.Item key="2">Other Functions</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["contextMenu"]}>
      <div className="message">{messageToShow}</div>
    </Dropdown>
  );
};

export default Message;
