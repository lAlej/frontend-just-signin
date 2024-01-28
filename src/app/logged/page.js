"use client";

import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { getUser, updateInfo } from "../api/route";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { validateForm } from "../customFunctions/validateForm";

export default function Game() {
  const router = useRouter();

  const [dataUser, setDataUser] = React.useState();
  const [newDataUser, setNewDataUser] = React.useState();
  const [loaded, setLoaded] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);

  const closeSession = () => {
    window.localStorage.removeItem("LoggedId");
    router.push("/");
  };

  const updateDataUser = async () => {
    const id = JSON.parse(window.localStorage.getItem("LoggedId"));

    const validate = await validateForm(newDataUser);

    if(!validate.result) {
      return toast.error(validate.message)
    }
    

    await updateInfo(newDataUser, id);

    setIsEdit(false);

    getData();
  };

  const dataSetter = (i, type) => {
    setNewDataUser((prev) => {
      let data = { ...prev };

      data = {
        ...data,
        [type]: i,
      };

      return data;
    });
  };

  const getData = React.useCallback(async () => {
    const id = JSON.parse(window.localStorage.getItem("LoggedId"));


    const data = await getUser(id);

    if (!data || data.length === 0) {
      return router.push("/");
    }

    setDataUser(data[0]);
    setNewDataUser(data[0]);
    setLoaded(true);
  }, [router]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {loaded && !isEdit && (
        <>
          <Grid
            container
            item
            xs={12}
            alignItems={"center"}
            justifyContent={"center"}
            style={{ width: "100vw", height: "95vh" }}
            padding={3}
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
              height={"auto"}
              border={"1px solid #FFF"}
              style={{padding: "20px 0"}}
            >
              <Grid
                container
                item
                xs={12}
                textAlign={"center"}
                gap={2}
                direction={"column"}
              >
                <Typography>
                  <b>Username: </b>
                  {dataUser.username}{" "}
                </Typography>
                <Typography>
                  <b>Full Name: </b>
                  {dataUser.first_name} {dataUser.last_name}
                </Typography>
              </Grid>
              <Grid
                container
                item
                xs={12}
                alignItems={"center"}
                justifyContent={"center"}
                direction={"column"}
                gap={2}
              >
                <Button
                  style={{
                    color: "#BBE1FA",
                    borderColor: "#FFF",
                  }}
                  variant="outlined"
                  onClick={() => setIsEdit(true)}
                >
                  Edit Profile
                </Button>
                <Button
                  style={{
                    color: "#BBE1FA",
                    borderColor: "#FFF",
                  }}
                  variant="outlined"
                  onClick={() => closeSession()}
                >
                  Logout
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
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
        </>
      )}
      {loaded && isEdit && (
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
            height={"auto"}
            direction={"column"}
            gap={4}
            border={"1px solid #FFF"}
            style={{padding: "20px 0"}}
          >
            <Typography>
              {" "}
              <b>Username: </b>
              {dataUser.username}
            </Typography>
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
              variant="outlined"
              value={newDataUser.mail}
              label="Mail"
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
              onChange={(e) => dataSetter(e.target.value, "first_name")}
              variant="outlined"
              value={newDataUser.first_name}
              label="Fisrt Name"
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
              onChange={(e) => dataSetter(e.target.value, "last_name")}
              variant="outlined"
              value={newDataUser.last_name}
              label="Last Name"
            />
            <Button
              style={{
                color: "#BBE1FA",
                borderColor: "#FFF",
              }}
              variant="outlined"
              onClick={() => updateDataUser()}
            >
              Save
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
      )}
      
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
