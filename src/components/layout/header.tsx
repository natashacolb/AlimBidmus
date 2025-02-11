import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold text-primary">CareBook</h1>
        </div>
        <Button variant="ghost" size="icon">
          <UserCircle className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
