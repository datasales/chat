import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Fab } from "@material-ui/core";
import { PlayArrowRounded } from "@material-ui/icons";
import MyDate from "../helpers/Date";

const _myDate = new MyDate();

function MessageVideo({ video, caption, onClick }) {
  const refVideo = useRef(),
    [bgVideo, setBgVideo] = useState(""),
    [bgHeight, setBgHeight] = useState(0);

  function _GetImageVideo() {
    const canvas = document.getElementById("thumb-video"),
      canvasCtx = canvas.getContext("2d"),
      video = refVideo.current;
    setBgHeight(video.videoHeight / 3);
    canvasCtx.width = video.videoWidth;
    canvasCtx.height = video.videoHeight;
    canvasCtx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    const playImage = new Image();
    playImage.crossOrigin = "anonymous";
    playImage.src =
      "https://files-whatsapp.s3.amazonaws.com/image/396/1596475853511-floresConvite.png";
    playImage.onload = () => {
      const startX = video.videoWidth / 2 - playImage.width / 2,
        startY = video.videoHeight / 2 - playImage.height / 2;
      canvasCtx.drawImage(
        playImage,
        startX,
        startY,
        playImage.width,
        playImage.height
      );
    };

    canvas.toBlob((blob) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = async () => {
        setBgVideo(reader.result);
      };
    });
  }

  return (
    <Box maxWidth="20vw">
      <Box
        borderRadius="5px"
        style={{
          cursor: "pointer",
          backgroundImage: `url(${bgVideo})`,
          backgroundColor: "#000",
          backgroundSize: "cover",
        }}
      >
        <Box
          width="20vw"
          height={bgHeight}
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={onClick}
        >
          <Fab
            style={{ backgroundColor: "rgba(0, 0, 0, 0.35)", color: "#fff" }}
          >
            <PlayArrowRounded fontSize="large" />
          </Fab>
        </Box>
      </Box>
      {Boolean(caption) && (
        <Typography
          style={{
            color: "#303030",
            fontSize: 14.2,
            padding: "3px 4px 5px 6px",
          }}
        >
          {caption}
        </Typography>
      )}
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
      <canvas id="thumb-video" style={{ display: "none" }} />
      <video
        crossOrigin="anonymous"
        onLoadedData={() => _GetImageVideo()}
        ref={refVideo}
        src={video}
        preload="auto"
        style={{ display: "none" }}
      />
    </Box>
  );
}

MessageVideo.propTypes = {
  video: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  caption: PropTypes.string,
};

export default MessageVideo;
