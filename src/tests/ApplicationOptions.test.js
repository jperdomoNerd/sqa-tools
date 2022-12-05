import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ApplicationOptions from '../components/ApplicationOptions';

describe('ApplicationsOptions Component', () => {
  it('<ApplicationOptions /> renders correctly', () => {
    const tree = renderer.create(<ApplicationOptions application='Webpay' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Only show three options', () => {
    render(<ApplicationOptions application='Bridge API' />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
  });
  test('Show 27 options', () => {
    render(<ApplicationOptions application='POS Legacy' />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(27);
  });
  test('Show 27 options', () => {
    render(<ApplicationOptions application='Webpay' />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(6);
  });
  test('Show 27 options', () => {
    render(<ApplicationOptions application='Webpay' />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(6);
  });
});
