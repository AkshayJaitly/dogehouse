import React from "react";
import { Story } from "@storybook/react";
import {
  ChangeAvatarCard,
  ChangeAvatarCardProps,
} from "../ui/ChangeAvatarCard";
import avatar from "../img/avatar.png";
import { sampleBaseUser } from "./data/BaseUser";

export default {
  title: "ChangeAvatarCard",
  component: ChangeAvatarCard,
};

ChangeAvatarCard.defaultProps = {
  user: sampleBaseUser,
};

export const Main: Story<ChangeAvatarCardProps> = ({ ...props }) => (
  <div className="w-3/5 mx-auto">
    <ChangeAvatarCard {...props} />
  </div>
);
