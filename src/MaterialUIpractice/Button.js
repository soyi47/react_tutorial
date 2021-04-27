import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
    }
}));

function App() {
const classes = useStyles();

return (
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
    )
};

export default App;

