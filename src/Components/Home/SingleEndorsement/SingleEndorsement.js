import React from "react";

const SingleEndorsement = ({ review }) => {
  const { name, userReview, location, img } = review;
  return (
    <section>
      <div className=" my-4 card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{userReview}</p>
          <div className=" mt-2 card-actions justify-start">
            <div className="avatar my-2">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} />
              </div>
            </div>

            <div className="mx-4">
              
              <h2 className="card-title">{name}</h2>
              <h2>{location}</h2>

              <div className="rating">
             <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
             <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
             <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
             <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
             <input type="" name="rating-4" className="mask mask-star-2 bg-green-500 " />
             </div>

            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleEndorsement;
