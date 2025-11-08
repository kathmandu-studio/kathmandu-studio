import { StartProjectButton } from "components/shared/atoms";
import { IStartProjectButtonProps } from "components/shared/atoms/StartProjectButton";

interface IStartProjectProps extends IStartProjectButtonProps {
  h3: string;
  label: string;
}

export default function StartProject({ data }: { data: IStartProjectProps }) {
  return (
    <div className="max-w-[540px] mx-auto flex flex-col items-center gap-8">
      <h3 className="m-0 text-center">{data.h3}</h3>
      <div className="block">
        <StartProjectButton
          data={{
            label: data.label,
          }}
        />
      </div>
    </div>
  );
}
