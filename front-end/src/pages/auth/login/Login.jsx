import React, {useState} from "react";
import './Login.scss';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // login logic here (e.g., API call, authentication)
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
      <FormControl sx={{ m: 1, width: '75%', marginTop:'35px'}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email *</InputLabel>
          <OutlinedInput
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            id="outlined-adornment-email"
            type='text'
            label="Email"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '75%', marginBottom:'8px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
          <OutlinedInput
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <div className="forgotPassword">
          <Link className="link" to='/contactus'>Forgot password?</Link>
        </div>
          <button className="login-button" onClick={handleLogin}>
              Login
          </button>
        <div>
          New user? <Link className="link" to='/signup'>Sign up here</Link>
        </div>
      </div>
    </div>  
    
  );
}
export default Login

 