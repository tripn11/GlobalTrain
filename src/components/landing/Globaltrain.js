import React, { useRef }from "react";
import Navigation from "./Navigation";
import Hero from './Hero';
import Welcome from './Welcome';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

export default () =>{
    const homeRef = useRef(null);
    const welcomeRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToHome = () => {
        if (homeRef.current) {
            servicesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToWelcome = () => {
        if (welcomeRef.current) {
            servicesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToServices = () => {
        if (servicesRef.current) {
            servicesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };


    const scrollToContact = () => {
        if (contactRef.current) {
            servicesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <p>whatsapp icon</p>
            <Navigation
                scrollToHome={scrollToHome} 
                scrollToWelcome={scrollToWelcome}
                scrollToServices={scrollToServices}
                scrollToContact={scrollToContact} 
                homeRef={homeRef}
            />
            <Hero />
            <Welcome welcomeRef={welcomeRef}/>
            <Services servicesRef={servicesRef}/>
            <Contact contactRef={contactRef} />
            <Footer />
        </div>
    )
}

//useRef is used to pick a component since even the component Id cannot be seen by an ordinary getelementbyid. The 
//component must have an ID though for it to still work, i don't know why.