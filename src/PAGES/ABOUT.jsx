import React from 'react'
import Common from '../Components/Common'
import Pic2 from "../images/pic2.svg"

export default function ABOUT() {
    return (
       <>
       <Common  name="Welcome to About Page" imgsrc={Pic2} visit="/CONTACT" btname="Contact Now" />
       </>
    )
}
