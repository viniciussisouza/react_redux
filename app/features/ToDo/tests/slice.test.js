import { reducer /* defaultAction */ } from '../slice';

describe('toDoSlice actions and reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      // default state params here
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  // it('should handle the defaultAction action correctly', () => {
  //   const expectedResult = produce(state, draft => {
  //     draft.loading = true;
  //   });
  //
  //   expect(reducer(state, someAction())).toEqual(expectedResult);
  // });
});
