import React from 'react';
import { FieldArray } from 'redux-form';
import {
  Button,
  FieldInput,
  FieldSelect,
} from 'state-template';

import schema from '../Visits/schema';

const { visitors } = schema;

class Visitors extends React.Component {
  // attach array indexed name to field name (ex: orderDetails[1].quantity)
  withNamePrefix = (detail, values) => ({
    ...values,
    name: `${detail}.${values.name}`,
  })

  renderVisitor = (fields, field, index) => {
    const { disabled } = this.props;

    return (
      <li
        key={`visitor-${index}`}
        className={'row'}
        data-testid={`visitor-${index}`}
      >
        <FieldInput {...this.withNamePrefix(field, visitors.visitorName)} className={'col-md-4'} disabled={disabled} />
        <FieldSelect {...this.withNamePrefix(field, visitors.securedArea)} className={'col-md-3'} disabled={disabled} />
        <FieldSelect {...this.withNamePrefix(field, visitors.badgeType)} className={'col-md-3'} disabled={disabled} />

        {
          !disabled && (
            index === fields.length - 1 ? (
              <div className={'col-md-2 d-flex align-items-center'}>
                <Button
                  text={'Add'}
                  variant={'primary'}
                  className={'w-100 d-print-none'}
                  iconProps={{ name: 'plus-mark' }}
                  onClick={() => fields.push({})}
                />
              </div>
            ) : (
              <div className={'col-md-2 d-flex align-items-center'}>
                <Button
                  text={'Remove'}
                  variant={'default'}
                  className={'w-100 d-print-none'}
                  iconProps={{ name: 'close-line' }}
                  onClick={() => fields.remove(index)}
                />
              </div>
            )
          )
        }
      </li>
    );
  }

  renderVisitors = ({ fields }) => {
    if (!fields.length) {
      fields.push({});
    }

    return (
      <div role={'group'} aria-labelledby={'visitors'}>
        <h3 id={'visitors'}>Visitors</h3>

        <ul>
          {fields.map((field, index) => (
            this.renderVisitor(fields, field, index)
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <FieldArray
        name={visitors.name}
        component={this.renderVisitors}
      />
    );
  }
}

export default Visitors;
