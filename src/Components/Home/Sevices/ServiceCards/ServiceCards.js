import React from "react";
import pic1 from "../../../../assets/images/cavity.png";
import pic2 from "../../../../assets/images/dribbble_1.gif";
import pic3 from "../../../../assets/images/dribbble_1.gif";
import pic4 from "../../../../assets/images/fluoride.png";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServiceCards = () => {
  const servicesData = [
    {
      id: 1,
      name: "Medicine treatment",
      description: " 8 am to 5pm",
      icon: pic1,
      bgClass: "bg-primary",
    },
    {
      id: 2,
      name: "Arthpadics Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe in quis non ratione quaerat ullam, dicta earum inventore voluptatum. Ad ducimus alias impedit officia porro ipsam tenetur nemo fuga",
      icon: pic2,
      bgClass: "bg-primary",
    },
    {
      id: 3,
      name: "Diabatics treatment",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla eaque quaerat corrupti, optio labore neque earum asperiores voluptatum aperiam non est esse reiciendis voluptates ratione aspernatur doloribus? Eaque, eos enim! ",
      icon: pic3,
      bgClass: "bg-primary",
    },
    {
      id: 4,
      name: "Arthpadics Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe in quis non ratione quaerat ullam, dicta earum inventore voluptatum. Ad ducimus alias impedit officia porro ipsam tenetur nemo fuga",
      icon: pic4,
    },
    {
      id: 5,
      name: "Arthpadics Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe in quis non ratione quaerat ullam, dicta earum inventore voluptatum. Ad ducimus alias impedit officia porro ipsam tenetur nemo fuga",
      icon: pic4,
    },
    {
      id: 6,
      name: "Arthpadics Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe in quis non ratione quaerat ullam, dicta earum inventore voluptatum. Ad ducimus alias impedit officia porro ipsam tenetur nemo fuga",
      icon: pic2,
    },
  ];
  return (
    <div >
      <div className="text-center mt-10 ">
        <h1 className="text-primary ">OUR SERVICES</h1>
        <h1 > Services We provide </h1>
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((servicedata) => (
          <ServiceCard key={servicedata.id} servicedata={servicedata}>
            
          </ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
