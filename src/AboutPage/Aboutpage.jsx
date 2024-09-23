import Know from './know';
import {Header} from '../header';
import Skills from './Skills';
import Footer from '../footer';
const Aboutpage = ()=>{
    return (
        <div className="about-container w-full">
            <Header/>
            <Know/>
            <Skills/>
            <Footer/>
        </div>       
    )
}

export default Aboutpage;