export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.css': ['stylelint --fix'],
  '*.{html,md,js,jsx,ts,tsx,css}': ['prettier --write'],
};
