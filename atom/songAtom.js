import { atom } from "recoil";

export const currenttrackIdState = atom({
  key: "currenttrackIdstate",
  default: null,
});

export const isPlayingState = atom({
  key: "isPlayingstate",
  default: false,
});
