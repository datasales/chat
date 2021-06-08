import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Grid } from "@material-ui/core";
import { GetAppRounded } from "@material-ui/icons";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

// Function
import MyDate from "../helpers/Date";
import { formatBytes } from "../helpers/Format";

// Icons
import ExcelIcon from "../assets/icons/excel.svg";
import WordIcon from "../assets/icons/word.svg";
import PowerPointIcon from "../assets/icons/powerpoint.svg";
import { pdf as PdfIcon, file as FileIcon } from "../assets/icons/otherIcons";

// Styles
import "./styles/MessageFile.css";

const _myDate = new MyDate();

function MessageFile({
  name,
  extension,
  bytes = 0,
  onClick,
  self = true,
  file,
}) {
  const newExtension = String(extension).toUpperCase(),
    pdfRef = useRef(),
    [numPages, setNumPages] = useState(0),
    [thumbnail, setThumbnail] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function fileIcon() {
    switch (newExtension) {
      case "CSV":
      case "XLSX":
        return ExcelIcon;
      case "DOCX":
      case "DOC":
        return WordIcon;
      case "PPT":
      case "PPTX":
      case "PPTM":
        return PowerPointIcon;
      case "PDF":
        return PdfIcon;
      default:
        return FileIcon;
    }
  }
  return (
    <Box
      width="20vw"
      display="flex"
      alignItems="flex-end"
      flexDirection="column"
      padding="3px"
    >
      <Grid container style={{ cursor: "pointer" }} onClick={onClick}>
        {newExtension === "PDF" && (
          <Grid item xs={12}>
            <Box
              style={{
                backgroundImage: `url(${thumbnail})`,
                backgroundSize: "cover",
                backgroundColor: "#f0f0f0",
              }}
              borderRadius="5px 5px 0px 0px"
              height={100}
            />
            <Box hidden={true}>
              <Document
                file={{ url: file }}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page
                  canvasRef={pdfRef}
                  pageNumber={1}
                  onRenderSuccess={() =>
                    setThumbnail(pdfRef.current.toDataURL())
                  }
                />
              </Document>
            </Box>
          </Grid>
        )}
        <Grid item xs={12}>
          <Box
            display="flex"
            alignItems="center"
            bgcolor={self ? "#cfe9ba" : "#f0f0f0"}
            borderRadius={newExtension === "PDF" ? "0px 0px 5px 5px" : "5px"}
            padding="13px 19px"
            justifyContent="flex-start"
          >
            <img src={fileIcon()} alt={extension} width="35px" />
            <Typography
              noWrap
              style={{ fontSize: 14.2, flexGrow: 1, margin: "0 10px" }}
            >
              {name}
            </Typography>
            <GetAppRounded />
          </Box>
        </Grid>
      </Grid>
      <Box
        marginTop="5px"
        display="flex"
        justifyContent="space-between"
        width="100%"
        color="rgba(0, 0, 0, 0.45)"
      >
        {extension ? (
          <Box width="100%" display="flex" alignItems="center">
            {newExtension === "PDF" && (
              <Typography className="pages">
                {numPages} {numPages <= 1 ? "página" : "páginas"}
              </Typography>
            )}
            <Typography style={{ fontSize: 11, paddingRight: "3px" }}>
              {newExtension}
            </Typography>
            <Typography className="bytes">{formatBytes(bytes, 1)}</Typography>
          </Box>
        ) : (
          <span />
        )}
        <Typography style={{ fontSize: 11, paddingRight: "3px" }}>
          {_myDate.getDate("HH:mm")}
        </Typography>
      </Box>
    </Box>
  );
}

MessageFile.propTypes = {
  name: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  bytes: PropTypes.number.isRequired,
  file: PropTypes.string.isRequired,
  self: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MessageFile;
