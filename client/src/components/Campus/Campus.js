import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ConnectedAsync } from 'state-template';

import * as actions from './actions';
import * as selectors from './selectors';

export class Campus extends React.Component {
  componentDidMount() {
    this.loadCampuses();
  }

  loadCampuses = () => {
    const { shouldFetch, getCampuses } = this.props;
    if (shouldFetch) {
      getCampuses();
    }
  }

  render() {
    const { campuses } = this.props;

    return (
      <ConnectedAsync>
        <pre>{JSON.stringify(campuses, null, 2)}</pre>
      </ConnectedAsync>
    );
  }
}

Campus.propTypes = {
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

const withRedux = connect(mapStateToProps, mapDispatchToProps)(Campus);

export default withRedux;
