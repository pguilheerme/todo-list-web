import { AuthProvider } from "./contexts";
import { AppRouter } from "./routes/AppRouter";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          error: {
            duration: 3000,
          },
          success: {
            duration: 3000,
          },
        }}
      />
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
