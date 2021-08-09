import { JSDOM } from "jsdom"

const baseUrl = "http://www.example.org";

// @ts-ignore
export const setupJSDOM = ({ url, ...options } = {}) => {
  const dom = new JSDOM("", {
    // pretendToBeVisual is enabled so that react works, see
    // https://github.com/jsdom/jsdom#pretending-to-be-a-visual-browser
    pretendToBeVisual: true,
    url: baseUrl + url,
    ...options,
  });
  // @ts-ignore
  global.window = dom.window;
  // @ts-ignore
  global.document = dom.window.document;

  // cleanup func
  return () => {
    // @ts-ignore
    delete global.window;
    // @ts-ignore
    delete global.document;
  };
};