import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  ConnectedAsync, Page, api,
} from 'state-template';

import * as actions from './actions';
import * as selectors from './selectors';

export class Home extends React.Component {
  componentDidMount() {
    this.loadExampleData();
  }

  // refetches if past delay
  loadExampleData = () => {
    const { lastFetched, getExampleData } = this.props;
    if (api.shouldFetch(lastFetched)) {
      getExampleData();
    }
  }

  render() {
    const { exampleData } = this.props;

    return (
      <Page title={'Home'}>
        <ConnectedAsync>
          {/* <ul>
            {
              exampleData.map(x => (
                <li key={x.id}>{JSON.stringify(x)}</li>
              ))
            }
          </ul> */}
        </ConnectedAsync>
      </Page>
    );
  }
}

Home.propTypes = {
  exampleData: T.array.isRequired,
  lastFetched: T.number,
  getExampleData: T.func.isRequired,
};

Home.defaultProps = {
  lastFetched: null,
};

export const mapStateToProps = createStructuredSelector({
  exampleData: selectors.getExampleData(),
  lastFetched: selectors.getLastFetched(),
});

export const mapDispatchToProps = dispatch => ({
  getExampleData: () => dispatch(actions.getExampleData()),
});

const withRedux = connect(mapStateToProps, mapDispatchToProps)(Home);

export default withRedux;
