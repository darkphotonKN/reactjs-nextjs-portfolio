import Router from 'next/router';
import NProgress from 'nprogress';

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
        <h2 className="main-title">KRANTI NEBHWANI</h2>
        <p className="main-desc">
          <span>web developer</span>
          <i class="fas fa-circle" />
          <span>frontend engineer</span>
          <i class="fas fa-circle" />
          <span>tech enthusiast</span>
        </p>
      </header>
      <Menu />
    </Layout>
  );
};

export default Index;
