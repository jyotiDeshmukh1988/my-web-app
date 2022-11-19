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
  const [isMobileView,setisMobileView] = useState(document.body.offsetWidth<600)
  const [left,setLeft] = useState(-150)
  let timeOutId;
  window.addEventListener('resize',()=>{
    clearTimeout(timeOutId)
    timeOutId = setTimeout(()=>{
      handleResize()
    },100)
  })
  
const handleResize = ()=>{
  let _width = document.body.offsetWidth
      //console.log("window "+window.innerWidth)
      //console.log("document "+_width)
      let isMobileView = false
      if(_width < 600) isMobileView = true
      setisMobileView(isMobileView)
}

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
    if({isMobileView})setLeft(-150)
   }
   const fnMobileMenuBtnClick = () =>{
      setLeft(left === 0 ? -150 : 0)
   }
  return (
    <div>
    {isMobileView && <button onClick={fnMobileMenuBtnClick} className="mobile-menu-btn"><img src="mobile-menu.png" width="30"/></button>}
    <div style={{left:left+'px'}} className={`${isMobileView ? 'mobile-menu' : 'menu'} text-end`} onClick={fnMenuClick}>
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
