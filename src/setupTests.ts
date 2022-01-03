// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/react';
import '@testing-library/jest-dom';

// For Music Player, jsdom does not support the elements.
window.HTMLMediaElement.prototype.load = () => {};
// window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};
// window.HTMLMediaElement.prototype.addTextTrack = () => {};
