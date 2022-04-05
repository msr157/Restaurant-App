import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{curElem.id}</span>
                    {/* <span className="card-author subtle">{curElem.name}</span> */}
                    <h3 className="card-title"> {curElem.name} </h3>
                    <span className="card-description subtle">
                      {curElem.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={curElem.image} alt="images" className="card-media" style={{
                    height:"190px",
                    width:"331px"
                  }} />
                  <span className="card-tag subtle">Add to cart</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
