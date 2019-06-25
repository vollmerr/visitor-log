import React from 'react';
import {
  ConnectedAsync,
  Page,
  Table,
  ButtonRow,
  Button,
  LinkButton,
  history,
} from 'state-template';

import fakeVisits from '../Visits/fakeVisits';
import { columns } from '../Visits/data';

import Filters from './Filters';

/*
 TODO: filtering...
  - custom columns (local state?)
  - data in fields (by status, date, etc) (date range?)
*/

export class VisitsPage extends React.Component {
  state = {
    data: fakeVisits,
    showFilters: false,
  }

  onToggleFilters = () => {
    this.setState(state => ({ showFilters: !state.showFilters }));
  }

  onClickRow = (e, row) => {
    history.push(`/visits/${row.id}`);
  }

  // TODO: better.........
  applyFilters = (filters) => {
    console.log('applying: ', filters);
    const data = fakeVisits.filter(x => (
      filters.status.includes(x.status)
    ));

    this.setState({ data });
  }

  renderMenu = () => {
    const { showFilters } = this.state;

    return (
      <ButtonRow>
        <LinkButton
          text={'New'}
          to={'/visits/new'}
          variant={'primary'}
          iconProps={{ name: 'plus-mark' }}
        />
        <Button
          text={'Filters'}
          onClick={this.onToggleFilters}
          variant={'default'}
          iconProps={{ name: 'filter-solid' }}
          active={showFilters}
        />
      </ButtonRow>
    );
  }

  render() {
    const { data, showFilters } = this.state;

    return (
      <Page title={'Visits'}>
        <ConnectedAsync>

          {showFilters && <Filters onChange={this.applyFilters} />}

          <Table
            menu={this.renderMenu()}
            columns={columns}
            data={data}
            rowEvents={{
              onClick: this.onClickRow,
            }}
          />

        </ConnectedAsync>
      </Page>
    );
  }
}

export default VisitsPage;
