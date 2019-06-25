import React from 'react';
import {
  ConnectedAsync,
  Page,
  ButtonRow,
  Button,
  history,
} from 'state-template';


import VisitForm from '../VisitForm';

export class NewVisitPage extends React.Component {
  onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }

  onCancel = () => {
    history.push('/');
  }

  renderMenu = () => (
    <ButtonRow>
      <Button
        text={'Cancel'}
        onClick={this.onCancel}
        variant={'standout'}
        iconProps={{ name: 'close-mark' }}
      />

      <Button
        text={'Submit'}
        type={'submit'}
        variant={'primary'}
        iconProps={{ name: 'check-mark' }}
        className={'float-right'}
      />
      <Button
        text={'Save'}
        onClick={this.onToggleFilters}
        variant={'default'}
        iconProps={{ name: 'cloud-sync' }}
        className={'float-right'}
      />
    </ButtonRow>
  )

  render() {
    return (
      <Page title={'New Visit'}>
        <ConnectedAsync>

          <VisitForm
            renderMenu={this.renderMenu}
            onSubmit={this.onSubmit}
          />

        </ConnectedAsync>
      </Page>
    );
  }
}

export default NewVisitPage;
