import './App.css';
import AppRouter from "./app-router/AppRouter"
import PortfolioProvider from './contexts/PortfolioContexts';

function App() {
  return (
    <PortfolioProvider>
      <AppRouter/>
      <div>Hello</div>
    </PortfolioProvider>
        );
}
export default App;
