import {Header} from '../header';
import Footer from '../footer';
import ProjectCard from './projectCard';
import resumeBuilder from '../assets/images/resumeBuilder.PNG';
import movie from '../assets/images/movie.PNG';
import book from '../assets/images/book.PNG';
import pokemon from '../assets/images/pokemon.PNG';
import leader from '../assets/images/leader.PNG';
import stickyNote from '../assets/images/stickyNote.PNG';
import pass from '../assets/images/pass.PNG';

const Projects = ()=> {
    let card = [{
       img: resumeBuilder, 
       name: 'Resume Builder',
       demo: 'https://kunals-resumebuilderapp.netlify.app/',
       description: 'An AI-Powered Resume Builder that not only helps users create professional resumes but also offers personalized job and project suggestions based on the skills they enter.',
       repo: 'https://github.com/kunalmittal01/Resume_Builder' 
    },
    {
        img: movie,
        name: 'Movies Hub',
        demo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/movieApp',
        description: 'A Movie Site that lets users explore films and add them to their favorites in a seamless and interactive way!',
        repo: 'https://kunals-moviesite.netlify.app/'
    },
    {
        img: book,
        name: 'Book App',
        demo: 'https://kunals-bookapp.netlify.app/',
        description: 'A web application that allows users to read books using the Goodreads API and displays the details of the book.',
        repo: 'https://github.com/kunalmittal01/BookApp'
    },
    {
        img: pokemon,
        name: 'Pokemon',
        demo: 'https://kunals-pokemon.netlify.app/',
        description: 'A web application that allows users to search for Pokémon and view their details, including statistics, evolutions, and moves.',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/GeeksterPok'
    },
    {
        img: leader,
        name: 'Leaderboard',
        demo: 'https://kunalmitleaderboard.netlify.app/',
        description: 'A leaderboard web application that allows users to add, update, and delete scores for different categories and displays updated scores.',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/Leaderboard'
    },
    {
        img: stickyNote,
        name: 'Sticky Notes',
        demo: 'https://kunals-stickynotes.netlify.app/',
        description: 'A web application that allows users to create, edit, and delete sticky notes.',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/stickyNotes'
    },
    {
        img: pass,
        name: 'Password Generator',
        demo: 'https://kunals-password-generator.netlify.app/',
        description: 'A simple password generator that generates strong, unique passwords based on user-specified criteria.',
        repo: 'https://github.com/kunalmittal01/password-generator'
    }
]

    const cardElements = card.map(card=>{
            return <ProjectCard img={card.img} name={card.name} demo={card.demo} description={card.description} repo={card.repo}/>;
    })
    return (
        <div className="projects">
            <Header />
            <div className="projects-cont my-28">
                <h1 className="text-white">My Recent <span className="km">Works</span></h1>
                <p className='text-white my-10'>Below are my projects that i have build recently.</p>
                <div className="projects-card flex gap-y-10 gap-x-2 justify-around flex-wrap">
                    {cardElements}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects;