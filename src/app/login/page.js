"use client";

import React from "react";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginUser } from "../api/route";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { validateForm } from "../customFunctions/validateForm";

export default function Login() {
  const router = useRouter();

  const [showPassword, setShowPassword] = React.useState(false);
  const [loginData, setLoginData] = React.useState();
  const [pwdData, setPwdData] = React.useState();

  const handleLogin = async () => {

    const dataToValidate = {loginData, pwdData}
    const validate = await validateForm(dataToValidate);

    if(!validate.result) {
      return toast.error(validate.message)
    }
    
    const res = await loginUser(loginData, pwdData);

    if (!res) {
      return toast.error("¡Error al iniciar sesión!");
    } else {
      window.localStorage.setItem("LoggedId", JSON.stringify(res));
      router.push("/logged");
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  const validate = React.useCallback(async () => {
    const id = await JSON.parse(window.localStorage.getItem("LoggedId"));

    if (id !== null) {
      return router.push("/game");
    }
  }, []);

  React.useEffect(() => {
    validate();
  }, [validate]);

  return (
    <>
      <Grid
        container
        item
        xs={12}
        alignItems={"center"}
        justifyContent={"center"}
        style={{ width: "100vw", height: "95vh" }}
      >
        <Grid
          container
          item
          xs={12}
          sm={8}
          md={6}
          xl={4}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={3}
          height={{xs: "90vh",xl: "50vh"}}
          border={"1px solid #FFF"}
        >
          <Grid item xs={12} style={{ padding: 10 }}>
            <Button
              style={{
                color: "#BBE1FA",
                borderColor: "#FFF",
              }}
              variant="outlined"
              onClick={() => handleBack()}
            >
              Back
            </Button>
          </Grid>
          <Grid
            container
            item
            xs={12}
            alignItems={"flex-start"}
            justifyContent={"center"}
            style={{ gap: 10, height: "90%", padding: 50 }}
          >
            <Typography>Log In</Typography>
            <Grid
              container
              item
              xs={12}
              alignItems={"center"}
              justifyContent={"center"}
              direction={"column"}
              style={{ gap: 10 }}
            >
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#FFF",
                    },
                    "&:hover fieldset": {
                      borderColor: "#FFF",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FFF",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#BBE1FA",
                  },
                  "& .MuiInputBase-input": {
                    color: "#BBE1FA",
                  },
                }}
                onChange={(e) => setLoginData(e.target.value)}
                label="Username"
                variant="outlined"
              />
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#FFF",
                    },
                    "&:hover fieldset": {
                      borderColor: "#FFF",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FFF",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#BBE1FA",
                  },
                  "& .MuiInputBase-input": {
                    color: "#BBE1FA",
                  },
                }}
                onChange={(e) => setPwdData(e.target.value)}
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="outlined"
                InputProps={{
                  style: {
                    width: 220,
                  },
                  endAdornment: (
                    <IconButton
                      style={{ color: "#BBE1FA" }}
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Button
              style={{
                color: "#BBE1FA",
                borderColor: "#FFF",
              }}
              variant="outlined"
              onClick={handleLogin}
            >
              LogIn
            </Button>
            <Grid
              item
              textAlign={"center"}
              style={{ padding: 20, marginTop: 5 }}
            >
              <Typography>
                NOTE: This is just a demo, so you can only register, login and
                update your data :)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
