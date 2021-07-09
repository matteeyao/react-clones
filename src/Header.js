import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.citypng.com/public/uploads/preview/-11595270396ei6vchptvb.png"
          alt="Tinder logo"
        />
      </Link>
      <Link to="/chats">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
