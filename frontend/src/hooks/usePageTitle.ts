import { useEffect } from "react";

export const usePageTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `Лессона - ${title}` : "Лессона";
  }, [title]);
};
