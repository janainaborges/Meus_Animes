import { render, screen } from '@testing-library/react';
import Home  from '../../pages/Home';

test('renders cards when data is available', () => {
  const mockData = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
  ];

  render(<Home data={mockData} />);

  const cardElements = screen.getAllByTestId('card');

  expect(cardElements).toHaveLength(mockData.length);

  mockData.forEach((item, index) => {
    const cardTitle = screen.getByText(item.title);
    expect(cardTitle).toBeInTheDocument();
  });
});