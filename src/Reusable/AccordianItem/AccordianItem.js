import React from "react"
import "./AccordianItem.css"
const AccordianItem = (props) => {
    const {item,val} = props
    const [itemNo, setitemNo] = React.useState(0);
    const fnClick = (eve) => {
        //alert(eve.target.id)
        setitemNo(eve.target.id)
       //alert(typeof(itemNo))
    };
    return <React.Fragment>
        <h3 onClick={fnClick} id={val}>{item.header}</h3>
        <p className={val == itemNo ? 'show' :'hide'}>{item.body}</p>
    </React.Fragment>
  }  

  export default AccordianItem