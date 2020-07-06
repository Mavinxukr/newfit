import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateWrapper.scss';
import HeaderTemplate from '../HeaderTemplate/HeaderTemplate';
import FooterTemplate from '../FooterTemplate/FooterTemplate';

const TemplateWrapper = ({ children }) => (
  <div className={styles.wrapper}>
    <HeaderTemplate />
    <main className={styles.content}>
      {children}
    </main>
    <FooterTemplate />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node,
};

export default TemplateWrapper;
