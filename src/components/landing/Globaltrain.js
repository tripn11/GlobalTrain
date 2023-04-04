import React, { useRef, useEffect,useState }from "react";
import Navigation from "./Navigation";
import Hero from './Hero';
import Welcome from './Welcome';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

export default () =>{
    useEffect(() => {
        window.addEventListener('scroll', getActiveComponent);
        return () => {
          window.removeEventListener('scroll', getActiveComponent);
        };
    }, [])

   

    const [id, setId] = useState('');
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

    const getActiveComponent = () => {
        const components = document.querySelectorAll('.component');
        const qualified = [];
        components.forEach ( (component)=> {
            if(window.scrollY < component.offsetTop + component.offsetHeight) {
                qualified.push(component.getAttribute('id'));
            }
        })
        const activeId = (qualified[0]);
        setId(activeId);
    }



    return (
        <div>
            <p>whatsapp icon</p>
            <Navigation
                scrollToHome={scrollToHome} 
                scrollToWelcome={scrollToWelcome}
                scrollToServices={scrollToServices}
                scrollToContact={scrollToContact} 
                homeRef={homeRef}
                activeComponent={id}
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