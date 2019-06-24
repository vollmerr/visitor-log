import React from 'react';
import { Page } from 'state-template';

import Campus from '../Campus';

export class AdminPage extends React.Component {
  render() {
    return (
      <Page title={'Admin'}>
        <Campus />
      </Page>
    );
  }
}

export default AdminPage;
