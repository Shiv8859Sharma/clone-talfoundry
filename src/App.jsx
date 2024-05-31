import React from 'react';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import '@/App.css'

function App() {

  let userType =  ''
  return (
    <div className="bg-[#FDFBFE] font-figtree">
      <RouterProvider router={router(userType)} />
    </div>
  );
}


export default App;
