export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{css,scss}': ['stylelint --fix'],
  '*.{html,md,js,jsx,ts,tsx,css,scss}': ['prettier --write'],
};
