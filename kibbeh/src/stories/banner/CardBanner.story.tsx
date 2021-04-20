import React from "react";
import { Story } from "@storybook/react";
import { CardBanner } from "../../ui/banner/CardBanner";
export default {
  title: "CardBanner",
  component: CardBanner,
};

const TheCardBanner: Story<{}> = ({}) => (
  <div className="flex" style={{ width: 420 }}>
    <CardBanner />
  </div>
);

export const Main = TheCardBanner.bind({});
