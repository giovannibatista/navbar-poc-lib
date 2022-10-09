import NavigationBar from '../navigation-bar';
test('My Greeter', () => {
  expect(NavigationBar('Carl')).toBe('Hello Carl');
});
