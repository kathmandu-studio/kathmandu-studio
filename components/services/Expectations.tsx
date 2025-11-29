import { VectorContainer } from "components/shared/molecules";
import { IVectorContainerProps } from "components/shared/molecules/VectorContainer";

interface IExpectationsProps {
  data: IVectorContainerProps;
}

export default function Expectations({ data }: IExpectationsProps) {
  if (!data) return null;

  return <VectorContainer data={data} />;
}
