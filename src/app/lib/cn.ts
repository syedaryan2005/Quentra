// lib/cn.ts
export function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
// This utility function is used to conditionally join class names together.
// It takes an array of class names and filters out any that are false or undefined,