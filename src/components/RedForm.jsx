const RedForm = () => {
  return (
    <form className="form form--red">
      <h3 className="form__title">Parameters available</h3>
      <div className="form__input-container">
        <label className="form__label">abanumber:</label>
        <input className="form__input" type="text" />
      </div>
      <div className="form__input-container">
        <label className="form__label">accountnumber:</label>
        <input className="form__input" type="text" />
      </div>
      <div className="form__input-container">
        <label className="form__label">address:</label>
        <input className="form__input" type="text" />
      </div>
    </form>
  );
}