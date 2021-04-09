import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test  ('renders learn react link', async () => {
  const { findByText } = render(<App />);
  const title = await findByText("SEARCH")
  expect(title).toBeVisible()
});

test('search gif', async () => {
  render(<App />)
  const searchBar = await screen.findByRole('textbox')
  const buttonSearch = await screen.findByRole('button')

  fireEvent.change(searchBar, {target: {value: "pokemon"}})
  fireEvent.click(buttonSearch)

  const titleOfSearch = await screen.findByText('Tus Gifs de pokemon')
  expect(titleOfSearch).toBeVisible()
})
