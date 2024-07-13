"use client";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import {
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import { Admin as prismaUser } from "@prisma/client";
import Link from "next/link";
import React from "react";
interface Props {
  user: prismaUser;
}

export default function UserProfilePanel({ user }: Props) {
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            isBordered: true,
            src: user.avatarUrl ?? "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=is&k=20&c=XmEKmysBRbA1o6zWBHLRaX2j_nrYVvdVZjuXPBLuOOo=",
          }}
          className="transition-transform"
           name={`${user.firstname} ${user.lastname}`}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
      <DropdownItem>
       <Link href='/user/profile'>Profile</Link>
      </DropdownItem>
        <DropdownItem key="logout" color="danger">
          <LogoutLink>Logout</LogoutLink>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
