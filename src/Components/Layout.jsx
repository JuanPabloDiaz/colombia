import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="flex w-screen flex-col items-center border-2 border-fuchsia-700 bg-white">
      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
