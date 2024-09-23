import {Header} from '../header';
import Home from './Home';
import Intro from './intro';
import Social from './social';
import Footer from '../footer';
const HomePage = () => {
    return (
        <div className="home-page">
            <div className="wrap">
                <Header/>
                <Home/>
            </div>
            <Intro/>
            <Social/>
            <Footer/>
        </div>
    )
}

export default HomePage;