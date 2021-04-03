import './App.css';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import { Avatar, Box, Button, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { CheckBox } from '@material-ui/icons';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// import NaverIcon from './NaverLoginIcon.png' // png는 확대하면 깨짐
import NaverIcon from './icons/NaverLoginIcon.svg'

function Copyright() {
  return (
    <Typography>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com">
        Your Website
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    '&:before': {
      content: "''",
      width: '24px',
      height: '24px',
      background: `url(${NaverIcon})`,
      backgroundSize: '100% 100%'
    }
  },
  root: {
    width: '100%',
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'blue',
    },
    '&:focus': {
      backgroundColor: 'green',
    },
    '&$disabledTest': {
      backgroundColor: 'grey'
    }
  },
  disabledTest: {
    backgroundColor: 'grey'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"    // 테두리 있는 상자 형태
            margin="normal"   // margin top 16px, bottom 8px)
            required      // 필수 입력 사항
            fullWidth     // width : 100%
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"    // 자동 완성 띄우기
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="password"
            name="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<CheckBox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <Button
        variant="contained"
        classes={{
          contained:classes.root,
          disabled:classes.disabledTest,
        }}
        disabled={true}
      >
        버튼 테스트
      </Button>
    </Container>

  )
};

export default App;