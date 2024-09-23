import avatar from '../assets/images/intro-img.svg';

const Intro = ()=> {
    return (
    <div className="intro pt-36 pb-16 flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-around md:flex-row">
        <div className="intro-content w-1/2 flex flex-col gap-10">
            <h1 className="text-4xl md:text-7xl text-white mb-24">LET ME <span>INTRODUCE MYSELF</span></h1>
            <p className="text-2xl text-white">I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
            <p className="text-2xl text-white">I am fluent in classics like <span>java, Javascript and c.</span></p>
            <p className="text-2xl text-white">My field of Interest's are building new <span>Web Technologies and Products</span> and also in areas related to <span>Programming.</span></p>
            <p className="text-2xl text-white">Whenever possible, I also apply my passion for developing products with <span>Node.js</span> and <span>Modern Javascript Library and Frameworks</span>  like <span>React.js.</span></p>
        </div>
        <div className="intro-img w-1/5 md:mt-40">
            <img className="w-full" src={avatar} alt="" />
        </div>
    </div>
    )
}

export default Intro;