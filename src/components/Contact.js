import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles(() => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: "90%",
    maxWidth: "400px",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(form)).toString(),
  })
    .then(() => window.location.reload())  // ✅ Reload page after successful submission
    .catch((error) => alert(error));
};

// const [formValues, ] = useState({ name: "", email: "", message: "" });
// const isFormEmpty = !formValues.name || !formValues.email || !formValues.message;

const Contact = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justifyContent="center">
        <Box
          component="form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className={classes.form}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <Typography variant="h5" className={classes.heading}>
            Contact me...
          </Typography>

          <InputField
            fullWidth
            name="name"
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />

          <InputField
            fullWidth
            name="email"
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />

          <InputField
            fullWidth
            name="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
            className={classes.field}
          />

          <Button
            type="submit"
            variant="outlined"
            fullWidth
            endIcon={<Send />}
            className={classes.button}
            // disabled={isFormEmpty}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
