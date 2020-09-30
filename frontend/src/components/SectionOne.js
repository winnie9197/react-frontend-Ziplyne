import React from 'react';

function SectionOne() {
  return (
    <div className="section-one">
        
      <div className="floating-header">
        <svg height="100%" width="100%">
          <defs>
            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#a183e1" stopOpacity="0.8"/>
              <stop offset="1" stopColor="#6f39e1" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
          <path id="Path_1" data-name="Path 1" d="M1990,661.716c114.841,74,61.376-55.352,372.5-110.165,351.534-61.93,705.237,140.923,765.2,119.646,57.4,5.14,135.588-132.427,273.058-135.486,170.065-3.784,220.58,103.985,347.889,135.486S3910,661.716,3910,661.716v412.4H1990Z" transform="translate(-1990 -535.613)" fill="url(#linear-gradient)"/>
        </svg>

        <h1 className="floating-text">Lorem Ipsum Dolor Lrem Ipsum Dolor Amet.</h1>
        
      </div>
    </div>

  );
}

export default SectionOne;
