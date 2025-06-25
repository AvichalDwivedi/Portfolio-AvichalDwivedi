// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import User from './components/User/User.jsx'
// import Github, {githubInfoLoader} from './components/Github/Github.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />}/>
//       <Route path='about' element={<About />} />
//       <Route path='user/' element={<User />} >
//         <Route path=':userid' element={<User />} />
//       </Route>
//       <Route 
//       loader={githubInfoLoader}
//       path='github' 
//       element={<Github />} />
//       <Route path='*' element={<div>Not Found</div>} />
//     </Route>
//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Login from './components/Auth/Login.jsx'
import Signup from './components/Auth/Signup.jsx'
import Profile from './components/Auth/Profile.jsx'
import Settings from './components/Auth/Settings.jsx'
import Contact from './components/Contact/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='user/' element={<User />}>
        {/* <Route path=':userid' element={<User />} /> */}
        <Route path="/user/:username" element={<User />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github />} 
      />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='profile' element={<Profile />} />
      <Route path='settings' element={<Settings />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
