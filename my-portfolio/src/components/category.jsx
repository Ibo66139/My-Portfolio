import React, { Component } from "react";

class Category extends Component {
    state = {  } 
    render() { 
        return ( 

            <div className="Category-con">
                <div className="Category-Main">

                    <div className="Projects DisplayFlex">
                        <h2>Projects</h2>
                        

                        <img src="Projeckt.png" alt="" />
                        <img src="React.png" alt="React" />
                    </div>

                    <div className="About-Me DisplayFlex">
                        <h2>About Me</h2>
                      
                        <img src="working.png" alt="" />
                        <img src="AboutMe.png" alt="" />
                    </div>

                    <div className="Contact DisplayFlex">
                        <h2>Contact</h2>
                
                        <img src="Contact.png" alt="" />
                        <img src="Brief.png" alt="" />
                    </div>

                </div>
            </div>

        );
    }
}
 
export default Category;
