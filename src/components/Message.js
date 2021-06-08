import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

function Message({
  children,
  self = true,
  bgColorSelf = "#dcf8c6",
  bgColorNoSelf = "#fff",
}) {
  return (
    <Box
      flex="0 0 auto"
      display="flex"
      marginTop="8px"
      paddingLeft={self ? "20%" : "0px"}
      marginBottom="8px"
      paddingRight={self ? "0px" : "20%"}
      justifyContent={self ? "flex-end" : "flex-start"}
      style={{
        opacity: 1,
        transform: "none",
        transition: self
          ? "opacity 217ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 145ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
          : "opacity 257ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 171ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }}
    >
      <Box
        color="rgba(0, 0, 0, 0.45)"
        minWidth="0%"
        boxShadow="0 1px .5px rgba(0, 0, 0, 0.13)"
        padding="3px"
        borderRadius="7.5px"
        bgcolor={self ? bgColorSelf : bgColorNoSelf}
        style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
      >
        {children}
      </Box>
    </Box>
  );
}

Message.propTypes = {
  children: PropTypes.any.isRequired,
  self: PropTypes.bool,
  bgColorSelf: PropTypes.string,
  bgColorNoSelf: PropTypes.string,
};

export default Message;
