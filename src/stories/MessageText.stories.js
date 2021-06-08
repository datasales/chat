import React from "react";
import { Message, MessageText } from "../components";

export default {
  title: "Chat",
  component: MessageText,
};

const Template = (args) => (
  <div style={{ maxWidth: "40%" }}>
    <Message {...args}>
      <MessageText {...args} />
    </Message>
  </div>
);

export const Text = Template.bind({});

Text.args = {
  self: true,
  text: "My new text example !!",
};
