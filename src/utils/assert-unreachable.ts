export function assertUnreachable(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}
