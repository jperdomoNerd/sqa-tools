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
const urlSegmented = {
  protocol: 'https://',
  subdomain: '',
  domain: 'cenpos.',
  extension: 'net/',
  restOfFolders: ''
}
function defineSubdomain(environment) {
  if (environment === 'https://webtest.cenpos.net/webpay/v7/html5/') return 'webtest.';
  if (environment === 'https://webqa.cenpos.net/webpay/v7/html5/') return 'webqa.';
  if (environment === 'https://webstaging.cenpos.net/webpay/v7/html5/') return 'webstaging.';
  if (environment === 'https://webstaging2.cenpos.net/webpay/v7/html5/') return 'webstaging2.';
  if (environment === 'https://www4.cenpos.net/webpay/v7/html5/') return 'wwww4.';
  if (environment === 'https://elavonwww.cenpos.net/webpay/v7/html5/') return 'elavonwww.';
  if (environment === 'https://elavon.cenpos.net/webpay/v7/html5/') return 'elavon.';
  return '';
}
function defineRestOfFolders(application) {
  if (application === 'POS Legacy') return 'posintegration/posintegration-html5/';
  if (application === 'Cashiering Legacy') return 'cashiering-html5/';
  if (application === 'POS Reports Legacy') return 'posintegration/posintegration-html5-reports/';
  if (application === 'SWP Cards') return 'simplewebpay/cards/';
  if (application === 'SWP Checks') return 'simplewebpay/checks/';
  if (application === 'Bridge API') return 'spa/app/bridge-api/';
  if (application === 'Webpay') return 'webpay/v7/html5/';
  if (application === 'ViewProcess') return 'viewprocess/';
  return '';
}
export function defineEndpointUrl(enviroment, application) {
  urlSegmented.subdomain = defineSubdomain(enviroment);
  urlSegmented.restOfFolders = defineRestOfFolders(application);
  return `${urlSegmented.protocol}${urlSegmented.subdomain}${urlSegmented.domain}${urlSegmented.extension}${urlSegmented.restOfFolders}`;
}

const blueFormData = {
  application: {
    value: 'POS Legacy',
    isShow: true
  },
  environment: {
    value: 'https://webtest.cenpos.net/webpay/v7/html5/',
    isShow: true
  },
  endpoint: {
    value: '',
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

const FormsContainer = ({ handleClick }) => {
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

  const endpointHandleChange = event => {
    setBlueForm({
      ...blueForm,
      endpoint: { ...blueForm.endpoint, value: event.target.value }
    });
  }

  const methodHandleChange = event => {
    setBlueForm({
      ...blueForm,
      method: { ...blueForm.method, value: event.target.value }
    });
  }

  const transactionHandleChange = event => {
    setBlueForm({
      ...blueForm,
      transaction: { ...blueForm.transaction, value: event.target.value }
    });
  }

  const responseTypeHandleChange = event => {
    setBlueForm({
      ...blueForm,
      responseType: { ...blueForm.responseType, value: event.target.value }
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
    let endpointUrl = defineEndpointUrl(
      blueForm.environment.value, blueForm.application.value);
    if (blueForm.environment.value === 'custom') {
      endpointUrl = blueForm.endpoint.value;
    }
    handleClick(endpointUrl);
  }

  return (
    <section className="forms-container">
      <button className="forms-container__button" onClick={setUrl}>Load Object                     </button>
      <BlueForm
        blueForm={blueForm}
        applicationHandleChange={applicationHandleChange}
        environmentHandleChange={environmentHandleChange}
        endpointHandleChange={endpointHandleChange}
        methodHandleChange={methodHandleChange}
        transactionHandleChange={transactionHandleChange}
        responseTypeHandleChange={responseTypeHandleChange}
        tokenTypeHandleChange={tokenTypeHandleChange}
        siteVerifyHandleChange={siteVerifyHandleChange}
      />
      {/* <GreenForm />
      <RedForm /> */}
    </section>
  );
}

export default FormsContainer;
