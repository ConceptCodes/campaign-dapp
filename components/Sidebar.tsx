import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

interface SidebarItemProps {
  title: string;
  link: string;
}

const SidebarItem = ({ title, link }: SidebarItemProps) => {
  const router = useRouter();
  const isActive = router.pathname === link;

  return (
    <li className="py-2">
      <Link
        href={link}
        className={`${
          isActive ? "bg-slate-300 text-blue-600 font-bold" : "bg-slate-200"
        } block px-4 py-2  hover:bg-slate-300`}
      >
        {title}
      </Link>
    </li>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <div className="w-1/6 bg-slate-200 h-screen">
        <ul className="py-4">
          <SidebarItem title="Campaigns" link="/" />
          <SidebarItem title="Brands" link="/brands" />
          <SidebarItem title="Creators" link="/creators" />
        </ul>
      </div>
      <main className="w-5/6 p-4">{children}</main>
    </div>
  );
};

export default Layout;
