import { useState } from 'react';
import BlueForm from './BlueForm';

export function defineFieldsToDisplayBlueForm (_applicationValue) {
  if (
    ['POS Legacy', 'Cashiering Legacy',
      'POS Reports Legacy', 'Bridge API'].find(
        application => application === _applicationValue
  )) {
    return {
      method: { isShow: true },
      transaction: { isShow: true },
      responseType: { isShow: false },
      tokenType: { isShow: false },
      siteVerify: { isShow: false }
    };
  }
  if (_applicationValue === 'Webpay') {
    return {
      method: { isShow: false },
      transaction: { isShow: true },
      responseType: { isShow: true },
      tokenType: { isShow: false },
      siteVerify: { isShow: false }
    };
  }
  if (_applicationValue === 'SWP Cards'
    || _applicationValue === 'SWP Checks') {
      return {
        method: { isShow: false },
        transaction: { isShow: false },
        responseType: { isShow: false },
        tokenType: { isShow: true },
        siteVerify: { isShow: true }
      }
  }
  if (_applicationValue === 'ViewProcess') {
    return {
      method: { isShow: false },
      transaction: { isShow: false },
      responseType: { isShow: false },
      tokenType: { isShow: false },
      siteVerify: { isShow: false }
    }
  }
  return {
    method: { isShow: false },
    transaction: { isShow: false },
    responseType: { isShow: false },
    tokenType: { isShow: false },
    siteVerify: { isShow: false }
  }
}

let blueFormData = {
  application: {
    value: 'POS Legacy',
    isShow: true
  },
  environment: {
    value: 'https://webtest.cenpos.net/webpay/v7/html5/',
    isShow: true
  },
  tokenType: {
    value: 'none',
    isShow: false
  },
  siteVerify: {
    value: 'genericcontroller',
    isShow: false
  },
  method: {
    value: 'POST',
    isShow: true
  },
  transaction: {
    value: 'sale',
    isShow: true
  },
  responseType: {
    value: 'none',
    isShow: false
  }
};

const FormsContainer = props => {
  // State
  const [blueForm, setBlueForm] = useState(blueFormData);

  // Events
  const applicationHandleChange = event => {
    const fieldsToShow = defineFieldsToDisplayBlueForm(event.target.value);
    let copyBlueForm = blueForm;
    copyBlueForm.application.value = event.target.value;
    copyBlueForm.method.isShow = fieldsToShow.method.isShow;
    copyBlueForm.transaction.isShow = fieldsToShow.transaction.isShow;
    copyBlueForm.responseType.isShow = fieldsToShow.responseType.isShow;
    copyBlueForm.tokenType.isShow = fieldsToShow.tokenType.isShow;
    copyBlueForm.siteVerify.isShow = fieldsToShow.siteVerify.isShow;
    setBlueForm({ ...copyBlueForm });
  }

  const environmentHandleChange = event => {
    setBlueForm({
      ...blueForm,
      environment: { ...blueForm.environment, value: event.target.value }
    });
  }

  const tokenTypeHandleChange = event => {
    setBlueForm({
      ...blueForm,
      tokenType: { ...blueForm.tokenType, value: event.target.value }
    });
  }

  const siteVerifyHandleChange = event => {
    setBlueForm({
      ...blueForm,
      siteVerify: { ...blueForm.siteVerify, value: event.target.value }
    });
  }

  // Functions
  const setUrl = () => {
    let endpointUrl = 'https://😎😵🤠';
    props.handleClick(endpointUrl);
  }

  return (
    <section className="forms-container">
      <button className="forms-container__button" onClick={setUrl}>Load Object                     </button>
      <BlueForm
        blueForm={blueForm}
        applicationHandleChange={applicationHandleChange}
        environmentHandleChange={environmentHandleChange}
        tokenTypeHandleChange={tokenTypeHandleChange}
        siteVerifyHandleChange={siteVerifyHandleChange}
      />
      {/* <GreenForm />
      <RedForm /> */}
    </section>
  );
}

export default FormsContainer;