import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-screen bg-black border-2 border-fuchsia-700">
      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
