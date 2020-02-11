import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";



function About() {
  return (
    <div>
        <Banner/>
    <div className = "container">
      
      <h1>About Page</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. 
        Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.

        Currently there are 49 dolphin and porpoise species which are grouped into six families: the oceanic dolphin family is by far the largest with 38 members; the porpoise family has seven members; and there are four river dolphin families, each containing just one species. However, classification is not an exact science and as more information and discoveries come to light, deliberations will continue and some dolphin species are likely to be further split into more than one species and/or subspecies.

        Names and nick names can certainly be confusing; there are eight dolphin names that feature the word ‘whale’, including pilot whales, killer whales, false killer whales and melon-headed whales. Two species have whale and dolphin in their name; the northern right whale dolphin and the southern right whale dolphin – no wonder both the public and scientists get confused!
      </p>
    </div>
        <Footer/>
    </div>
  );
}

export default About;