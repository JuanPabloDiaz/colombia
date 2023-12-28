import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-black">
      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
