import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'peanote',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
