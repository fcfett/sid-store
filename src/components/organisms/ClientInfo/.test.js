import { getHigherOccurrence } from '../../../utils/helpers';
import Mutations from '../../../utils/mutations';

it(`Should be equals "Black Tee"`, () => {
  const items = ['Black tee', 'Camo shorts', 'Slayer tee', 'Blue Jeans', 'Black Tee'];
  const higherOccurrence = getHigherOccurrence(items);
  expect(higherOccurrence).toBe('Black Tee');
});

test('660.6 in money format is R$ 660,60', () => {
  const formattedValue = Mutations.FormatMoney(660.6);
  expect(formattedValue).toBe('R$ 660,60');
});
