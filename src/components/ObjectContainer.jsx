import EndpointName from './EndpointName';
import ObjectView from './ObjectView';

const ObjectContainer = ({ endpointUrl }) => {
  return (
    <section className="object-container">
      <EndpointName endpointUrl={endpointUrl} />
      <ObjectView />
    </section>
  );
}

export default ObjectContainer;
