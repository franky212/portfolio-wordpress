import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Loading = (): JSX.Element => {
  const router = useRouter();
  const [showLoading, setShowLoader] = useState(false);

  const handleRouteChange = () => {
    setShowLoader(true);
  };

  const handleRouteComplete = () => {
    setShowLoader(false);
  };
  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);
  return (
    <div
      className={`${
        showLoading ? "opacity-100" : "opacity-0"
      } fixed flex items-center transition-all pointer-events-none justify-center bg-background top-0 pointer-events-none left-0 text-foreground w-screen h-screen z-[51]`}
    >
      <h1 className="flex flex-col text-2xl font-bold opacity-100">
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          size="2xl"
          className="mb-4"
        />
        Loading the next page...
      </h1>
    </div>
  );
};

export default Loading;
