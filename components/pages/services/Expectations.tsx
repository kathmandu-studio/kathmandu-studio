import {
  IVectorContainerProps,
  VectorContainer,
} from "components/ui/molecules";

interface IExpectationsProps {
  data: IVectorContainerProps;
}

export default function Expectations({ data }: IExpectationsProps) {
  if (!data) return null;

  return <VectorContainer data={data} />;
}
