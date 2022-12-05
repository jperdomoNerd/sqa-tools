import ApplicationOptions from "./ApplicationOptions";

const BlueForm = ({ blueForm,
  applicationHandleChange,
  environmentHandleChange,
  endpointHandleChange,
  methodHandleChange,
  transactionHandleChange,
  responseTypeHandleChange,
  tokenTypeHandleChange,
  siteVerifyHandleChange }) => {
  return (
    <form className="form form--blue">
      <div className="form__input-container">
        <label className="form__label">Application:</label>
        <select className="form__input" value={blueForm.application.value} onChange={applicationHandleChange}>
          <option value="POS Legacy">POS Legacy</option>
          <option value="Cashiering Legacy">Cashiering Legacy</option>
          <option value="POS Reports Legacy">POS Reports Legacy</option>
          <option value="Bridge API">Bridge API</option>
          <option value="Webpay">Webpay</option>
          <option value="SWP Cards">SWP Cards</option>
          <option value="SWP Checks">SWP Checks</option>
          <option value="ViewProcess">ViewProcess</option>
        </select>
      </div>
      <div className="form__input-container">
        <label className="form__label">Environment:</label>
        <select className="form__input" value={blueForm.environment.value} onChange={environmentHandleChange}>
          <option value="https://webtest.cenpos.net/webpay/v7/html5/">Dev</option>
          <option value="https://webqa.cenpos.net/webpay/v7/html5/">QA</option>
          <option value="https://webstaging.cenpos.net/webpay/v7/html5/">Staging: KNX</option>
          <option value="https://webstaging2.cenpos.net/webpay/v7/html5/">Staging: OBC</option>
          <option value="https://www4.cenpos.net/webpay/v7/html5/">Prod: LB</option>
          <option value="https://elavonwww.cenpos.net/webpay/v7/html5/">Prod: KNX</option>
          <option value="https://elavon.cenpos.net/webpay/v7/html5/">Prod: OBC</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      {blueForm.environment.value === 'custom' &&
        <div className="form__input-container">
          <label className="form__label">Endpoint:</label>
          <input className="form__input" value={blueForm.endpoint.value} onChange={endpointHandleChange} />
        </div>
      }

      {blueForm.method.isShow &&
        <div className="form__input-container">
          <label className="form__label">Method:</label>
          <select className="form__input" value={blueForm.method.value} onChange={methodHandleChange}>
            <option value="POST">POST</option>
            <option value="GET">GET</option>
          </select>
        </div>
      }

      {blueForm.transaction.isShow &&
        <div className="form__input-container">
          <label className="form__label">Transaction:</label>
          <select className="form__input" value={blueForm.transaction.value} onChange={transactionHandleChange} >
            <ApplicationOptions application={blueForm.application.value} />
          </select>
        </div>
      }

      {blueForm.responseType.isShow &&
        <div className="form__input-container">
          <label className="form__label">Response Type:</label>
          <select className="form__input" value={blueForm.responseType.value} onChange={responseTypeHandleChange}>
            <option value="none">Redirect</option>
            <option value="callback">Callback</option>
          </select>
        </div>
      }

      {blueForm.tokenType.isShow &&
        <div className="form__input-container">
          <label className="form__label">Token Type:</label>
          <select className="form__input" value={blueForm.tokenType.value} onChange={tokenTypeHandleChange}>
            <option value="none">Standard</option>
            <option value="crypto">Crypto</option>
            <option value="token19">Token19</option>
          </select>
        </div>
      }

      {blueForm.siteVerify.isShow &&
        <div className="form__input-container">
          <label className="form__label">Site Verify:</label>
          <select className="form__input" value={blueForm.siteVerify.value} onChange={siteVerifyHandleChange}>
            <option value="genericcontroller">GenericController</option>
            <option value="apiecommerce">Ecommerce API</option>
          </select>
        </div>
      }
    </form>
  );
}

export default BlueForm;
