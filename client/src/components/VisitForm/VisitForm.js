import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import {
  FieldInput, FieldSelect, FieldDate, FieldRadioButtons,
} from 'state-template';

import schema from '../Visits/schema';


export class VisitForm extends React.Component {
  renderMenu = (className) => {
    const { renderMenu } = this.props;

    if (renderMenu) {
      return (
        <div className={className}>
          {renderMenu()}
        </div>
      );
    }

    return null;
  };

  render() {
    const {
      disabled,
      renderMenu,
      handleSubmit,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        {renderMenu && renderMenu()}
        {renderMenu && <div className={'m-b-md'} />}

        <div className={'group'}>
          <FieldInput {...schema.fiscalYear} className={'third'} disabled={disabled} />
          <FieldDate {...schema.visitStartDate} className={'third'} disabled={disabled} />
          <FieldDate {...schema.visitEndDate} className={'third'} disabled={disabled} />

          <FieldInput {...schema.visitTime} className={'half'} disabled={disabled} />
          <FieldRadioButtons {...schema.onGoing} className={'half'} disabled={disabled} inline />

          <FieldInput {...schema.contactPrimary} className={'full-width'} disabled={disabled} />
          <FieldInput {...schema.contactSecondary} className={'full-width'} disabled={disabled} />
        </div>

        <div className={'group'}>
          <FieldSelect {...schema.campus} className={'full-width'} disabled={disabled} />

          <div className={'half'}>
            <FieldSelect {...schema.room} disabled={disabled} />
            <FieldInput {...schema.roomOther} disabled={disabled} />
          </div>

          <div className={'half'}>
            <FieldSelect {...schema.accessArea} disabled={disabled} />
            <FieldInput {...schema.accessAreaOther} disabled={disabled} />
          </div>
        </div>

        <div className={'group'}>
          <FieldInput {...schema.companyName} className={'full-width'} disabled={disabled} />
          <FieldInput {...schema.visitReason} className={'full-width'} disabled={disabled} />
          <FieldInput {...schema.specialInstructions} className={'full-width'} disabled={disabled} />
        </div>

        <div>
          Visitors...
        </div>

        {renderMenu && <div className={'m-t-md'} />}
        {renderMenu && renderMenu()}
      </form>
    );
  }
}

VisitForm.propTypes = {
  // handleSubmit: T.func.isRequired,
  // pristine: T.bool.isRequired,
  // initialValues: T.object,
  // officeValue: T.string,
  // getOfficialList: T.func.isRequired,
  // updateOfficial: T.func.isRequired,
};

VisitForm.defaultProps = {
  // initialValues: null,
  // officeValue: null,
};

export const mapStateToProps = createStructuredSelector({
  // initialValues: selectors.getOfficial(), // populate inital form values,
  // officeValue: state => formValueSelector('ProfileForm')(state, 'office'),
});

export const mapDispatchToProps = dispatch => ({
  // getOfficialList: () => dispatch(actions.getOfficialListRequest()),
  // updateOfficial: values => dispatch(actions.updateOfficialRequest(values)),
});

const withReduxForm = reduxForm({ form: 'ProfileForm', enableReinitialize: true })(VisitForm);
const withRedux = connect(mapStateToProps, mapDispatchToProps)(withReduxForm);

export default withRedux;
