// import styles from './DefaultLayout.module.scss';

import Content from '@/common/components/Content/Content';
import Header from '@/common/components/Header/Header';
import PropTypes from 'prop-types';

// import clsx from 'clsx';

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function DefaultLayout({ children }) {
  return (
    <>
      <Header></Header>
      <Content>{children}</Content>
    </>
  );
}

export default DefaultLayout;
