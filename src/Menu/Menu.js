import React,{useState,lazy,Suspense} from 'react'
import './Menu.css'
/*import Home from '../Home'
import About from '../About'
import Contact from '../Contact'*/
import {Navigate,Route,Routes,useLocation} from 'react-router-dom'

const Home = lazy(()=>import('../Home'))
const About = lazy(()=>import('../About'))
const Contact = lazy(()=>import('../Contact'))

const Menu = () => {
  const loc = useLocation()
  console.log(loc.pathname)
  const [menuItem,setMenuItem] = useState(loc.pathname==='/'?'home':loc.pathname.slice(1))
  const fnMenuClick = (eve) =>{
    eve.stopPropagation();
    //alert(eve.target)
    //console.log(eve.target.id)
    //console.log(eve.target.href)
    //console.log(eve.target.nodeName)
    const {id,nodeName} = eve.target
    if(nodeName === 'A'){
      //alert(id)
      setMenuItem(id)
    }
   }
  return (
    <div>
    <div className='menu text-end' onClick={fnMenuClick}>
    <a className={menuItem === "home" ? "menuActive":""} id="home" href="/#">Home</a>
    <a className={menuItem === "about"? "menuActive":""} id="about" href="/#/about">About</a>
    <a className={menuItem === "contact" ? "menuActive":""} id="contact" href="/#/contact">Contact</a>
    </div>
    <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          {/*<Route path="*" element={<NotFound/>}/>*/}
          <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    </Suspense>
    </div>
  )
}

export default Menu
