import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import './index.css';
import { AllRoutes } from './routes/Allroutes';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        {/* <Header /> */}
        <AllRoutes />
        {/* You can place Cart component here or in AllRoutes */}
        {/* <Footer /> */}
    </QueryClientProvider>
  );
}

export default App;
