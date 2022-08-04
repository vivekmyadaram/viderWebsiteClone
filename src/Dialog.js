import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function FormDialog({ saveDataParent }) {
  const [open, setOpen] = React.useState(false);
  const [userInp, setUserInp] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const saveData = () => {
    saveDataParent(userInp);
    setOpen(false);
    setUserInp("");
  };
  const userTask = (e) => {
    setUserInp(e.target.value);
  };

  return (
    <div>
      <Button
        variant="outlined"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
        onClick={handleClickOpen}
      >
        ADD TASK
      </Button>
      <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Add Your Task</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Task Name Here!"
            type="text"
            fullWidth
            variant="standard"
            onChange={userTask}
            value={userInp}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveData}>ClickToAdd</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
