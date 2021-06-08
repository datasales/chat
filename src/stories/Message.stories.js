import React from "react";

import { Message, MessageText } from "../components";

export default {
  title: "Chat",
  component: Message,
};

const Template = (args) => (
  <div style={{ maxWidth: "40%" }}>
    <Message {...args}>
      <MessageText text="Hello World !!" />
    </Message>
  </div>
);

export const Box = Template.bind({});

Box.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  bgColorSelf: {
    control: { type: "color" },
  },
  bgColorNoSelf: {
    control: { type: "color" },
  },
  onClick: { action: "clicked" },
};

Box.args = {
  self: true,
};
