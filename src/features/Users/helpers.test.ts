import { TestArray } from 'test-utils/consts';
import { paramsInclude } from './helpers';

describe('paramsInclude', () => {
  it('should return an array filter by params array', () => {
    const filteredArray = paramsInclude(TestArray, ['name'], 'Lea');
    expect(filteredArray.length).toBe(1);
  });

  it('should filter only by defined params array', () => {
    const filteredArray = paramsInclude(TestArray, ['name'], 'Bret');
    expect(filteredArray.length).toBe(0);
  });

  it('should filter by name and username if both are defined in params array', () => {
    const filteredArray = paramsInclude(TestArray, ['name', 'username'], 'Bret');
    expect(filteredArray.length).toBe(1);
  });

  it('should filter object if they are defined in params array', () => {
    const filteredArray = paramsInclude(TestArray, ['name', 'username', 'company'], 'Deckow');
    expect(filteredArray.length).toBe(1);
    expect(filteredArray[0].name).toBe('Ervin Howell');
  });

  it('should return empty array if params are empty', () => {
    const filteredArray = paramsInclude(TestArray, [], 'Deckow');
    expect(filteredArray.length).toBe(0);
  });
});

export {};
