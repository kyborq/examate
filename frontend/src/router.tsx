import { createBrowserRouter } from "react-router-dom";
import {
  EditorPage,
  EditorRoot,
  HomePage,
  ResultsPage,
  Root,
  SettingsPage,
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "new",
    element: <EditorRoot />,
    children: [
      {
        index: true,
        element: <EditorPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "results",
        element: <ResultsPage />,
      },
    ],
  },
]);
