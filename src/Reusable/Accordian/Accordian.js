import React from "react"
import AccordianItem from "../AccordianItem"
const Accordian = (props) =>{
    const {data} = props
    return <div className="container accordian">
    <div className="row">
        {
            data.map((obj,ind)=>{
                return <AccordianItem item={obj} val={ind}/>
            })
        }
        </div>
    </div>
}

export default Accordian