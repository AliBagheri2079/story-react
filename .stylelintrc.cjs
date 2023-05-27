module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['width', 'height'],
    'no-descending-specificity': null,
    'at-rule-no-unknown': null,
    'max-nesting-depth': 2,
    'selector-max-id': 1,
  },
  overrides: [],
  reportNeedlessDisables: [],
  reportDescriptionlessDisables: [],
  reportInvalidScopeDisables: [],
  configurationComment: [],
  ignoreDisables: [],
};
