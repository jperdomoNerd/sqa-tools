import renderer from 'react-test-renderer';
import GreenForm from '../components/GreenForm';

describe('GreenForm Component', () => {
  
  it('<GreenForm /> renders correctly', () => {
    const tree = renderer.create(<GreenForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
