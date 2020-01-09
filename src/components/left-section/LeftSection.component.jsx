import React from 'react';

const LeftSection = (props) => {
  return (
    <section className="left">
      <div className="image">
        <img src={props.img} alt="" />
      </div>
    </section>
  );
}

export default LeftSection;