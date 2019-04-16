export const required = value => (value ? undefined : 'Required');
export const notEmpty = value => (value.trim() !== '' ? undefined : 'Input required. Cannot be empty');
export const trimmed = value => (value.trim() === value ? undefined : 'No White-spaces!');
export const lengthMax = length => value => (value.length <= length ? undefined : `No more than ${length} characters long`);
export const lengthMin = length => value => (value.length >=  length ? undefined : `Must be at leact ${length} characters`);
export const isLower = value => (value.toLowerCase() === value ? undefined : 'Must be all lower case!');
export const validEmailFormat = value => (/(.+)@(.+)\.(.{3})/g.test(value) ? undefined : 'Incorrect E-mail fromat!')
export const matches = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim() ? undefined : 'Must Match!';



  




