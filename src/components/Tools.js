import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Fade from "@material-ui/core/Fade";
import Zoom from "@material-ui/core/Zoom";

const tools = [
    { name: "Go",           logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Node.js",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "React",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PostgreSQL",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Redis",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "TigerBeetle",  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1feMJd0gCA4lC9quOKh08PqcwJQvjAPDQQ&s" },
    { name: "FusionAuth",   logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDBKX9Mz_f-7ArY0rCngVeLdMznkAJqG9mA&s" },
    { name: "Docker",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    background: "radial-gradient(circle at top left, #1e1e1e, #121212)",
    minHeight: "100vh",
    padding: theme.spacing(4, 2),
  },
  heading: {
    color: "#ff6347",
    textAlign: "center",
    marginBottom: theme.spacing(4),
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  card: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(8px)",
    borderRadius: theme.spacing(2),
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    '&:hover': {
      transform: "translateY(-8px)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
    },
    padding: theme.spacing(2),
    textAlign: "center",
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: "0 auto",
    filter: "drop-shadow(0 0 4px rgba(255,99,71,0.7))",
  },
  toolName: {
    marginTop: theme.spacing(1),
    color: "#fafafa",
    fontWeight: 500,
  },
}));

const Tools = () => {
  const classes = useStyles();

  return (
    <Fade in timeout={800}>
      <Box className={classes.root}>
        <Typography variant="h5" className={classes.heading}>
          Tools & Technologies
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {tools.map((tool, idx) => (
            <Grid item xs={6} sm={4} md={3} key={tool.name}>
              <Zoom in style={{ transitionDelay: `${idx * 100 + 300}ms` }} timeout={500}>
                <Card className={classes.card} elevation={0}>
                  <CardContent>
                    <Avatar src={tool.logo} alt={tool.name} className={classes.avatar} />
                    <Typography variant="subtitle1" className={classes.toolName}>
                      {tool.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>
  );
};

export default Tools;
