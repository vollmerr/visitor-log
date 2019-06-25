import React from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import {
  FieldInput, FieldSelect, FieldDate, FieldRadioButtons, FieldCheckboxes,
} from 'state-template';

// TODO: base off mapping...
const statusOptions = [
  { value: 'draft', label: 'Draft' },
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
];

export class Filters extends React.Component {
  render() {
    return (
      <form>
        <FieldCheckboxes
          name={'status'}
          label={'Status'}
          options={statusOptions}
        />
      </form>
    );
  }
}

const withReduxForm = reduxForm({ form: 'FiltersForm' })(Filters);

export default withReduxForm;
