import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Avatar from "@material-ui/core/Avatar";

const mediumSvg = "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/medium.svg";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    height: 55,
  },
  iconRoot: {
    '& .MuiSvgIcon-root': {
      color: 'tan',
      fontSize: '1.5rem',
      transition: 'all 0.2s',
    },
    '&:hover .MuiSvgIcon-root': {
      color: 'tomato',
      fontSize: '1.8rem',
    }
  },
  mediumAvatar: {
    width: 24,
    height: 24,
    transition: 'all 0.2s',
    backgroundColor: 'tan',
    WebkitMask: `url(${mediumSvg}) no-repeat center`,
    mask: `url(${mediumSvg}) no-repeat center`,
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    '&:hover': {
      backgroundColor: 'tomato',
      width: 28,
      height: 28,
    }
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    textDecoration: 'none',
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer} showLabels>
      <BottomNavigationAction
        className={classes.iconRoot}
        icon={
          <a
            href="https://github.com/chidinma21"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            <GitHubIcon />
          </a>
        }
      />
      <BottomNavigationAction
        className={classes.iconRoot}
        icon={
          <a
            href="https://www.linkedin.com/in/chidinmaonuora1/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            <LinkedInIcon />
          </a>
        }
      />
      <BottomNavigationAction
        className={classes.iconRoot}
        icon={
          <a
            href="https://medium.com/@chidinma21"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            <Avatar className={classes.mediumAvatar} />
          </a>
        }
      />
    </BottomNavigation>
  );
};

export default Footer;
