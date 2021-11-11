import React from "react"
import image from "../img/portfolio-background.jpeg"

export default function Home(){
    return (
        <main>
            <img src={image} alt="computer screen and laptop" className="absolute object-cover w-full h-full" />
            <section>
                <h1> Randy Langston</h1>
            </section>
        </main>
    )
    
}