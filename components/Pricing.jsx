import React from "react";
import { FaCheck } from "react-icons/fa";
function Pricing() {
  const PricePlan = [
    // in arabic
    // i have only subsciption  plan for one year

    {
      title: "الخطة الأساسية",
      price: 1000,
      desc: "الخطة الأساسية تتضمن مساحة تخزين 1 جيجا ودعم فني وتحديثات مجانية  ",
      features: [
        "مساحة تخزين 1 جيجا",
        "دعم فني",
      ],
      otherFeatures: [
        "مساحة تخزين 1 جيجا",
        "دعم فني",
        "تحديثات مجانية",
        "تصميم مجاني",
      ],

      buttonText: "تواصل معنا الآن",
    },
    {
      title: "الخطة المتقدمة",
      price: 50000,
      desc: "الخطة المتقدمة تتضمن مساحة تخزين 5 جيجا ودعم فني وتحديثات مجانية وتصميم مجاني",
      features: [
        "دعم فني",
        "تحديثات مجانية",
      ],
      otherFeatures: [
        "مساحة تخزين 1 جيجا",
        "دعم فني",
        "تحديثات مجانية",
        "تصميم مجاني",
      ],
      buttonText: "تواصل معنا الآن",
    },
  ];
  return (
    <div
    id="التسعير"
     className=" w-full   flex  flex-col   banner gap-12     lg:flex-row   justify-center  px-6  my-8">
      {PricePlan.map((plan, index) => {
        return (
          <div
            key={index}
            className=" flex-col items-center  w-full   lg:w-1/3 justify-center h-[600px] rounded-2xl border border-primary   p-4"
          >
            <h1 className="text-center text-3xl  font-bold ">{plan.title}</h1>
            <p className="text-center my-4">{plan.desc}</p>
            <ul className="text-center flex  justify-around">
              {plan.features.map((feature, index) => {
                return (
                  <li
                    key={index}
                    className="border border-primary  whitespace-nowrap  rounded-2xl px-4 p-2 hover:bg-primary text-white transition-all"
                  >
                    {feature}
                  </li>
                );
              })}
            </ul>
            <h2 className="text-center text-2xl font-bold my-4">
              {" "}
              دج {plan.price} / العام
            </h2>
            {plan.otherFeatures.map((feature, index) => {
              return (
                <div className="flex flex-col  justify-center items-center">
                  <div className="flex flex-row mt-4 gap-4 items-center   lg:w-96 w-72 p-1    borde bg-gray-800  rounded-xl  border-white   justify-between">
                    <FaCheck size={20} color="green" />
                    <h1 className="mr-4"> {feature}</h1>
                  </div>
                </div>
              );
            })}
            <div className="flex flex-col  justify-center items-center">

            <div className="flex flex-col  w-1/2  rounded-xl   bg-primary hover:bg-white hover:text-primary transition-all mt-12  justify-center items-center">
              <div className="  hover:text-primary    font-bold    py-2 ">
                {plan.buttonText}
              </div>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Pricing;
