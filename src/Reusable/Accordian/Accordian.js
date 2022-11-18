import React from "react"
import AccordianItem from "../AccordianItem"
const Accordian = (props) =>{
    const {data} = props
    const [itemNo, setitemNo] = React.useState(0);
    const fnClick = (eve) => {
        alert(eve.target.id)
        setitemNo(eve.target.id === itemNo ? -1 : eve.target.id)
    };
        return <div className="container accordian">
        <div className="row mt-5">
            {
                data.map((obj,ind)=>{
                    return <AccordianItem key={ind} item={obj} val={ind} fnClick={fnClick} isShow={itemNo == ind}/>
                })
            }
            </div>    
        </div>
}

export default Accordian