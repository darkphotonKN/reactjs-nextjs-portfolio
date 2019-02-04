import Router from 'next/router';
import NProgress from 'nprogress';

import Fade from 'react-reveal/Fade';

import Layout from '../components/shared/Layout';
import Menu from '../components/Landing/Menu';

Router.onRouteChangeStart = (url) => {
  // Start NProgress loaders on route change
  NProgress.start();
};

// check when route change is complete, then end NProgress
Router.onRouteChangeComplete = () => NProgress.done();
// also check for errors and stop the progress bar if there is one
Router.onRouteChangeError = () => NProgress.done();

const Index = () => {
  return (
    <Layout>
      <header>
        <h2 className="main-title">Kranti @darkphotonKN</h2>
      </header>
      <Menu />
    </Layout>
  );
};

export default Index;
