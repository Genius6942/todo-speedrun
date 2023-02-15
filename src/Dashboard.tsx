import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "./lib/firebase";
import TaskList from "./TaskList";
export default function Dashboard() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task app (built quick)
          </Typography>
          <Button color="inherit" onClick={() => signOut(auth)}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography variant="h1" component="div" textAlign="center" mt={3}>
          My todo list
        </Typography>{" "}
        <Box sx={{ display: "inline-block" }}>
          <TaskList />
        </Box>
      </Box>
    </>
  );
}
