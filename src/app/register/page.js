"use client";

import React from "react";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateForm } from "../customFunctions/validateForm";
import { getUser, registerUser } from "../api/route";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [registerData, setRegisterData] = React.useState({
    first_name: "",
    last_name: "",
    username: "",
    pwd: "",
  });
  const [confirmPwd, setConfirmPwd] = React.useState();

  const dataSetter = (i, type) => {
    switch (type) {
      case "firstname":
        setRegisterData((prev) => {
          let newData = { ...prev };

          newData = { ...newData, first_name: i };

          return newData;
        });
        break;
      case "lastname":
        setRegisterData((prev) => {
          let newData = { ...prev };

          newData = { ...newData, last_name: i };

          return newData;
        });
        break;
      case "username":
        setRegisterData((prev) => {
          let newData = { ...prev };

          newData = { ...newData, username: i };

          return newData;
        });
        break;
      case "mail":
        setRegisterData((prev) => {
          let newData = { ...prev };

          newData = { ...newData, mail: i };

          return newData;
        });
        break;
      case "password":
        setRegisterData((prev) => {
          let newData = { ...prev };

          newData = { ...newData, pwd: i };

          return newData;
        });
        break;
    }
  };

  const handleLogin = async () => {
    const validate = await validateForm(registerData);
    const validatePwd = registerData.pwd === confirmPwd;

    if (!validate.result) {
      return toast.error(validate.message);
    }

    if (!validatePwd) {
      return toast.error("Verify password");
    }

    const res = await registerUser(registerData);

    if (res.message) {
      return toast.error("¡Error al registrar!");
    } else {
      window.localStorage.setItem("LoggedId", JSON.stringify(res.data));
      router.push("/logged");
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  const validateSession = React.useCallback(async () => {
    const id = JSON.parse(window.localStorage.getItem("LoggedId"));

    if (id) {
      router.push("/game");
    }
  }, []);

  React.useEffect(() => {
    validateSession();
  }, [validateSession]);

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
          borderRadius={3}
          border={"1px solid #FFF"}
          justifyContent={"center"}
          height={"auto"}
          style={{margin: 10}}
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
            <Typography>Register</Typography>
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
                onChange={(e) => dataSetter(e.target.value, "firstname")}
                label="First name"
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
                onChange={(e) => dataSetter(e.target.value, "lastname")}
                label="Last name"
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
                onChange={(e) => dataSetter(e.target.value, "username")}
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
                onChange={(e) => dataSetter(e.target.value, "mail")}
                label="Mail"
                variant="outlined"
                type="mail"
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
                onChange={(e) => dataSetter(e.target.value, "password")}
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
                onChange={(e) => setConfirmPwd(e.target.value)}
                type={showConfirmPassword ? "text" : "password"}
                label="Confirm password"
                variant="outlined"
                InputProps={{
                  style: {
                    width: 220,
                  },
                  endAdornment: (
                    <IconButton
                      style={{ color: "#BBE1FA" }}
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? (
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
              onClick={() => handleLogin()}
            >
              Register
            </Button>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Typography>
              NOTE: This is just a demo, so you can only register, login and
              update your data :)
            </Typography>
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
