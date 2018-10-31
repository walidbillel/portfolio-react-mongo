import React, { Component } from "react";
import Navbar from '../../components/Nav';
import ProjectCard from '../../components/ProjectCard'

import './Portfolio.css';

const projects = [
    {
        projectName: "HAPPENIN'",
        gitHub: "https://github.com/walidbillel/project1-WABD-",
        appLink: "https://walidbillel.github.io/project1-WABD-/",
        gif: "./gifs/happening.gif"
    },

    {
        projectName: "Vriend",
        gitHub: "https://github.com/walidbillel/vfriend-book-heroku",
        appLink: "https://vfriend-book.herokuapp.com/",
        gif: "./gifs/vfriend.gif"
    },

    {
        projectName: "Vriend 2",
        gitHub: "https://github.com/Cbutler64/Vfriend-Videos",
        appLink: "https://fathomless-dawn-58912.herokuapp.com/",
        gif: "#"
    },

    {
        projectName: "Burger",
        gitHub: "https://github.com/walidbillel/burger",
        appLink: "https://burger-eater0.herokuapp.com/",
        gif: "./gifs/burger.gif"
    },

    {
        projectName: "Clicky Game",
        gitHub: "https://github.com/walidbillel/Clicky-Game-Heros",
        appLink: "https://clicky-game-walid.herokuapp.com/",
        gif: "./gifs/clicky.gif"
    },


    {
        projectName: "Friend Finder",
        gitHub: "https://github.com/walidbillel/FriendFinder",
        appLink: "https://friend-finder-wb.herokuapp.com/",
        gif: "./gifs/friend-finder.gif"
    },

    {
        projectName: "Crystal Game",
        gitHub: "https://github.com/walidbillel/unit-4-game",
        appLink: "https://walidbillel.github.io/unit-4-game/",
        gif: "./gifs/crystal.png"
    },

    {
        projectName: "Trivia Game",
        gitHub: "https://github.com/walidbillel/TriviaGame",
        appLink: "https://walidbillel.github.io/TriviaGame/",
        gif: "./gifs/trivia.gif"
    },

    {
        projectName: "Giphy",
        gitHub: "https://github.com/walidbillel/GifTastic-",
        appLink: "https://walidbillel.github.io/GifTastic-/",
        gif: "./gifs/gif.gif"
    },
];


class Portfolio extends Component {


    render() {

       

        return (
            <div>
                <Navbar></Navbar>
                <br></br>
                <header>Projects</header>
                <br></br>
                <div>
                    {projects.map(project =>
                        <ProjectCard key={project.projectName} projectName={project.projectName}
                            gitHub={project.gitHub}
                            appLink={project.appLink}
                            gif={project.gif} />)}
                </div>
            </div>
        )
    }
}

export default Portfolio;

