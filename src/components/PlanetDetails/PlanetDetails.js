import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import star_wars_logo from '../../images/star_wars_logo.png'

const PlanetDetails = (props) => {

    const {
        action: { getPlanet },
        state: { selectedPlanet }
    } = useContext(Context);

    useEffect(() => {
       getPlanet(props.location.query.url)
    }, []);

    return (
        <div className="container">
          <h1 className="text-white display-2" style={{marginTop: 100, marginBottom: 0}}>Character Details</h1>
          {(selectedPlanet !== {}) ? (
              <div className="card text-center">
                  <div className="card-header">
                  <img src={star_wars_logo} alt="Star Wars Logo" height="42" width="82"></img>
                  </div>
                  <div className="card-body">
                      <h5 className="card-title h2">{selectedPlanet.name}</h5>
                      <p className="card-text">
                      <strong>population:</strong> {selectedPlanet.population}
                      </p>
                      <p className="card-text">
                      <strong>Diameter:</strong> {selectedPlanet.diameter}
                      </p>
                      <p className="card-text">
                      <strong>Terrain:</strong> {selectedPlanet.terrain}
                      </p>
                      <p className="card-text">
                      <strong>Rotation Period:</strong> {selectedPlanet.rotation_period}
                      </p>
                      <p className="card-text">
                        <strong> Gravity:</strong> {selectedPlanet.gravity}
                      </p>
                  </div>

                  <Link
                    to="/planet"
                    className="btn btn-warning"
                    >Close</Link>
              </div>
          )
          : ""}
        </div>
    );
};

export default PlanetDetails;
