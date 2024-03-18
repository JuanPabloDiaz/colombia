import { useToast } from "@/components/ui/use-toast";
import { Button } from "../ui/button";

export const ToastUnderConstruction = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Proximamente...",
          description:
            "Esta página está en construcción. Por favor, vuelve más tarde.",
          status: "info",
          duration: 5000,
          isClosable: true,
        });
      }}
    >
      Show Toast
    </Button>
  );
};
