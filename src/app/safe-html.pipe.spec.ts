import { SafeHtmlPipe } from './safe-html.pipe';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
describe('SafeHtmlPipe', () => {
  it('create an instance', () => {
    // private sanitizer:DomSanitizer
    const pipe = new SafeHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});                                                                                                                                                                                                                                                                                                                                                                                                                   
