import { Button, type ButtonProps } from "@/components/ui/button";
import { Loader } from "lucide-react";

export const LoadingButton = (
  props: ButtonProps & {
    isLoading: boolean;
  }
) => {
  return (
    <Button className="flex gap-2" disabled={props.isLoading} {...props}>
      {props.isLoading && <Loader className="animate-spin h-4 w-4" />}
      {props.children}
    </Button>
  );
};
