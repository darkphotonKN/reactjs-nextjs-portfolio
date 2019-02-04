const Layout = (props) => {
  return (
    <div className="app">
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
