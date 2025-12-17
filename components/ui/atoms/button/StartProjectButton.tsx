"use client";

import { Button } from "components/ui/atoms/button";

export interface IStartProjectButtonProps {
  label: string;
}

export default function StartProjectButton({
  data,
}: {
  data: IStartProjectButtonProps;
}) {
  const onStartProject = () => {
    window.open("/start-a-project", "_blank", "noopener,noreferrer");
  };

  return <Button onClick={onStartProject}>{data.label}</Button>;
}
