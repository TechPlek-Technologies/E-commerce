import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

// const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    handleClose();
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Ask Question</DialogTitle>
      <div className="form-container">
      <div className="ratting-form">
      <form onSubmit={handleSubmit} style={{ padding: '0px 20px 20px' }}>
        <div className="rating-form-style form-submit">
          <textarea
            name="Your Review"
            placeholder="Enter Query Here"
            style={{ width: '100%', height: '100px' }}
            defaultValue={""}
          />
          <input type="submit"  className="form-submit1" defaultValue="Send" style={{ marginTop: '10px' }} />
        </div>
      </form>
      </div>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function VideoPlayerWithDialog(video) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(false);
  const [showShareButtons, setShowShareButtons] = useState(false);
// console.log("video",video);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleShareButtonClick = () => {
    setShowShareButtons(!showShareButtons);
  };

  return (
    <div style={{ position: 'relative'}}>
      <ReactPlayer
        url={video.video.url}
        controls
        width="100%"
        height="100%"
      />
      <div className="button-container">
        <button
          className="video-btn"
          type="button"
          onClick={handleShareButtonClick}
        >
          <i className="fa fa-share-alt" />
        </button>
        <button
          className="video-btn"
          type="button"
          onClick={handleClickOpen}
        >
          <i className="fa fa-question" />
        </button>
        {showShareButtons && (
          <div className="share-buttons">
            <FacebookShareButton
              url={"/assets/Video/Video-129.mp4"}
              className="share-button"
            >
              <a className="mfp-iframe video-play1">
                <i className="fab fa-facebook-f" />
              </a>
            </FacebookShareButton>
            <TwitterShareButton
              url={"/assets/Video/Video-129.mp4"}
              className="share-button"
            >
              <a className="mfp-iframe video-play1">
                <i className="fab fa-twitter" />
              </a>
            </TwitterShareButton>
            <LinkedinShareButton
              url={"/assets/Video/Video-129.mp4"}
              className="share-button"
            >
              <a className="mfp-iframe video-play1">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </LinkedinShareButton>
          </div>
        )}
      </div>
      {/* <Button variant="outlined" onClick={handleClickOpen} style={{ position: 'absolute', bottom: 10, right: 10 }}>
        Open simple dialog
      </Button> */}
      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
