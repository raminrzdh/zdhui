import 'csstype';

declare module 'csstype' {
  interface Properties {
    '--total-length'?: string | number; // Allow both string and number
    '--mask'?: string | number;
  }
}
