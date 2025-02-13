
export function has_item_enum<T extends Record<string, string | number>>(
    enumObj: T,
    value: string | null
): string | null {
  if (value === null) return null;

  return Object.values(enumObj).includes(value as unknown as T[keyof T])
    ? value.toUpperCase()
    : null;
}