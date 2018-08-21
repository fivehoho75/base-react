// @flow
import React from 'react';
import type { Node } from 'react';

type Props = {
  header: Node,
}
const PageTemplate = ( { header }: Props ) => (
  <div className="pageTemplate">
    <div className="headerArea">
      { header }
    </div>
  </div>
);

export default PageTemplate;