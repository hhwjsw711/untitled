"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignOut() {
  const [isLoading, setLoading] = useState(false);
  const { signOut } = useAuthActions();
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true);
    await signOut();
    router.push("/signin");
  };

  return (
    <DropdownMenuItem onClick={handleSignOut}>
      {isLoading ? "Loading..." : "Sign out"}
    </DropdownMenuItem>
  );
}
