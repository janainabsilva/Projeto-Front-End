import React from "react";
import "../Login/login.css";
import Box from "@mui/material/Box";
import logo from "../../assets/logologin.png";
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Login = () => {
    return(
        <>
        
        <Box>

        <img className="logo" src={logo} alt=""></img>
        <Typography variant="h1" fontSize={40} fontFamily={"'Inter', sans-serif"} color={"#003BE5"} marginTop={-22} display={"flex"} marginLeft={10} position={"fixed"}>ETE</Typography>
        <Typography variant="h1" fontSize={30} fontFamily={"'Inter', sans-serif"} color={"#2FC18C"} display={"flex"} marginTop={-12} marginLeft={10} position={"fixed"}>Cícero Dias</Typography>
        <TextField
          label="Email"
          id="outlined-size-small"
          size="small"
          style={{ marginTop: '70px', position:"fixed"}}
        />
        <TextField
          label="Senha"
          id="outlined-size-small"
          size="small"
          style={{marginTop:"170px", position:"fixed"}}
        />

        <Stack spacing={2} direction="row">
        <Button variant="contained" style={{marginTop:"270px", width:"300px"}}>Entrar</Button>
        </Stack>
        </Box>
        </>
        
    )
}
export default Login;