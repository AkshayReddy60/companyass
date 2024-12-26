import React, { useState } from "react";
import "./App.css";
import companylogo from "./assets/companylogo.png";
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemText, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsIcon from "@mui/icons-material/Settings";
import PhoneIcon from "@mui/icons-material/Phone";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Sider = ({ isMobile, open, toggleDrawer }) => (
  <>
    {isMobile ? (
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <SidebarContent />
      </Drawer>
    ) : (
      <Box sx={{ width: "15%", background: "#fff", height: "100vh", padding: "1rem", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <SidebarContent />
      </Box>
    )}
  </>
);

const SidebarContent = () => (
  <>
    <img src={companylogo} alt="comlogo" className="piccc" />
    <List>
      <ListItem button className="cooooo">
        <HomeIcon className="iccc" />
        <ListItemText primary="Repositories" />
      </ListItem>
      <ListItem button className="cooooo">
        <CodeIcon className="iccc" />
        <ListItemText primary="AI Code Review" />
      </ListItem>
      <ListItem button className="cooooo">
        <CloudQueueIcon className="iccc" />
        <ListItemText primary="Cloud Security" />
      </ListItem>
      <ListItem button className="cooooo">
        <LibraryBooksIcon className="iccc" />
        <ListItemText primary="How to Use" />
      </ListItem>
      <ListItem button className="cooooo">
        <SettingsIcon className="iccc" />
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
    <Box sx={{ position: "absolute", bottom: "2rem", left: "1rem" }}>
      <Button variant="text" sx={{ color: "#6c757d" }}>
        <PhoneIcon className="iccc" /> Support
      </Button>
      <br />
      <Button variant="text" sx={{ color: "#6c757d" }}>
        <LogoutIcon className="iccc" /> Logout
      </Button>
    </Box>
  </>
);

const Repository = () => (
  <div className="hellloo">
    <Card className="cooo">
      <CardContent>
        <div className="bside">
          <div className="res">
            <h3 className="jjjj">Repositories</h3>
            <p className="pppp">33 total repositories</p>
          </div>
          <div className="lefsi">
            <Button>Refresh All</Button>
            <Button>Add Repository</Button>
          </div>
        </div>
        <div className="sear">
          <TextField
            variant="outlined"
            placeholder="Search Here"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            fullWidth
          />
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
      <div className="flll">
        <h4 className="title">design-system</h4>
        <p className="status">Public</p>
      </div>
      <div className="downfll">
        <p className="language">
          React<span className="dottt"></span>
        </p>
        <p className="size">7320 KB</p>
        <p className="updated">Updated 1 day ago</p>
      </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
      <div className="flll">
        <h4 className="title">design-system</h4>
        <p className="status">Public</p>
      </div>
      <div className="downfll">
        <p className="language">
          Javascript<span className="dottt"></span>
        </p>
        <p className="size">5871 KB</p>
        <p className="updated">Updated 2 day ago</p>
      </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
      <div className="flll">
        <h4 className="title">design-system</h4>
        <p className="status">Public</p>
      </div>
      <div className="downfll">
        <p className="language">
          Python<span className="dottt"></span>
        </p>
        <p className="size">4521 KB</p>
        <p className="updated">Updated 5 day ago</p>
      </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
      <div className="flll">
        <h4 className="title">design-system</h4>
        <p className="status">Public</p>
      </div>
      <div className="downfll">
        <p className="language">
          Swift<span className="dottt"></span>
        </p>
        <p className="size">3096 KB</p>
        <p className="updated">Updated 3 day ago</p>
      </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
      <div className="flll">
        <h4 className="title">design-system</h4>
        <p className="status">Public</p>
      </div>
      <div className="downfll">
        <p className="language">
          Java<span className="dottt"></span>
        </p>
        <p className="size">6210 KB</p>
        <p className="updated">Updated 6 day ago</p>
      </div>
      </CardContent>
    </Card>
    
  </div>
);

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => setOpen(state);

  window.addEventListener("resize", () => setIsMobile(window.innerWidth <= 768));

  return (
    <Box sx={{ display: "flex" }}>
      {isMobile && (
        <IconButton onClick={toggleDrawer(true)} sx={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 1200 }}>
          <MenuIcon />
        </IconButton>
      )}
      <Sider isMobile={isMobile} open={open} toggleDrawer={toggleDrawer} />
      <Repository />
    </Box>
  );
}

export default App;
