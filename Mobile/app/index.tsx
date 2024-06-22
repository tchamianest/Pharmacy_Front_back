import { WebView } from "react-native-webview";

export default function Index() {
  return (
    <WebView
      source={{
        uri: "http://192.168.1.67:5173",
      }}
      style={{ flex: 1 }}
    />
  );
}
