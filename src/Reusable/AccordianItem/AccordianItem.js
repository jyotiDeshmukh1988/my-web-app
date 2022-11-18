import React from "react"
import "./AccordianItem.css"
const AccordianItem = (props) => {
    const {item,val,fnClick,isShow} = props
    console.log(props)
    return <React.Fragment>
   
        <h3 onClick={fnClick} id={val}>{item.header}</h3>
        {isShow && <p>{item.body}</p>}

    </React.Fragment>
  }  

  export default AccordianItem