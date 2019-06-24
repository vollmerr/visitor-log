import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ConnectedAsync } from 'state-template';

import * as selectors from './selectors';

export class CampusRooms extends React.Component {
  render() {
    const { rooms } = this.props;
    console.log('props: ', this.props);
    return (
      <ConnectedAsync>
        <h2>ROOMS</h2>
        <pre>{JSON.stringify(rooms, null, 2)}</pre>
      </ConnectedAsync>
    );
  }
}

CampusRooms.propTypes = {
  rooms: T.array.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  rooms: (state, props) => selectors.getCampusRooms(props.campusId)(state),
});

const withRedux = connect(mapStateToProps)(CampusRooms);

export default withRedux;
