const input_style_primary = `
  background-color: #0070c9;
  color: #ffffff;

  &:active, &:hover {
    background-color: #005ea8;
  }

`;
const input_style_secondary = `
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;


  &:active, &:hover {
    background-color: #e3e3e3
  }
`;
const input_style_small = `
  font-size: 12px;
  padding: 10px 16px;
`;
const input_style_medium = `
  font-size: 14px;
  padding: 11px 20px;
`;
const input_style_large = `
  font-size: 16px;
  padding: 12px 24px;
`;

export { input_style_primary, input_style_secondary, input_style_small, input_style_medium, input_style_large };
