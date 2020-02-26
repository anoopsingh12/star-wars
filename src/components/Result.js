import React, {useContext, useEffect} from 'react'
import { Context } from "../context/Context";
import { PlanetCard } from "./Cards/PlanetCard";

const Result = () => {

  const {
    //action: { getCharacter },
    state: { data }} = useContext(Context)

  useEffect(() => {
  }, [data])

  return (
      <div className="container-fluid">
          <PlanetCard planets={data}/>
      </div>
  )
}

export default Result