import { getUserById } from "@/lib/actions/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React, { ReactNode } from "react";
import PageTitle from "@/app/components/pageTitle";
import { Avatar, Card } from "@nextui-org/react";
import SectionTitle from "./_component/sectionTitle";
import UploadAvatar from "./_component/UploadAvatar";

export default async function ProfilePage() {
  const { getUser } = await getKindeServerSession();
  const user = await getUser(); // get from kinde server session
  const dbUser = await getUserById(user ? user.id : "");

  return (
    <div>
      <PageTitle title="My profile" href="/" linkCaption="Go to home" />
      <Card className="m-28 p-10 bg-gray-200 ">
        <SectionTitle title="Basic information" />
        <div className="flex">
          <div className="flex flex-col items-center">
            <Avatar
              className="w-20 h-20"
              src={
                dbUser?.avatarUrl ??
                "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=is&k=20&c=XmEKmysBRbA1o6zWBHLRaX2j_nrYVvdVZjuXPBLuOOo="
              }
            />
            <UploadAvatar />
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-4">
          <Attribute
            title="Name"
            value={`${dbUser?.firstname} ${dbUser?.lastname}`}
          />
          <Attribute title="Email" value={`${dbUser?.email}`} />
          <Attribute
            title="Registered on"
            value={`${dbUser?.createdAt.toLocaleDateString()}`}
          />
          <Attribute title="Posted" value={1} />
        </div>
      </Card>
    </div>
  );
}

const Attribute = ({ title, value }: { title: string; value: ReactNode }) => (
  <div className="flex flex-row gap-x-3 text-sm ">
    <span className="text-slate-800 font-bold text-lg">{title} :</span>
    <span className="text-slate-600 text-md font-semibold py-1 "> {value}</span>
  </div>
);
