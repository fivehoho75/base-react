import React from 'react';
import cx from 'classnames';
import './responsive.scss';

const Responsive = ({ children, className, ...rest }) => (
  <div className={cx('common', 'responsive', className)} {...rest}>
    { children }
  </div>
);

export default Responsive;