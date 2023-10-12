import Navigation from "./Navigation";
import Footer from "./Footer";

interface InternalTypes {
  children?: React.ReactNode;
  hideFooter?: boolean;
}

const Internal = ({
  children,
  hideFooter = false,
}: InternalTypes): JSX.Element => {
  return (
    <main>
      <Navigation />
      {children ? children : null}
      {!hideFooter ? <Footer /> : null}
    </main>
  );
};

export default Internal;
