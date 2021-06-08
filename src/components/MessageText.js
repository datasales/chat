import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import MyDate from "../helpers/Date";

const _myDate = new MyDate();

function MessageText({ text }) {
  return (
    <Typography
      style={{ color: "#303030", fontSize: 14.2, padding: "3px 4px 5px 6px" }}
    >
      {text}
      <Box
        marginTop="5px"
        display="flex"
        justifyContent="flex-end"
        width="100%"
        color="rgba(0, 0, 0, 0.45)"
      >
        <Typography style={{ fontSize: 11, paddingRight: "3px" }}>
          {_myDate.getDate("HH:mm")}
        </Typography>
      </Box>
    </Typography>
  );
}

MessageText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MessageText;
