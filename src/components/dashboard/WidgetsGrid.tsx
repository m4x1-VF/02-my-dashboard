"use client";
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const cart = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        title={cart.toString()}
        subtitle={"Productos agregados"}
        label={"Productos"}
        icon={<IoCartOutline size={50} className="text-blue-500" />}
        href={"/dashboard/counter"}
      />
      {/* <SimpleWidget /> */}
    </div>
  );
};
