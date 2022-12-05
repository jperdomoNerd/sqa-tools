import renderer from 'react-test-renderer';
import ObjectContainer from '../components/ObjectContainer';

describe('ObjectContainer Component', () => {
  
  it('<OjbectContainer /> renders correctly', () => {
    const tree = renderer.create(<ObjectContainer endpointUrl='https://😎😵🤠' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
