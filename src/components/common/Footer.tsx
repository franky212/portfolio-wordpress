import React from "react";
import { useGetMenuQuery } from "@/services/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Footer = (props: any): JSX.Element => {
  const { data: menu, isSuccess, isLoading } = useGetMenuQuery("footer-menu");
  return (
    <nav className="items-center py-8 border-solid border-t border-red container flex flex-col md:flex-row justify-center md:justify-between">
      <Link
        href="/"
        className="p-2 font-sans"
      >
        <div className="flex gap-2 md:gap-4 items-center">
          <FontAwesomeIcon
            icon={faLaptopCode}
            size="lg"
          />
          <p className="font-bold font-sans text-2xl md:text-xl">
            Frank Delaguila
          </p>
        </div>
      </Link>
      <div className="flex gap-8">
        {menu?.items.map((link: any) => (
          <Link
            key={link.ID}
            className="p-2"
            href={`/${link.slug}`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Footer;
