import { AuthNavigator } from "./AuthNavigator";
import { UnauthNavigator } from "./UnauthNavigator";

// -----------------------------------------------------------------

export const RootNavigator = () => {
  const isLoggedIn = true;

  return <>{isLoggedIn ? <AuthNavigator /> : <UnauthNavigator />}</>;
};
