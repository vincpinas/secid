export const checkLocation = (location: string) => {
  switch (location) {
    case '/register':
      return 'Secid • Register';
    case '/login':
      return 'Secid • Login';
    default:
      return 'Secid';
  }
}