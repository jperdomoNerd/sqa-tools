import { useState } from 'react';
import FormsContainer from "./FormsContainer";
import ObjectContainer from "./ObjectContainer";

const SqaToolsContainer = () => {
  // State
  const [endpointUrl, setEndpointUrl] = useState('');

  const handleClick = url => {
    setEndpointUrl(url);
  }

  return (
    <div className="sqatools-container">
      <FormsContainer handleClick={handleClick} />
      <ObjectContainer endpointUrl={endpointUrl} />
    </div>
  );
}

export default SqaToolsContainer;