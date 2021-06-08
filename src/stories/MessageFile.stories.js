import React from "react";

import { Message, MessageFile } from "../components";

export default {
  title: "Chat",
  component: MessageFile,
};

const Template = (args) => (
  <div style={{ maxWidth: "40%" }}>
    <Message {...args}>
      <MessageFile {...args} />
    </Message>
  </div>
);

export const File = Template.bind({});

File.argTypes = {
  extension: {
    options: ["csv", "xlsx", "docx", "doc", "ppt", "pptx", "pptm", "pdf"],
    control: { type: "select" },
  },
  self: { description: "Set this variable in the Box and File component" },
  onClick: { action: "clicked" },
};

File.args = {
  self: true,
  bytes: 0,
  name: "Example",
  file: "",
};
