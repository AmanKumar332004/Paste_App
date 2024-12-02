// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Navbar from './components/Navbar'

// const Layout = ()=>{
//     return(
//         <>
//         <Navbar />
//         <Outlet />
//         </>
//     )
// }

// export default Layout

import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This will render child routes dynamically */}
      </main>
    </>
  );
};

export default Layout;
