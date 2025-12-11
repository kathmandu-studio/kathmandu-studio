"use client";

import usePageTitle from "hooks/usePageTitle";

export default function PageTitle({ title }: { title: string }) {
  usePageTitle({ title });
  return null;
}
