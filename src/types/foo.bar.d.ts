declare module "foo" {
  export interface Foo {
    foo: string;
  }
}

declare module "bar" {
  export function bar(): string;
}
