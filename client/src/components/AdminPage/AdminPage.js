import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  Page, ConnectedAsync, Table, history,
} from 'state-template';

import * as actions from '../Campus/actions';
import * as selectors from '../Campus/selectors';
import columns from '../Campus/columns';

export class AdminPage extends React.Component {
  componentDidMount() {
    this.loadCampuses();
  }

  loadCampuses = () => {
    const { shouldFetch, getCampuses } = this.props;
    if (shouldFetch) {
      getCampuses();
    }
  }

  onClickRow = (e, row) => {
    history.push(`/campuses/${row.id}`);
  }

  render() {
    const { campuses } = this.props;

    return (
      <Page title={'Admin'}>
        <ConnectedAsync>
          <Table
            title={'Campuses'}
            data={campuses}
            columns={columns}
            rowEvents={{
              onClick: this.onClickRow,
            }}
          />
        </ConnectedAsync>
      </Page>
    );
  }
}

AdminPage.propTypes = {
  campuses: T.array.isRequired,
  shouldFetch: T.bool.isRequired,
  getCampuses: T.func.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  campuses: selectors.getCampuses(),
  shouldFetch: selectors.getShouldFetch(),
});

export const mapDispatchToProps = dispatch => ({
  getCampuses: () => dispatch(actions.getCampuses()),
});

const withRedux = connect(mapStateToProps, mapDispatchToProps)(AdminPage);

export default withRedux;
