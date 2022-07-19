import React from "react"

import nameFootballTeams from "../../assets/name-football-teams.png"
import miniShop from "../../assets/mini-shop.png"
import ticTacToe from "../../assets/tictactoe.png"

function ProjectCard({ project }) {
    function whichImg(nameUrl) {
        switch (nameUrl) {
            case "name-football-teams":
                return nameFootballTeams
            case "mini-shop":
                return miniShop
            case "tictactoe":
                return ticTacToe
            default:
                return null
        }
    }

    return (
        <div className="card">
            <h2 className="card__title">{project.name}</h2>
            <div className="card__img">
                <div className="card__img-shadow"></div>
                <img
                    src={whichImg(project.url)}
                    alt="project screenshot"
                />
            </div>
            <p className="card__description">{project.description}</p>
            <div className="card__btns">
                <a
                    href={project.githubRepo}
                    className="card__btn"
                >
                    github
                </a>
                <a
                    href={project.ghPage}
                    className="card__btn"
                >
                    gh pages
                </a>
            </div>
        </div>
    )
}

export default ProjectCard