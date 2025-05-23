import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";

export default function RootLayout() {
  return (
    <ToastProvider>
      <Stack>
        <Stack.Screen
          name="(shop)"
          options={{ headerShown: false, title: "Shop" }}
        />
        <Stack.Screen
          name="categories"
          options={{ headerShown: false, title: "Categories" }}
        />
        <Stack.Screen
          name="product"
          options={{ headerShown: true, title: "Product" }}
        />
        <Stack.Screen
          name="cart"
          options={{ presentation: "modal", title: "Shoping Cart" }}
        />
        <Stack.Screen name="auth" options={{ headerShown: true }} />
      </Stack>
    </ToastProvider>
  );
}
