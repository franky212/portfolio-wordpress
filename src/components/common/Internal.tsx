import clsx from "clsx";
import Navigation from "./Navigation";

interface InternalTypes {
  children?: React.ReactNode;
}

const Internal = ({ children }: InternalTypes): JSX.Element => {
  return (
    <main>
      <Navigation />
      {children ? children : null}
    </main>
  );
};

export default Internal;
