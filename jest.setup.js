// Polyfill TextEncoder/TextDecoder for Windows + Jest
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Optional: for react-testing-library
import '@testing-library/jest-dom';
