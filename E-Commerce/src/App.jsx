import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import './index.css';
import { CartProvider } from './pages/Cart/Context/CartContext';
import { AllRoutes } from './routes/Allroutes';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        {/* <Header /> */}
        <AllRoutes />
        {/* You can place Cart component here or in AllRoutes */}

        {/* <Footer /> */}
      </CartProvider>

    </QueryClientProvider>
  );
}

export default App;
