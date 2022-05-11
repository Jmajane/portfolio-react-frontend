
import React from 'react'
import { useState, useEffect } from "react"

function About(props) {
    // create state to hold data
    const [about, setAbout] = useState(null);

    // create function to make api call
    const getAboutData = async () => {
        // make api ca;; and get response
        const response = await fetch(props.URL + "about")
        // turn response into javascript object
        const data = await response.json()
        // set the about state to the data
        setAbout(data)
    }

    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => {getAboutData()}, [props.URL]);

    // define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <img src={about.headshot} alt="Picture" />
            <p>{about.bio}</p>
        </div>
    );
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;