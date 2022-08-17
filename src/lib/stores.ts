import { writable } from "svelte/store";

export const rhythms = writable<number[][]>([]);
