import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/solid";

const pricing = [
  {
    variant: "Basic",
    space: "100GB",
    price: 1.99,
    description: [
      "100 GB of storage",
      "Option to add members",
      "Extra member benefits",
    ],
  },
  {
    variant: "Standard",
    space: "200GB",
    price: 3.99,
    description: [
      "200 GB of storage",
      "Option to add members",
      "Extra member benefits",
    ],
  },
  {
    variant: "Premium",
    space: "2TB",
    price: 8.99,
    description: [
      "2 TB of storage",
      "Option to add members",
      "Extra member benefits",
    ],
  },
];

const PricingCard = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-800">
      <div className="flex flex-col my-6 space-y-6 cursor-pointer md:space-y-0 md:space-x-6 md:flex-row md:my-0">
        {pricing.map((price, index) => (
          <div
            className={`${active == index ? "bg-violet-600" : "bg-slate-700"} ${
              active == index && "scale-105"
            } rounded-xl divide-y divide-slate-700 text-white transform hover:scale-105 duration-300`}
            onClick={() => setActive(index)}
          >
            {/* Upper Container  */}
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">{price.variant}</div>
              <h2 className="font-serif mt-10 text-5xl text-center">
                {price.space}
              </h2>
              <h3 className="mt-2 text-center">{`$${price.price}/Month`}</h3>
              <div className="flex justify-center">
                <a
                  href="#"
                  className={`${
                    active == index && "bg-violet-600"
                  } inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200`}
                >
                  Purchase
                </a>
              </div>
            </div>

            {/* Lower Container  */}
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              {/* List Container */}
              <div className="flex flex-col space-y-2">
                {price.description.map((desc) => (
                  <div className="flex justify-center">
                    <CheckIcon className="w-4" />
                    <span className="ml-1">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
