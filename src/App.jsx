import React, { memo, useMemo } from 'react';
import createRouter from './routes';
import { RouterProvider } from 'react-router-dom';
import '@/App.css'
import { useSelector } from 'react-redux';

function App() {
  let userRole = useSelector(state => state?.auth?.role)

  const userType = useMemo(() => {
    return userRole?.length ? userRole : '';
  }, [userRole]);

  const router = useMemo(() => createRouter(userType), [userType]);

  return (
    <div className="bg-[#FDFBFE] font-figtree relative w-full h-full">
      <RouterProvider router={router} />
    </div>
  );
}


export default memo(App);
