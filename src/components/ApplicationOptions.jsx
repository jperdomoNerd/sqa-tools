import React from 'react';

const ApplicationOptions = ({ application }) => {
  if (application === 'POS Legacy') {
    return (
      <React.Fragment>
        <option value="sale">sale</option>
        <option value="achcredit">achcredit</option>
        <option value="achdebit">achdebit</option>
        <option value="activate">activate</option>
        <option value="auth">auth</option>
        <option value="createtoken">createtoken</option>
        <option value="credit">credit</option>
        <option value="ebppinvoice">ebppinvoice</option>
        <option value="force">force</option>
        <option value="guarantee">guarantee</option>
        <option value="inquire">inquire</option>
        <option value="moto">moto</option>
        <option value="reauth">reauth</option>
        <option value="recurringauth">recurringauth</option>
        <option value="recurringcredit">recurringcredit</option>
        <option value="recurringsale">recurringsale</option>
        <option value="reload">reload</option>
        <option value="repeatauth">repeatauth</option>
        <option value="repeatsale">repeatsale</option>
        <option value="return">return</option>
        <option value="reversal">reversal</option>
        <option value="salemoto">salemoto</option>
        <option value="signature">signature</option>
        <option value="tokencheck">tokencheck</option>
        <option value="usechecktoken">usechecktoken</option>
        <option value="voiceauth">voiceauth</option>
        <option value="void">void</option>
      </React.Fragment>
    );
  } if (application === 'Cashiering Legacy') {
    return (
      <React.Fragment>
        <option value="sale">sale</option>
        <option value="auth">auth</option>
        <option value="cashoperations">cashoperations</option>
        <option value="credit">credit</option>
        <option value="depositslip">depositslip</option>
        <option value="return">return</option>
      </React.Fragment>
    );
  } if (application === 'POS Reports Legacy') {
    return (
      <React.Fragment>
        <option value="reprint">reprint</option>
        <option value="batchreport">batchreport</option>
        <option value="cashsummary">cashsummary</option>
        <option value="checksummary">checksummary</option>
        <option value="ebppinvoice">ebppinvoice</option>
        <option value="transactions">transactions</option>
        <option value="reports">reports</option>
      </React.Fragment>
    ); 
  } if (application === 'Bridge API') {
    return (
      <React.Fragment>
        <option value="GetGiftCardSwipe">GetGiftCardSwipe</option>
        <option value="Disclaimer">Disclaimer</option>
        <option value="GetSignature">GetSignature</option>
      </React.Fragment>
    );
  } if (application === 'Webpay') {
    return (
      <React.Fragment>
        <option value="sale">sale</option>
        <option value="sale19">sale19</option>
        <option value="auth">auth</option>
        <option value="auth19">auth19</option>
        <option value="createtoken">createtoken</option>
        <option value="createtoken19">createtoken19</option>
      </React.Fragment>
    );
  }
  return (<React.Fragment></React.Fragment>);
}

export default ApplicationOptions;
