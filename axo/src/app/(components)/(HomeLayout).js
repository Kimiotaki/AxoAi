import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
export default function HomeLayout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(165deg, #000000,#1a1919,#4c484a,#272626,#000000)",
          color: "white",
          pt: 5,
          px: 4,
        }}
      >
        <AppBar
          position="relative"
          elevation={0}
          sx={{ backgroundColor: "transparent" }}
        >
          <Toolbar
            sx={{
              minHeight: "90px",
              mx: "auto",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              px: 3,
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2,
                p: 2,
                fontSize: 40,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: "22px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: "1.7rem", fontWeight: "bold" }}
            >
              Axo
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2,
                p: 2,
                fontSize: 40,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: "22px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <WidgetsOutlinedIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.2rem",
            p: 2,
          }}
        >
          <Typography variant="h4">Welcome to Axo</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}
