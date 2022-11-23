import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import AppLayout from '../components/Layout/AppLayout'

type AppProps = {
  Component: React.ElementType;
};

function MyApp({ Component }: AppProps) {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout>
        <Component/>
      </AppLayout>
    </ThemeProvider>
  )
}

export default MyApp
