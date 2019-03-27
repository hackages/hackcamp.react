export const shouldBeAFunction = func => {
  expect(typeof func).toEqual('function');
};

export const shouldTakeXArguments = (func, x) => {
  expect(func.length).toEqual(x);
};
