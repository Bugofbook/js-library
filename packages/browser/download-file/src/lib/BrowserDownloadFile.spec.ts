import { browserDownloadFile } from './BrowserDownloadFile';

describe('browserDownloadFile', () => {
  it('should work', () => {
    expect(browserDownloadFile()).toEqual('browser-download-file');
  });
});
