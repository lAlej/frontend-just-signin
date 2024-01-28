"use client";

import { Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
      item
      xs={12}
    >
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"center"}
        width={{xs: "90vw", sm: "60vw", lg: "40vw", xl: "30vw"}}
        height={{xs: "80vh", md: "70vh"}}
        borderRadius={3}
        border={"1px solid #FFF"}
        gap={5}
        padding={2}
        direction={"column"}
      >
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography>Hi, this is a simple page{" :)"} </Typography>
          <Typography>Just Sign-in or Register </Typography>
        </Grid>
        <Button
          style={{
            color: "#BBE1FA",
            borderColor: "#FFF",
          }}
          variant="outlined"
          onClick={() => router.push("/login")}
        >
          Sign-in
        </Button>
        <Button
          style={{
            color: "#BBE1FA",
            borderColor: "#FFF",
          }}
          variant="outlined"
          onClick={() => router.push("/register")}
        >
          Register
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
  );
}
