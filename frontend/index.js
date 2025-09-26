import { registerRootComponent } from 'expo';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

// Must be exported as default
export default function App() {
  const router = useRouter();
  useEffect(() => {
    // @ts-expect-error: This is fine
    router.replace('/(tabs)');
  }, []);
  return null;
}

// Instruct SplashScreen not to hide automatically
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';

preventAutoHideAsync();

registerRootComponent(App);