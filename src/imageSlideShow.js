import { Component } from "react";

import SimpleImageSlider from "react-simple-image-slider";



const Sm = {
  padding:'58px 2px',

};



let  images=  [

  { url : 'images/m1.jpg' },
  { url :  "images/m2.jpg" },
  { url : "images/m3.jpg" },
  { url:  "images/m4.jpg" },
  { url:  "images/m5.jpg" },
  { url: "images/m6.jpg" },
  { url: "images/m7.jpg" },
  { url: "images/m8.jpg" },
  { url: "images/m9.jpg" },
  { url: "images/m10.jpg" },
  { url : "images/m11.jpg" }, 
  
  
];





const SlideShows = () => {
  return (
    <div>
     
      <SimpleImageSlider


  
        width={1500}
        height={504}       
        images={images}
      
        style={Sm}
        slideDuration={1.7}       
        navSize={70}
        navMargin={1}
        showBullets={true}
        showNavs={true}

      />
    </div>
  );
}
export default SlideShows

