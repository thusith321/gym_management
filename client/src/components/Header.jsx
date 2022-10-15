import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import { useStyles } from "./utils";

const Header = () => {
  const classes = useStyles();
  // const dispath = useDispatch();
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "Black",
      }}
    >
      <Toolbar>
        <div className="col-md-2 p-0">

        <Typography className={classes.font} variant="h4">
          <div className="text-center" style={{marginLeft:"-54px"}}>
            <h1 className="wozby" style={{ "fontSize": "50px", "fontFamily": "Lucida Handwriting", "color": "white" }}>Gym</h1>
          </div>
        </Typography>
        </div>

        <Box display="flex">
          <Button
            //LinkComponent={Link}
            //to="/auth"
            variant="text"
            sx={{ margin: 1, borderRadius: 1 }}
            color="inherit"
          //style={{ width: "30%" }}
          >
            Home
          </Button>
          <Button
            //LinkComponent={Link}
            //to="/auth"
            variant="text"
            sx={{ margin: 1, borderRadius: 1 }}
            color="inherit"
          //style={{ width: "30%" }}
          >
            Clients
          </Button>
          <Button
            //LinkComponent={Link}
            //to="/auth"
            variant="text"
            sx={{ margin: 1, borderRadius: 1 }}
            color="inherit"
          //style={{ width: "30%" }}
          >
            Trainers
          </Button>
          <Button
            //LinkComponent={Link}
            //to="/auth"
            variant="text"
            sx={{ margin: 1, borderRadius: 1 }}
            color="inherit"
          //style={{ width: "30%" }}
          >
            Equipment
          </Button>
          <Button
            //LinkComponent={Link}
            //to="/auth"
            variant="text"
            sx={{ margin: 1, borderRadius: 1 }}
            color="inherit"
          //style={{ width: "30%" }}
          >
            Programs
          </Button>
        </Box>

        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              // onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>

      {/* <Toolbar> */}
      {isLoggedIn && (
        <Box display="flex" marginRight="auto">
          <Tabs
            textColor="inherit"
            value={value}
            width={1000}
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              className={classes.font}
              LinkComponent={Link}
              to="/splits"
              label="All Splits"
            />
            <Tab
              className={classes.font}
              LinkComponent={Link}
              to="/mySplits"
              label="My Splits"
            />
            <Tab
              className={classes.font}
              LinkComponent={Link}
              to="/splits/add"
              label="Add Split"
            />
          </Tabs>
        </Box>
      )}
      {/* <Box display="flex" marginLeftt="auto">
          <TextField
            className={classes.font}
            margin="auto"
            variant="filled"
            label="🔍"
            sx={{
              input: {
                maxHeight: "2px",
                color: "black",
                background: "white",
                borderRadius: "20px",
              },
            }}
          />
        </Box> */}
      {/* </Toolbar> */}
    </AppBar>
  );
};

export default Header;
