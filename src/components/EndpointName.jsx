const EndpointName = ({ endpointUrl }) => {
  return (
    <div className="endpoint-name">
      <label className="endpoint-name__label" htmlFor="endpoint-name">Endpoint:</label>
      <input className="endpoint-name__input" id="endpoint-name" type="text" value={endpointUrl} readOnly />
    </div>
  );
}

export default EndpointName;
