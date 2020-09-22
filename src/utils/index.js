import checkPropTypes from "check-prop-types";

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(component.propTypes, expectedProps, "props", component.name);
  return propsError;
};

export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};