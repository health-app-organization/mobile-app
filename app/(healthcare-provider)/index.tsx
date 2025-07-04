import { Redirect } from "expo-router";

export default function AccountIndex() {
  return <Redirect href={"/(healthcare-provider)/(auth)"} />;
}
