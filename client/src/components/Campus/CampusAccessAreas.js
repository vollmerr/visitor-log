import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ConnectedAsync } from 'state-template';

import * as selectors from './selectors';

export class CampusAccessAreas extends React.Component {
  render() {
    const { accessAreas } = this.props;

    return (
      <ConnectedAsync>
        <h2>Access Areas</h2>
        <pre>{JSON.stringify(accessAreas, null, 2)}</pre>
      </ConnectedAsync>
    );
  }
}

CampusAccessAreas.propTypes = {
  accessAreas: T.array.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  accessAreas: (state, props) => selectors.getCampusAccessAreas(props.campusId)(state),
});

const withRedux = connect(mapStateToProps)(CampusAccessAreas);

export default withRedux;
