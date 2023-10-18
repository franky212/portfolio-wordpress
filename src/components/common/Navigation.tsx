import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

import { Skeleton } from "../ui/skeleton";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { cn } from "@/utils/utils";
import { Button } from "../ui/button";
import { useGetMenuQuery } from "@/services/navigation";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navigation = (props: any): JSX.Element => {
  const [colorChange, setColorChange] = useState<boolean>(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 0) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  const { data: menu, isSuccess, isLoading } = useGetMenuQuery("primary-menu");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);
  return (
    <nav
      className={`${
        colorChange ? "bg-background" : ""
      } transition-colors text-foreground fixed flex gap-8 justify-between items-center w-full top-0 inset-x-0 p-4 md:p-8 z-20`}
    >
      {isSuccess && !isLoading ? (
        <>
          <Link
            href="/"
            className="p-2 font-sans"
          >
            <div className="flex gap-2 md:gap-4 items-center">
              <FontAwesomeIcon
                icon={faLaptopCode}
                size="2x"
              />
              <p className="font-bold font-sans text-2xl md:text-4xl">
                Frank Delaguila
              </p>
            </div>
          </Link>
          {isTabletOrMobile || menu?.items.length >= 4 ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-gray-700">
                  <FontAwesomeIcon
                    icon={faBars}
                    size="lg"
                    className="text-white"
                  />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <Link
                    href="/"
                    className="p-2"
                  >
                    <div className="flex gap-2 md:gap-4 items-center">
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        size="2x"
                      />
                      <p className="font-bold font-sans text-2xl md:text-3xl">
                        Frank Delaguila
                      </p>
                    </div>
                  </Link>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <Link
                    href="/"
                    className="p-2"
                  >
                    Home
                  </Link>
                  {menu.items?.map((link: any) => (
                    <Link
                      key={link.ID}
                      href={`/${link.slug}`}
                      className="p-2"
                    >
                      {link.title}
                    </Link>
                  ))}
                  <Link
                    href="/portfolio"
                    className="p-2"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/blog"
                    className="p-2"
                  >
                    Blog
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex gap-4">
              <Link href="/">
                <Button
                  size={"lg"}
                  variant={"ghost"}
                >
                  Home
                </Button>
              </Link>
              {menu?.items.map((link: any) => (
                <Link
                  key={link.ID}
                  href={`/${link.slug}`}
                  className="w-full"
                >
                  <Button
                    size={"lg"}
                    variant={"ghost"}
                  >
                    {link.title}
                  </Button>
                </Link>
              ))}
              <Link href="/portfolio">
                <Button
                  variant={"ghost"}
                  size={"lg"}
                >
                  Portfolio
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  variant={"ghost"}
                  size={"lg"}
                >
                  Blog
                </Button>
              </Link>
            </div>
          )}
        </>
      ) : (
        <Skeleton className="bg-accent h-12 w-full" />
      )}
    </nav>
  );
};

export default Navigation;
