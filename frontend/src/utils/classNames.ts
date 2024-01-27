type TClassName = string | number | boolean | null | undefined;

export const classNmes = (...args: TClassName[]) => {
  return args.filter(Boolean).join(" ");
};
