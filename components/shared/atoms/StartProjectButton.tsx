"use client";

import { Button } from "components/shared/atoms";

export interface IStartProjectButtonProps {
  label: string;
}

export default function StartProjectButton({
  data,
}: {
  data: IStartProjectButtonProps;
}) {
  const onStartProject = () => {
    console.log("Start a Project");
  };

  return <Button onClick={onStartProject}>{data.label}</Button>;
}
