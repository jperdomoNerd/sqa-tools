import renderer from 'react-test-renderer';
import ObjectView from '../components/ObjectView';

describe('ObjectView Component', () => {
  
  it('<OjbectView /> renders correctly', () => {
    const tree = renderer.create(<ObjectView />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
