import React from "react";
import SubscriptionPlanCard from "@/components/subscription-plan/card";
import { TbFreeRights, TbVip } from "react-icons/tb";
import { AiFillHourglass, AiOutlineVideoCamera } from "react-icons/ai";
import { ProductInterface } from "@/interfaces/app.interface";

const items = [
  {
    title: "Starter",
    price: 10,
    options: [
      {
        title: "Vip",
        icon: <TbVip />,
      },
      {
        title: "100 Hours Video",
        icon: <AiFillHourglass />,
      },
      {
        title: "FULL HD FORMAT",
        icon: <AiOutlineVideoCamera />,
      },
      {
        title: "14 DAYS FREE",
        icon: <TbFreeRights />,
      },
    ],
  },
  {
    title: "PRO",
    price: 15,
    options: [
      {
        title: "Vip",
        icon: <TbVip />,
      },
      {
        title: "200 Hours Video",
        icon: <AiFillHourglass />,
      },
      {
        title: "4K",
        icon: <AiOutlineVideoCamera />,
      },
      {
        title: "30 DAYS FREE",
        icon: <TbFreeRights />,
      },
    ],
  },
  {
    title: "PREMIUM",
    price: 20,
    options: [
      {
        title: "Vip",
        icon: <TbVip />,
      },
      {
        title: "Unlmited",
        icon: <AiFillHourglass />,
      },
      {
        title: "8K FORMAT",
        icon: <AiOutlineVideoCamera />,
      },
      {
        title: "40 DAYS FREE",
        icon: <TbFreeRights />,
      },
    ],
  },
  {
    title: "FREE TRIAL",
    price: 0,
    options: [
      {
        title: "VIP",
        icon: <TbVip />,
      },
      {
        title: "MAXIMAL 50 HOURS",
        icon: <AiFillHourglass />,
      },
      {
        title: "HD FORMAT",
        icon: <AiOutlineVideoCamera />,
      },
      {
        title: "14 DAYS FREE",
        icon: <TbFreeRights />,
      },
    ],
  },
];
const icons = [
  <TbVip />,
  <AiFillHourglass />,
  <AiOutlineVideoCamera />,
  <TbFreeRights />,
];

const SubscriptionPlan = ({ products }: { products: ProductInterface[] }) => {
  let allProducts;
  if (products)
    allProducts = products.reverse().map((item, i) => ({
      ...item,
      title: item.name,
      id: item.id,
      price: item.default_price.unit_amount / 100,
      priceId: item.default_price.id,
      options: item.description?.split(", ").map((el, i) => ({
        title: el,
        icon: icons[i],
      })),
    }));
  return (
    <div className={"min-h-screen flex flex-col  py-10"}>
      <div className="flex flex-col py-20 items-center w-full sm:space-y-2 md:space-y-4 text-center">
        <h1
          className={
            "text-2xl text-shadow-sm font-bold p-2 text-transparent md:text-5xl lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 to-blue-200"
          }
        >
          Flexible pricing for teams of any size.
        </h1>
        <p className={"text-md lg:text-3xl md:text-2xl text-shadow-sm"}>
          Relaxing with watching your favourite movies and tv series
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="md:px-4 md:grid md:gird-cols-2 lg:grid-cols-4 lg:gap-10 md:gap-5 gap-3 md:space-y-0 space-y-4">
          {/*    Card Plan*/}
          {allProducts &&
            allProducts.map((prod) => (
              <SubscriptionPlanCard key={prod.id} {...prod} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
