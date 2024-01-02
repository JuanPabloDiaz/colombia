import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="flex w-screen flex-col items-center bg-white">
      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
