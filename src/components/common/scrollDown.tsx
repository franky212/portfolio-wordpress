import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollDown = (): JSX.Element => {
  return (
    <div className="absolute text-foreground bottom-0 flex flex-col items-center inset-x-0 mb-4 z-10">
      <p className="mb-2">Scroll Down!</p>
      <FontAwesomeIcon
        icon={faChevronDown}
        bounce
        size="lg"
      />
    </div>
  );
};

export default ScrollDown;
