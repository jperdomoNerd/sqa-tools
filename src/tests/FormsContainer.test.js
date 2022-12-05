import renderer from 'react-test-renderer';
import FormsContainer, { defineFieldsToDisplayBlueForm, defineEndpointUrl } from '../components/FormsContainer';

describe('FormsContainer Component', () => {
  
  it('<FormsContainer /> renders correctly', () => {
    const tree = renderer.create(<FormsContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('Functions of the FormsContainer component', () => {
  
  describe('defineFieldsToDisplayBlueForm', () => {

    test('Does not show any fields (returns all properties false)', () => {
      const result = defineFieldsToDisplayBlueForm('ViewProcess');
      expect(result).toEqual({
        method: { isShow: false },
        transaction: { isShow: false },
        responseType: { isShow: false },
        tokenType: { isShow: false },
        siteVerify: { isShow: false }
      });
    });

    test('Only show method and transaction', () => {
      const result = defineFieldsToDisplayBlueForm('POS Reports Legacy');
      expect(result).toEqual({
        method: { isShow: true },
        transaction: { isShow: true },
        responseType: { isShow: false },
        tokenType: { isShow: false },
        siteVerify: { isShow: false }
      });
    });

    test('Only show tokenType and siteVerify', () => {
      const result = defineFieldsToDisplayBlueForm('SWP Checks');
      expect(result).toEqual({
        method: { isShow: false },
        transaction: { isShow: false },
        responseType: { isShow: false },
        tokenType: { isShow: true },
        siteVerify: { isShow: true }
      });
    });

  });

  describe('defineEndpointUrl', () => {
    
    test('Return https://webtest.cenpos.net/simplewebpay/cards/', () => {
      const result = defineEndpointUrl('https://webtest.cenpos.net/webpay/v7/html5/', 'SWP Cards');
      expect(result).toEqual('https://webtest.cenpos.net/simplewebpay/cards/');
    });
    
    test('Return https://webqa.cenpos.net/simplewebpay/checks/', () => {
      const result = defineEndpointUrl('https://webqa.cenpos.net/webpay/v7/html5/', 'SWP Checks');
      expect(result).toEqual('https://webqa.cenpos.net/simplewebpay/checks/');
    });

    test('Return https://webstaging.cenpos.net/simplewebpay/checks/', () => {
      const result = defineEndpointUrl('https://webstaging.cenpos.net/webpay/v7/html5/', 'SWP Checks');
      expect(result).toEqual('https://webstaging.cenpos.net/simplewebpay/checks/');
    });

    test('Return https://webtest.cenpos.net/cashiering-html5/', () => {
      const result = defineEndpointUrl('https://webtest.cenpos.net/webpay/v7/html5/', 'Cashiering Legacy');
      expect(result).toEqual('https://webtest.cenpos.net/cashiering-html5/');
    });

  });

});
