import { browserDownloadFile } from './BrowserDownloadFile';

describe('browserDownloadFile', () => {
  it('should work', () => {
    expect(browserDownloadFile(1,2)).toEqual(3);
  });
});
