// Utility type для упрощения базовых преобразований типов .. 16

type T0 = Exclude<"a" | "b" | "c", "a">;                      // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;                // "c"
type T2 = Exclude<string | number | (() => void), Function>;  // string | number
