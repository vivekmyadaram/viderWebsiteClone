import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
export default function FolderList() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        backgroundColor: "transparent",
        color: "#FFFFFF",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Support@vider.in" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CallIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="90000000009 91119222339" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonPinCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="LeeWay WorkSpace Kondapur" />
      </ListItem>
    </List>
  );
}
