import React, { Component } from "react";

class Main extends Component {
    state = {  } 
    render() { 
        return ( 

            <main>
                <div className="Left con">

                    <h1>Hi, ich bin Ibrahim Kocak</h1>

                     <h2 className="main h2" >
                        und auf der Suche nach einer Ausbildung als Fachinformatiker für Anwendungsentwicklung.
                        Hier findest du meine Projekte und mehr über meine Fähigkeiten!
                     </h2>


                </div>

                <div className="Right con">

                <img src="laptop.png" alt="Laptop" className="Laptop-img" />




                </div>
            </main>

            
        );
    }
}
 
export default Main;