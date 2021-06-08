import React from "react";

import { Message, MessageVideo } from "../components";

export default {
  title: "Chat",
  component: MessageVideo,
};

const Template = (args) => (
  <div style={{ maxWidth: "40%" }}>
    <Message {...args}>
      <MessageVideo {...args} />
    </Message>
  </div>
);

export const Video = Template.bind({});

Video.argTypes = {
  onClick: { action: "clicked" },
};

Video.args = {
  self: true,
  caption: "Video caption !!",
  video: "https://datasalesio-imagens.s3.amazonaws.com/video-example.mp4",
};
