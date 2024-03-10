import Image from "next/image";
import {
  IoBrowsersOutline,
  IoBugOutline,
  IoCalculator,
  IoHeartOutline,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";
import Link from "next/link";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Data Overview",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Counter Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoBugOutline size={40} />,
    title: "Pokemons",
    subTitle: "Pokemon List",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartOutline size={40} />,
    title: "Favoritos",
    subTitle: "Favourite Pokemons",
  },
];

export const Sidebar = () => {
  return (
    <section
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-80 left-0 h-screen"
    >
      <section id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white flex gap-2 items-center">
          <IoLogoReact />
          <span>React</span>
          <span className="text-blue-500">18</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </section>
      <section id="profile" className="px-6 py-10">
        <p className="text-slate-500 mb-2">Welcome</p>
        <Link href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="/avatar-400.jpg"
              alt="avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Maxi Vilariño</span>
        </Link>
      </section>

      <nav id="nav" className="w-full px-6">
        <ul>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path} {...item} />
          ))}
        </ul>
      </nav>
    </section>
  );
};
