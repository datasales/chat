import React from "react";

import { Message, MessageAudio } from "../components";

export default {
  title: "Chat",
  component: MessageAudio,
};

const Template = (args) => (
  <div style={{ maxWidth: "40%" }}>
    <Message {...args}>
      <MessageAudio {...args} />
    </Message>
  </div>
);

export const Voice = Template.bind({});

Voice.argTypes = {
  onPlay: { action: "clicked" },
  onPause: { action: "clicked" },
  self: { description: "Set this variable in the Box and Voice component" },
};

Voice.args = {
  self: true,
  audio:
    "https://file-examples-com.github.io/uploads/2017/11/file_example_OOG_1MG.ogg",
  avatar:
    "https://observatoriodocinema.uol.com.br/wp-content/uploads/2018/08/Goku.jpg",
};
