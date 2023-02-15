import {
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Typography,
  Link,
  ThemeProvider,
} from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import Dashboard from "./Dashboard";
import { auth } from "./lib/firebase";
import { signInWithGoogle } from "./lib/login";
import googleLogo from "./assets/GOOG.svg";
import getTheme from "./theme";

export default function App() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <ThemeProvider theme={getTheme()}>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: "blur(10px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {!user ? (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #e0e0e0",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2, textTransform: "none", background: "white" }}
              color="inherit"
              onClick={signInWithGoogle}
            >
              <img
                src={googleLogo}
                alt="google logo"
                width={31}
                height={30}
                style={{ marginRight: 10 }}
              />
              Login with Google
            </Button>
          </Box>
        </Container>
      ) : (
        <Dashboard />
      )}
    </ThemeProvider>
  );
}
