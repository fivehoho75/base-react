// @flow
import React from 'react';
import type { Node } from 'react';

type Props = {
  header: Node,
  children: Node,
}
const PageTemplate = ({ header, children }: Props) => (
  <div className="pageTemplate">
    <div className="headerArea">
      { header }
    </div>
    <div className="postArea">
      { children }
    </div>
  </div>
);

export default PageTemplate;