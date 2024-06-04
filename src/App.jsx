import React, { useMemo } from 'react';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import '@/App.css'
import { useSelector } from 'react-redux';

function App() {
  let userRole = useSelector(state => state?.auth?.role)

  let userType = useMemo(() => {
    return userRole || ''
  }, [userRole])

  return (
    <div className="bg-[#FDFBFE] font-figtree">
      <RouterProvider router={router(userType)} />
    </div>
  );
}


export default App;
