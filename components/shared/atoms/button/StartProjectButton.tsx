"use client";

import Button from "./Button";

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
