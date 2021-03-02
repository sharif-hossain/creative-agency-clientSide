import React from 'react';
import Carousel from '../Carousel/Carousel';
import Contacts from '../Contacts/Contacts';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header'
import HeaderBody from '../HeaderBody/HeaderBody';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <div style={{backgroundColor: "#FBD062"}}>
            <Header></Header>
            <HeaderBody/>
            </div>
            <Services/>
            <Carousel/>
            <Feedback/>
            <Contacts/>
        </div>
    );
};

export default Home;