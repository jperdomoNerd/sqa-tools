import { defineFieldsToDisplayBlueForm } from '../components/FormsContainer';

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

});
