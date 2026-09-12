import { useContext } from "react";
import { AppContext, type AppContextValue } from "./AppProvider";

/** Accès à l'état et aux actions de l'app. */
export function useApp(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp doit être utilisé à l'intérieur de <AppProvider>");
  return context;
}
