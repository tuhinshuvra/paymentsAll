import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import router from './routes/Routes';
import './paymentsAllAnimation.css';
import './paymentsAllButtons.css'
import './paymentsAllText.css'
import './App.css';

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
