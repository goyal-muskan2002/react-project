import React from 'react';
import web from "../src/images/image5.svg";
import Common from "./Common";
const About =()=> {
    return (
        <>
        <Common 
        name='Welcome to About Page' 
        imgsrc={web}
        visit="/Contact"
        btname="Contact Now"
        />
        </>
    );
};

export default About;