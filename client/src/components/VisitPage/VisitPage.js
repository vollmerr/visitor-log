import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  ConnectedAsync,
  Page,
} from 'state-template';

import VisitForm from '../VisitForm';

import fakeVisits from '../Visits/fakeVisits';

export class VisitPage extends React.Component {
  render() {
    const { match } = this.props;
    const visit = fakeVisits.find(x => x.id === match.params.id);

    return (
      <Page title={`Visit - ${visit.logNumber}`}>
        <ConnectedAsync>

          <VisitForm initialValues={visit} disabled />

        </ConnectedAsync>
      </Page>
    );
  }
}

const withRouting = withRouter(VisitPage);

export default withRouting;
