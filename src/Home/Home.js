import React from 'react'
import Accordian from '../Reusable/Accordian'
const Home = () => {
  const data=[
    {
        'header':'Sachin',
        'body':`This is Sachin, It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`
    },
    {
        'header':'Dhoni',
        'body':`This is Dhoni  It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`
    },
    {
        'header':'Kohli',
        'body':`This is Kohli, It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`
    }
]
  return (
    <Accordian data={data}/>
  )
}

export default Home