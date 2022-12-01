const GreenForm = () => {
  return (
    <form className="form form--green">
      <h3 className="form__title">Parameters in use:</h3>
      <div className="form__input-container">
        <label className="form__label">apikey:</label>
        <input className="form__input" type="text" />
      </div>
      <div className="form__input-container">
        <label className="form__label">aeskey:</label>
        <input className="form__input" type="text" />
      </div>
    </form>
  );
}