import { Spinner } from "@nextui-org/react";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Spinner size="lg" />
    </div>
  );
};
