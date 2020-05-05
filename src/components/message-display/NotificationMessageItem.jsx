import React from "react";

const NotificationMessageItem = ({ message }) => {
  console.log(message.msgContent.notification);
  return (
    <div className="notification-message-item">
      <p>{message.msgContent.notification}</p>
    </div>
  );
};

export default NotificationMessageItem;
