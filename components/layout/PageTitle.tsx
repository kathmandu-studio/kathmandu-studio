"use client";

import { usePageTitle } from "hooks";

export default function PageTitle({ title }: { title: string }) {
  usePageTitle({ title });
  return null;
}
