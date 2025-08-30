import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.eb6c62b481c14b4db0406aae56b64bfa',
  appName: 'an-app-for-hikers',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: "#0f0f0f",
      showSpinner: true,
      spinnerColor: "#ffffff"
    }
  }
};

export default config;