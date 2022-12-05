import renderer from 'react-test-renderer';
import SqaToolsContainer from '../components/SqaToolsContainer';

describe('SqaToolsContainer Component', () => {
  
  it('<SqaToolsContainer /> renders correctly', () => {
    const tree = renderer.create(<SqaToolsContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
