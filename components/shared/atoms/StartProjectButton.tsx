"use client";

import { Button } from "components/shared/atoms";
// import { useRouter } from "next/navigation";

export interface IStartProjectButtonProps {
  label: string;
}

export default function StartProjectButton({
  data,
}: {
  data: IStartProjectButtonProps;
}) {
  // const router = useRouter();

  const onStartProject = () => {
    // router.push("/start-a-project");
    window.open("/start-a-project", "_blank", "noopener,noreferrer");
  };

  return <Button onClick={onStartProject}>{data.label}</Button>;
}
