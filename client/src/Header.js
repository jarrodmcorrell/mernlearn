import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Header() {
  return (
    <div className="header">
        <IconButton>
            <AddCircleOutlineIcon></AddCircleOutlineIcon>
        </IconButton>
        <IconButton>
            <PersonIcon fontSize="large" ></PersonIcon>
        </IconButton>
        
    </div>

  );
}

export default Header;