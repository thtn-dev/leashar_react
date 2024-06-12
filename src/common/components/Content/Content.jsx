import { Container, ThemeProvider, createTheme } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './Content.module.scss';

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 900px)': {
            maxWidth: styles['min-width-content'],
          },
        },
      },
    },
  },
});

function Content({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        {children}
      </Container>
    </ThemeProvider>
  );
}

export default Content;
