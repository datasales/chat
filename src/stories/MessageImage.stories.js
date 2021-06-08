import React from "react";

import { Message, MessageImage } from "../components";

export default {
  title: "Chat",
  component: MessageImage,
};

const Template = (args) => (
  <div style={{ maxWidth: "40%" }}>
    <Message {...args}>
      <MessageImage {...args} />
    </Message>
  </div>
);

export const Image = Template.bind({});

Image.argTypes = {
  onClick: { action: "clicked" },
  self: { description: "Set this variable in the Box component" },
};

Image.args = {
  self: true,
  caption: "Image caption !!",
  image:
    "https://observatoriodocinema.uol.com.br/wp-content/uploads/2018/08/Goku.jpg",
};
