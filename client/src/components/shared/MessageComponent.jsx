import { Typography } from "@mui/material";
import React, { memo } from "react";
import { lightBlue } from "../../constants/color";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender._id === user._id;
  return (
    <>
      <div
        style={{
          alignSelf: sameSender ? "flex-end" : "flex-start",
          backgroundColor: "white",
          color: "black",
          borderRadius: "5px",
          padding: "0.5rem",
          width: "fit-content",
        }}
      >
        {!sameSender && (
          <Typography color={lightBlue} fontWeight={"600"} variant="caption">
            {sender.name}
          </Typography>
        )}
        {content && <Typography>{content}</Typography>}
      </div>
    </>
  );
};

export default memo(MessageComponent);
