import renderer from 'react-test-renderer';
import RedForm from '../components/RedForm';

describe('RedForm Component', () => {
  
  it('<RedForm /> renders correctly', () => {
    const tree = renderer.create(<RedForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
