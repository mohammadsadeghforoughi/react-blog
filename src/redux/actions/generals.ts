import { action } from "typesafe-actions";

export const GeneralActionTypes = {
  THEME_MODE: "@@general/THEME_MODE",
};

export const toggleThemeMode = (data: any) =>
  action(GeneralActionTypes.THEME_MODE, data);
