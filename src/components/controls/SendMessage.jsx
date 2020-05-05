import React, { useCallback } from "react";
import { Input, Form, Button } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

const SendMessage = ({ user }) => {
  const dispatch = useDispatch();

  const initMessage = () => {
    //can generate and insert id and time at back-end
    //we only need to use id in this project
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

  const sendMessage = (values) => {
    const message = initMessage();
    message.msgContent.type = "text";
    message.msgContent.text = values.text;
    send(message);
  };

  const sendImage = (values) => {
    const message = initMessage();
    message.msgContent.type = "image";
    message.msgContent.imgUrl = values.imgUrl;
    send(message);
  };

  const userName = user.userInfo.userName;

  //there is no group exist  just check notification works
  //so do not check if join/leave action is valid or not
  // thus a person can join/leave multiple times
  const joinGroup = () => {
    const message = initMessage();
    message.msgContent.type = "notification";
    message.msgContent.notification = `${userName} joins the group`;
    send(message);
  };
  const leaveGroup = () => {
    const message = initMessage();
    message.msgContent.type = "notification";
    message.msgContent.notification = `${userName} has left the group`;
    send(message);
  };

  return (
    <div>
      <p>send message</p>
      <Form onFinish={sendMessage}>
        <Form.Item
          name={["text"]}
          rules={[{ required: true, message: "please enter your message" }]}
        >
          <Input.TextArea placeholder="enter your message here" rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            SEND MESSAGE
          </Button>
        </Form.Item>
      </Form>

      <Form onFinish={sendImage}>
        <Form.Item
          name={["imgUrl"]}
          rules={[{ required: true, message: "please enter a image's url" }]}
        >
          <Input placeholder="enter image url here" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            SEND IMAGE
          </Button>
        </Form.Item>
      </Form>
      <Button onClick={joinGroup}>Join Group</Button>
      <Button onClick={leaveGroup}>Leave Group</Button>
    </div>
  );
};

export default SendMessage;
