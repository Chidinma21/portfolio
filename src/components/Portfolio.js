import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import coinprofile from "../images/coinprofile.jpg";
import partna from "../images/partna.jpg";
import atlaxchange from "../images/atlax.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: theme.spacing(0.5, 2),
  },
  gridItem: {
    display: 'flex',
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '85%',
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  media: {
    height: 140,
  }
}));

const projects = [
  {
    name: "Coinprofile",
    description: (
      <>
        Led the design and implementation of a USD card issuing service.<br/>
        Contributed to implementing microservice architecture to power KYC and payment workflows.<br/>
        Integrated multiple identity‑provider APIs.<br/><br/>
        <strong>Tech Stack:</strong> Node.js · Express · MongoDB · Docker
      </>
    ),    
    image: coinprofile,
    link: "https://coinprofile.com/",
  },
  {
    name: "Partna",
    description: (
      <>
        Built RESTful APIs, authorization and authentication flows to support dashboard data ingestion and secure merchant authentication.<br/>
        Designed real‑time analytics endpoints, optimized database queries, and layered Redis caching for sub‑100ms lookups, improving response times.<br/>
        Integrated TigerBeetle transaction database to ensure atomic, high‑throughput ledger consistency across payment flows.<br/><br/>
        <strong>Tech Stack:</strong> Go · TigerBeetle · Postgres · Redis · Docker
      </>
    ),
    image: partna,
    link: "https://getpartna.com/",
  },
  {
    name: "Atlaxchange",
    description: (
      <>
        Collaborated on the development and scaling of core fiat on‑ramp/off‑ramp services handling millions in monthly volume.<br/>
        Established uniform error‑handling patterns and CI‑driven unit tests, enhancing reliability of external integrations.<br/>
        Integrated multiple identity‑provider APIs.<br/><br/>
        <strong>Tech Stack:</strong> Go · PostgreSQL · Docker
      </>
    ), 
    image: atlaxchange,
    link: "https://www.atlaxchange.com/",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(project.link, '_blank')}>
                  Visit website
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
