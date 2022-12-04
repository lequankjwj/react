export const coverObj = <T>(keys: string[], data: Array<T>) =>
  keys.reduce(
    (preVal: { [key: string]: T }, key: string, idx: number) => ({
      ...preVal,
      [key]: data[idx],
    }),
    {},
  );
