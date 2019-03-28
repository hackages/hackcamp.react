export const shouldBeAFunction = func => {
  expect(typeof func).toEqual('function');
};

export const shouldTakeXArguments = (func, x) => {
  expect(func.length).toEqual(x);
};

const prettyParams = params => params.length === 1 ? params[0] : `${params.slice(0, params.length - 1).join(', ')} and ${params[params.length - 1]}`

export const shouldBeAnActionCreator = ({
  params = {},
  title,
  payloadDescription,
  type,
  actionCreator,
  expectedPayload
}) => {
  describe(`The ${title} action creator`, () => {
    test('It should be a function', () => {
      shouldBeAFunction(actionCreator);
    });
    test(`It should return an action of type ${type}`, () => {
      const {type: resultType} = actionCreator();
      expect(resultType).toEqual(type);
    });
    test(Object.keys(params).length ? `It should take ${Object.keys(params).length} parameter${params.length ? 's' : ''}: ${prettyParams(Object.keys(params))}` : 'It should not take any parameter', () => {
      shouldTakeXArguments(actionCreator, Object.keys(params).length)
    });
    test(`It should return a payload containing: ${payloadDescription}`, () => {
      const {payload} = actionCreator(...Object.values(params));
      expect(payload).toEqual(expectedPayload || params);
    });
  });
};
