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
import crypt from '../assets/images/crypt.PNG';
import infinitescroll from '../assets/images/infinitescroll.PNG';
import catphoto from '../assets/images/catphoto.PNG';
import iframe from '../assets/images/iframe.PNG';
import watch from '../assets/images/css1.PNG';
import css2 from '../assets/images/css2.PNG';
import apple from '../assets/images/apple.PNG';
import puma from '../assets/images/puma.PNG';
import menu from '../assets/images/menu.PNG';
import tshoe from '../assets/images/tshoe.PNG';
import house from '../assets/images/house.PNG';
import cssgrid from '../assets/images/cssgrid.PNG';
import magazine from '../assets/images/magazine.PNG';
import aria from '../assets/images/aria.PNG';
import cssgal from '../assets/images/cssgal.PNG';
import netflix from '../assets/images/netflix.PNG';
import typo from '../assets/images/typo.PNG';
import shoepage from '../assets/images/shoepage.PNG';
import shoesite from '../assets/images/shoesite.PNG';
import camping from '../assets/images/camping.PNG';
import ugaoo from '../assets/images/ugaoo.PNG';
import ytclone from '../assets/images/ytclone.PNG';
import nvroom from '../assets/images/nvroom.PNG';
import stopwatch from '../assets/images/stopwatch.PNG';
import digiclock from '../assets/images/digiclock.PNG';
import jokegen from '../assets/images/jokegen.PNG';
import emojee from '../assets/images/emojee.PNG';
import hunt from '../assets/images/hunt.PNG';
import agecal from '../assets/images/agecal.PNG';
import exptrack from '../assets/images/exptrack.PNG';
import sandc from '../assets/images/sandc.PNG';
import imgsearch from '../assets/images/imgsearch.PNG';
import amazon from '../assets/images/amazon.PNG';
import finance from '../assets/images/finance.PNG';
import usereducer from '../assets/images/cart.PNG';
import directory from '../assets/images/directory.PNG';
import translator from '../assets/images/translator.PNG';
import imagegen from "../assets/images/imagegen'.PNG";
import grocery from '../assets/images/todolist.PNG';
import gallery from '../assets/images/gallery.PNG';
import planner from '../assets/images/eduplanner.PNG';
import trello from '../assets/images/trello.PNG';
import bank from '../assets/images/bank.PNG';
import loremgen from '../assets/images/loremgen.PNG';
import geekfoods from '../assets/images/geekfoods.PNG';
import { useState } from 'react';

const Projects = ()=> {
    let card = [{
       img: resumeBuilder, 
       name: 'Resume Builder',
       demo: 'https://kunals-resumebuilderapp.netlify.app/',
       description: 'An AI-Powered Resume Builder that not only helps users create professional resumes but also offers personalized job and project suggestions based on the skills they enter.',
       repo: 'https://github.com/kunalmittal01/Resume_Builder', 
       category: 'javascript' 
    },
    {
        img: movie,
        name: 'Movies Hub',
        demo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/movieApp',
        description: 'A Movie Site that lets users explore films and add them to their favorites in a seamless and interactive way!',
        repo: 'https://kunals-moviesite.netlify.app/',
        category: 'javascript' 
    },
    {
        img: book,
        name: 'Book App',
        demo: 'https://kunals-bookapp.netlify.app/',
        description: 'A web application that allows users to read books using the Goodreads API and displays the details of the book.',
        repo: 'https://github.com/kunalmittal01/BookApp',
        category: 'javascript' 
    },
    {
        img: pokemon,
        name: 'Pokemon',
        demo: 'https://kunals-pokemon.netlify.app/',
        description: 'A web application that allows users to search for Pokémon and view their details, including statistics, evolutions, and moves.',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/GeeksterPok',
        category: 'javascript' 
    },
    {
        img: jokegen,
        name: 'Joke Generator',
        demo: 'https://kunals-jokegenerator.netlify.app/',
        description: ' A dynamic Joke Generator that brings a touch of humor to your day!',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/jokeGenerator',
        category: 'javascript' 
    },
    {
        img: stopwatch,
        name: 'Stop Watch',
        demo: 'https://kunals-stopwatch.netlify.app/',
        description: ' A fully functional Stopwatch built using JavaScript, HTML, and CSS!',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/stopWatch',
        category: 'javascript' 
    },
    {
        img: digiclock,
        name: 'Digital Clock',
        demo: 'https://kunalmittal01.github.io/javascript-_projects/digitalClock',
        description: ' A fully functional digital clock built using JavaScript, HTML, and CSS!',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/digitalClock',
        category: 'javascript' 
    },
    {
        img: sandc,
        name: 'Shape And Color',
        demo: 'https://kunalmittal01.github.io/javascript-_projects/shapeAndColor/',
        description: ' A clean and sleek modern ui in which users can change shape and color.',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/shapeAndColor',
        category: 'javascript' 
    },
    {
        img: imgsearch,
        name: 'Image Search',
        demo: 'https://kunalmittal01.github.io/javascript-_projects/imageSearch/',
        description: ' A clean and sleek modern ui in which users can get the picture of whatever in their mind.',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/imageSearch',
        category: 'javascript' 
    },
    {
        img: emojee,
        name: 'Emojee App',
        demo: 'https://kunalmit-emojee.netlify.app/',
        description: ' Emojee is a powerful, user-friendly tool designed to revolutionize the way we search for and use emojis. With Emojee, finding the perfect emoji to express your feelings has never been easier or more fun',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/Emojee',
        category: 'javascript' 
    },
    {
        img: hunt,
        name: 'Phone Hunting API',
        demo: 'https://kunals-hunting.netlify.app/',
        description: 'A sleek and interactive product showcase page that not only highlights modern UI/UX practices but also incorporates an important feature: Debouncing for enhanced search performance',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/wt-04',
        category: 'javascript' 
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
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/stickyNotes',
        category: 'javascript' 
    },
    {
        img: pass,
        name: 'Password Generator',
        demo: 'https://kunals-password-generator.netlify.app/',
        description: 'A simple password generator that generates strong, unique passwords based on user-specified criteria.',
        repo: 'https://github.com/kunalmittal01/password-generator',
        category: 'javascript' 
    },
    {
        img: crypt,
        name: 'Cryptoview Dashboard',
        demo: 'https://kunals-cryptoview.netlify.app/',
        description: 'CryptoView, a user-friendly platform designed for tracking real-time cryptocurrency data with simplicity and efficiency.',
        repo: 'https://github.com/kunalmittal01/cryptoView',
        category: 'javascript'    
    },
    {
        img: agecal,
        name: 'Age Calculator',
        demo: 'https://agecalkunalmit.netlify.app/',
        description: 'Project that helps users determine their exact age based on their date of birth. This project involved creating a user-friendly interface and implementing date manipulation logic.',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/wt2_agecalulator',
        category: 'javascript'    
    },
    {
        img: exptrack,
        name: 'Expense Tracker',
        demo: 'https://kunalwt03.netlify.app/',
        description: 'This Expense Tracker is a simple yet powerful tool to help users manage their finances effectively.',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/wt-03',
        category: 'javascript'    
    },
    {
        img: infinitescroll,
        name: 'Infinite Scrolling',
        demo: 'https://kunals-scrolling.netlify.app/',
        description: 'The Infinite Scrolling feature is a widely-used UI pattern that enhances the user experience by loading new content automatically as you scroll down the page. This is especially useful for content-heavy sites like blogs, news platforms, and social media feeds.',
        repo: 'https://github.com/kunalmittal01/javascript-_projects/tree/main/infiniteScrolling',
        category: 'javascript'    
    },
    {
        img: amazon,
        name: 'My Amazon',
        demo: 'https://kunals-amazon.netlify.app/',
        description: 'My fully functional Amazon Clone, designed to replicate key e-commerce functionalities with a modern tech stack. From authentication to sorting, shopping, and more, this project has been an amazing learning experience!',
        repo: 'https://github.com/kunalmittal01/myAmazon',
        category: 'react'    
    },
    {
        img: finance,
        name: 'Finance.Ly',
        demo: 'https://kunals-financely.netlify.app/',
        description: 'A Finance Tracker Web App designed to help users manage their personal finances with ease! Whether you’re tracking expenses, organizing income, or visualizing financial data, this app has everything you need to stay in control of your money.',
        repo: 'https://github.com/kunalmittal01/finance-tracker',
        category: 'react'    
    },
    {
        img: trello,
        name: 'Trello Clone',
        demo: 'https://kunals-trelloclone.netlify.app/',
        description: 'A Trello Clone Web Application built to provide a simple yet powerful task management experience. Modeled after the popular productivity tool, this clone offers seamless task creation, editing, and organization to help users manage their daily to-dos and projects effectively.',
        repo: 'https://github.com/kunalmittal01/trello-clone',
        category: 'react'    
    },
    {
        img: planner,
        name: 'Education Planner',
        demo: 'https://kunals-eduplanner.netlify.app/',
        description: 'A tool designed to help students and lifelong learners organize their study routines, track learning goals, and stay on top of their education journey—all in one place!',
        repo: 'https://github.com/kunalmittal01/EducationPlanner',
        category: 'react'    
    },
    {
        img: usereducer,
        name: 'Cart',
        demo: 'https://kunals-cart.netlify.app/',
        description: 'A Shopping Cart Application—built using React, HTML, CSS, and Tailwind CSS. This project focuses on providing smooth user interactions and an intuitive UI design, making it easy for users to add, update, and remove items from their cart.',
        repo: 'https://github.com/kunalmittal01/usereducer',
        category: 'react'    
    },
    {
        img: gallery,
        name: 'Image Gallery',
        demo: 'https://kunals-gallery.netlify.app/',
        description: 'An Image Gallery Web Application that offers a smooth and interactive browsing experience with infinite scrolling, search functionality, and dynamic routing built with React.js. This project is all about creating a visually appealing and user-friendly platform for viewing images.',
        repo: 'https://github.com/kunalmittal01/imageGallery',
        category: 'react'    
    },
    {
        img: imagegen,
        name: 'Image Generation App',
        demo: 'https://kunals-image-gen-app.netlify.app/',
        description: 'A Dynamic Image Generation Web App that brings user descriptions to life through stunning visual outputs!',
        repo: 'https://github.com/kunalmittal01/Image-Generation-App',
        category: 'react'    
    },
    {
        img: translator,
        name: 'Language Translator',
        demo: 'https://kunals-translator.netlify.app/',
        description: 'A Translator Web Application which is designed to break language barriers and facilitate seamless communication. This project showcases my skills in building dynamic and interactive web applications using React, HTML, CSS, Tailwind CSS, and JavaScript.',
        repo: 'https://github.com/kunalmittal01/language-Translator',
        category: 'react'    
    },
    {
        img: grocery,
        name: 'Grocery Bud',
        demo: 'https://kunals-todo-list.netlify.app/',
        description: 'A grocery bud Application designed to help users efficiently manage and organize their daily tasks. This project demonstrates my ability to build interactive and responsive user interfaces using React, HTML, and CSS.',
        repo: 'https://github.com/kunalmittal01/To-Do-List',
        category: 'react'    
    },
    {
        img: directory,
        name: 'Directory App',
        demo: 'https://kunals-directorywebapp.netlify.app/',
        description: 'A Directory Web Application designed to simplify the process of organizing and managing contact information. This project showcases my expertise in creating intuitive and user-friendly interfaces with React, HTML, CSS, and Tailwind CSS.',
        repo: 'https://github.com/kunalmittal01/Directory-WebApp',
        category: 'react'    
    },
    {
        img: bank,
        name: 'Bank Dashboard',
        demo: 'https://kunals-bank-dashboard.netlify.app',
        description: 'A dashborad of a bank which helps user to visualize their data.',
        repo: 'https://github.com/kunalmittal01/Bank-Dashboard',
        category: 'react'    
    },
    {
        img: loremgen,
        name: 'Lorem Generator',
        demo: 'https://kunals-loremgen.netlify.app/',
        description: 'A website that helps the users to generate the dummy text for their site.',
        repo: 'https://github.com/kunalmittal01/loremGenerator',
        category: 'react'    
    },
    {
        img: geekfoods,
        name: 'Geek Foods',
        demo: 'https://kunals-geekfood.netlify.app/',
        description: 'A website in which users can found variety of famous restraunts across the globe.',
        repo: 'https://github.com/kunalmittal01/GeekFoods',
        category: 'react'    
    },
    {
        img: catphoto,
        name: 'Cat Photo App',
        demo: 'https://kunalmittal01.github.io/html_Projects/catphotoapp',
        description: 'A website that gives the information about cats.',
        repo: 'https://github.com/kunalmittal01/html_Projects/tree/master/catphotoapp',
        category: 'html' 
    },
    {
        img: iframe,
        name: 'Iframe',
        demo: 'https://kunalmittal01.github.io/html_Projects/weekly_test2/sec.html',
        description: 'A website built using iframes.',
        repo: 'https://github.com/kunalmittal01/html_Projects/tree/master/weekly_test2',
        category: 'html' 
    },
    {
        img: watch,
        name: 'Animations',
        demo: 'https://kunalmittal01.github.io/css/animations',
        description: 'A miniproject built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/animations',
        category: 'css' 
    },
    {
        img: css2,
        name: 'construction',
        demo: 'https://kunalmittal01.github.io/css/background',
        description: 'A miniproject built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/background',
        category: 'css' 
    },
    {
        img: house,
        name: 'Coffee House',
        demo: 'https://kunalmittal01.github.io/css/coffeehouse',
        description: 'A miniproject built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/coffeehouse',
        category: 'css' 
    },
    {
        img: cssgrid,
        name: 'Css Grid',
        demo: 'https://kunalmittal01.github.io/css/css_grid',
        description: 'A miniproject built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/css_grid',
        category: 'css' 
    },
    {
        img: magazine,
        name: 'Grid Magazine',
        demo: 'https://kunalmittal01magazine.netlify.app',
        description: 'A miniproject built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/grid_magazine',
        category: 'css' 
    },
    {
        img: aria,
        name: 'Aria Business',
        demo: 'https://kunalmittal01aria.netlify.app/',
        description: 'A website built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/major_project',
        category: 'css' 
    },
    {
        img: cssgal,
        name: 'Photo Gallery',
        demo: 'https://kunalmittal01.github.io/css/photogallery',
        description: 'A project built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/photogallery',
        category: 'css' 
    },
    {
        img: netflix,
        name: 'Netflix',
        demo: 'https://kunalmittal01.github.io/css/netflix',
        description: 'A project built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/netflix',
        category: 'css' 
    },
    {
        img: typo,
        name: 'Typography',
        demo: 'https://kunalmittal01.github.io/css/typography',
        description: 'A project built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/typography',
        category: 'css' 
    },
    {
        img: shoepage,
        name: 'shoe Page',
        demo: 'https://kunalmittal01.github.io/css/shoepage',
        description: 'A miniproject built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/shoepage',
        category: 'css' 
    },
    {
        img: menu,
        name: 'Cafe Menu',
        demo: 'https://kunalmittal01.github.io/css/cafemenu/menu.html',
        description: 'A miniproject built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/cafemenu',
        category: 'css' 
    },
    {
        img: tshoe,
        name: 'Tailwind Shoe',
        demo: 'https://kunalmittal01.github.io/css/tailject',
        description: 'A miniproject built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/tailject',
        category: 'css' 
    },
    {
        img: shoesite,
        name: 'Shoe Site',
        demo: 'https://kunalmittal01.github.io/css/wt_3',
        description: 'A sleek and modern user interface, built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/wt_3',
        category: 'css' 
    },
    {
        img: camping,
        name: 'Camping',
        demo: 'https://kunalmittal01logo.netlify.app/',
        description: ' A sleek, user-friendly UI for a camping gear and services website, crafted entirely with HTML and CSS.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/wt_4',
        category: 'css' 
    },
    {
        img: ytclone,
        name: 'YouTube',
        demo: 'https://kunalmittal01.github.io/css/youtubeclone',
        description: 'A project built using html and css.',
        repo: 'https://github.com/kunalmittal01/css/tree/master/youtubeclone',
        category: 'css' 
    },
    {
        img: ugaoo,
        name: 'Ugaoo',
        demo: 'https://ugaoogeekathon.netlify.app/',
        description: "Ugaoo is an online plant nursery that specializes in all your gardening needs. From premium quality exotic indoor plants to outdoor plants, flowering plants, and succulents, we've got you covered.",
        repo: 'https://github.com/kunalmittal01/ugaoo/tree/development',
        category: 'css' 
    },
    {
        img: nvroom,
        name: 'The November Room',
        demo: 'https://kunalmittalgym.netlify.app/',
        description: "The November Room is more than just a gym; it's a comprehensive fitness experience designed to transform your health and wellness.",
        repo: 'https://github.com/kunalmittal01/gym_project',
        category: 'css' 
    },
    {
        img: apple,
        name: 'Apple',
        demo: 'https://kunals-apleuiclone.netlify.app/',
        description: 'A UI clone of Apple’s website—where I recreated the clean, modern, and minimalist design that Apple is known for. This project was a great opportunity for me to experiment with HTML, CSS, Tailwind CSS, and a touch of JavaScript.',
        repo: 'https://github.com/kunalmittal01/AppleClone',
        category: 'css' 
    },
    {
        img: puma,
        name: 'Puma',
        demo: 'https://kunals-puma.netlify.app/',
        description: ' A sleek and responsive Puma website using just HTML, CSS, and some subtle animations to enhance the overall user experience',
        repo: 'https://github.com/kunalmittal01/PumaUI',
        category: 'css' 
    }

]

    const [query, setQuery] = useState('all');
    const [active,setActive] = useState('all')
    const [inp,setInp] = useState('')
    const cardElements = card.filter(card=>{
        if(query=='all') {
            return true;
        }
        if(query=='html' || query=='css') 
        {
            return card.category == query;
        }
        return card.name.toLowerCase().includes(query.toLowerCase()) || card.category == query || card.description.toLowerCase().includes(query);
    }).map((card,idx)=>{
           return <ProjectCard key={idx} {...card} />
    })
    return (
        <div className="projects">
            <Header />
            <div className="projects-cont my-28">
                <h1 className="text-white">My Recent <span className="km">Works</span></h1>
                <p className='text-white mt-10'>Below are my projects that i have build recently.</p>
                <div className="projects-category mt-8 mb-4 text-white flex items-center gap-5 text-xl justify-center">
                    <p onClick={()=>{setQuery('all');setActive('all')}} className={`cursor-pointer ${active=='all'?'active':""}`}>All</p>
                    <p onClick={()=>{setQuery('html');setActive('html')}} className={`cursor-pointer ${active=='html'?'active':""}`}>html</p>
                    <p onClick={()=>{setQuery('css');setActive('css')}} className={`cursor-pointer ${active=='css'?'active':""}`}>css</p>
                    <p onClick={()=>{setQuery('javascript');setActive('javascript')}} className={`cursor-pointer ${active=='javascript'?'active':""}`}>Javascript</p>
                    <p onClick={()=>{setQuery('react');setActive('react')}} className={`cursor-pointer ${active=='react'?'active':""}`}>React</p>
                </div>
                <div className="search mb-14">
                    <input onKeyUp={(e)=>{if(e.key=='Enter'){setQuery(e.target.value)}setInp(e.target.value)}} className='py-1 px-4 rounded-s-md' type="text" placeholder='Search by name or category...' />
                    <button onClick={(e)=>setQuery(inp)} className='text-white text-sm rounded-r-md'>Search</button>
                </div>
                <div className="projects-card flex gap-y-10 gap-x-2 justify-around flex-wrap">
                    {cardElements.length==0?<div className='text-white text-md md:text-xl font-medium lg:text-2xl'>No Project by <span className='km'>{query}</span> name is available!</div>:cardElements}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects;