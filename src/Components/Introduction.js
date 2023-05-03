import React from 'react'
import '../Styles/Introduction.css'

export default function Introduction() {
  return (
    <div className="intro_div">
      <p className="heading">Mechanics of Active Polymers-and <br/>Additive Manufacturing</p>
      <p className='intro_text'>Our research focuses on the mechanical and physical behavior of contemporary active polymers that are important to the nation, 
        such as the reprocessible and recyclable plastics, liquid crystal elastomers, and shape-changing polymers. We are interested in 
        understanding and modeling the evolution of material structure and mechanical properties under various environmental stimuli and
         processing conditions using an integrated experimental-theoretical-computational approach. Our work aims to facilitate 
         applications of these materials into advanced manufacturing technologies (e.g., 3D and 4D printing, chemical recycling). 
        <br/>
        <br/>
        Our research is dynamic with our roots in the mechanics and physics of polymers. Many of our previous projects were completed 
        in collaboration with researchers in other disciplines, such as chemical engineering and materials science. We always look for 
        talented people to join our group and work together!</p>
        <img className="intro_1" src={require("../Images/intro_1.png")} alt={"Mechanics"}/>

        <p className='intro_text'>We extremely appreciate all sponsors that have supported our research:</p>
        <img className="intro_2" src={require("../Images/intro_2.png")} alt={"Sponsors"}/>
    </div>
  )
}
