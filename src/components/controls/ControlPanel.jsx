import React from "react";
import { Divider } from "antd";
import SendMessage from "./SendMessage";

const ControlPanel = () => {
  const otherUser = {
    userId: "user2",
    userInfo: {
      userName: "Jane Roe",
      userAvatarUrl:
        "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg",
    },
  };
  const localUser = {
    userId: "user1",
    userInfo: {
      userName: "John Doe",
      userAvatarUrl:
        "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg",
    },
  };
  return (
    <div className="control-panel">
      <h2>control panel</h2>
      <Divider
        orientation="left"
        style={{ color: "#333", fontWeight: "normal" }}
      >
        Friend Operations
      </Divider>
      <SendMessage user={otherUser} />
      <Divider
        orientation="left"
        style={{ color: "#333", fontWeight: "normal" }}
      >
        Self Operations
      </Divider>
      <SendMessage user={localUser} />
    </div>
  );
};

export default ControlPanel;
