import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import EndpointName from '../components/EndpointName';

describe('EndpointName component', () => {
  
  it('<EndpointName /> renders correctly', () => {
    const tree = renderer.create(<EndpointName />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Label exits', () => {
    render(<EndpointName />);
    const label = screen.getByLabelText('Endpoint:');
    expect(label).toBeInTheDocument();
  });

});
