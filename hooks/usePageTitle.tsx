"use client";

import { useLayoutEffect } from "react";
import { setPageTitle } from "utils/misc";

const usePageTitle = ({ title }: { title: string }) => {
  useLayoutEffect(() => {
    setPageTitle(title);
  }, [title]);
  return null;
};

export default usePageTitle;
