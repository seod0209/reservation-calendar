const button_style_primary = `
  background-color: #0070c9;
  color: #ffffff;

  &:active, &:hover {
    background-color: #005ea8;
  }

`;
const button_style_secondary = `
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;


  &:active, &:hover {
    background-color: #e3e3e3
  }
`;
const button_style_small = `
  font-size: 12px;
  padding: 10px 16px;
`;
const button_style_medium = `
  font-size: 14px;
  padding: 11px 20px;
`;
const button_style_large = `
  font-size: 16px;
  padding: 12px 24px;
`;

export { button_style_primary, button_style_secondary, button_style_small, button_style_medium, button_style_large };
