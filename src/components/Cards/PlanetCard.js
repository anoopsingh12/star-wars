import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import star_wars_logo from '../../images/star_wars_logo.png'

export const PlanetCard = (props) => {

    const { planets } = props;

    useEffect(() => {
        console.log("props", planets)
    }, [props])

    return (
        <div className="row">
            {planets.map( planet => {
                return(
                    <div className="col-lg-4 col-md-6" key={planet.url}>
                        <div className="card">
                            <div className="card-header">
                            <img src={star_wars_logo} alt="Star Wars Logo" height="42" width="72"></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title h2">{planet.name}</h5>
                                <p className="card-text">
                                <strong>Population:</strong> {planet.population}
                                </p>
                                <p className="card-text">
                                <strong>Diameter:</strong> {planet.diameter}
                                </p>
                                <p className="card-text">
                                <strong>Terrain:</strong> {planet.terrain}
                                </p>

                                <Link
                                    to={
                                        { pathname: `/planetdetails/${planet.name}`,
                                          query:{url: planet.url}
                                        }}
                                    className="btn btn-warning"
                                    >Details</Link>
                            </div>
                        </div>
                    </div>

                )

            })}
        </div>
    )
}
