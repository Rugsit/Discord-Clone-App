import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './page/HomePage.js';
import DownloadPage from './page/DownLoadPage.js';
import DiscoverPage from './page/DiscoverPage.js';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <HomePage />
  },
  {
    path: '/download',
    element: <DownloadPage />
  },
  {
    path: '/servers',
    element: <DiscoverPage />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />  
    </div>
  );
}

export default App;
