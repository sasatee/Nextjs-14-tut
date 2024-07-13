import React from "react";
import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@nextui-org/react";
import UserProfilePanel from "./UserProfilePanel";
import prisma from "@/lib/prisma";

export default async function SigninPanel() {
  const { isAuthenticated, getUser } = await getKindeServerSession();
  if (await isAuthenticated()) {
    const user = await getUser();
    const dbUser = await prisma.admin.findUnique({
      where: {
        id: user?.id,
      },
    });
    return <>{dbUser!! && <UserProfilePanel user={dbUser} />}</>;
  }

  return (
    <div className="flex gap-3">
      <Button color="primary">
        <LoginLink>SignIn</LoginLink>
      </Button>
      <Button color="primary">
        <RegisterLink>Register</RegisterLink>
      </Button>
    </div>
  );
}
