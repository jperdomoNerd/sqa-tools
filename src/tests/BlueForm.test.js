import renderer from 'react-test-renderer';
import BlueForm from '../components/BlueForm';

const blueForm = {
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
const applicationHandleChange = () => {};
const environmentHandleChange = () => {};
const tokenTypeHandleChange = () => {};
const siteVerifyHandleChange = () => {};

describe('BlueForm Component', () => {
  
  it('<BlueForm /> renders correctly', () => {
    const tree = renderer.create(<BlueForm blueForm={ blueForm }
      applicationHandleChange={ applicationHandleChange() }
      environmentHandleChange={ environmentHandleChange() }
      tokenTypeHandleChange={ tokenTypeHandleChange() }
      siteVerifyHandleChange={ siteVerifyHandleChange() }/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
