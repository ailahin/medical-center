import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import reviewimg1 from '../../../assets/images/people1.png'
import reviewimg2 from '../../../assets/images/people2.png'
import reviewimg3 from '../../../assets/images/people3.png'
import SingleEndorsement from '../SingleEndorsement/SingleEndorsement';

const Endorsement = () => {

    const reviews= [
        {
            id:1,
            name: "Aminul",
            userReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam.",
            location: "Dhaka",
            img: reviewimg1

        },
        {
            id:2,
            name: "Aminul",
            userReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam.",
            location: "Dhaka",
            img: reviewimg2

        },
        {
            id:3,
            name: "Aminul",
            userReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam.",
            location: "Dhaka",
            img: reviewimg3

        }
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between '>

                <div className='' >
                    <h1 className='text-primary text-bold  ml-10 text-2xl'>Endrosement</h1>
                    <h3 className="  ml-10 text-4xl"> Listen from Our Patients</h3>
                </div>

                <figure>
                    <img className='w-24 lg:w-48 ' src={quote} alt="" />
                </figure>

            </div>

            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>

                {
                    reviews.map( (review)=>( 
                        <SingleEndorsement key={review.id} review={review}> </SingleEndorsement>
                    ))
                }

            </div>
            
        </section>
    );
};

export default Endorsement;