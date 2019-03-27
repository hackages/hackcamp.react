import {updateSearch, selectTab} from "../../actions/searchActions";
import {shouldBeAFunction, shouldTakeXArguments} from "../../__test_utils__/utils";

describe('The search action creators', () => {
  describe('the updateSearch action creator', () => {
    test('It should be a function', () => {
      shouldBeAFunction(updateSearch);
    });

    test('It should take one parameter, the searchTerm', () => {
      shouldTakeXArguments(updateSearch, 1);
    });

    test('It should return an action of type UPDATE_SEARCH_VALUE', () => {
      const {type} = updateSearch();
      expect(type).toEqual('UPDATE_SEARCH_VALUE');
    });

    test('It should return the search term as the payload', () => {
      const {payload} = updateSearch(42);
      expect(payload).toEqual(42);
    });
  });

  describe('the selectTab action creator', () => {
    test('It should be a function', () => {
      shouldBeAFunction(selectTab);
    });

    test('It should take one argument, the genre', () => {
      shouldTakeXArguments(selectTab, 1);
    });

    test('It should return an action of type SELECT_TAB', () => {
      const {type} = selectTab();
      expect(type).toEqual('SELECT_TAB');
    });

    test('It should return the genre as the payload', () => {
      const {payload} = selectTab('Action');
      expect(payload).toEqual('Action');
    });
  });
});
