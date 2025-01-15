import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard, defaultAvatar, defaultFontPage } from "jacm-library/src";

const meta: Meta<typeof ProfileCard> = {
  title: "Components/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
  argTypes: {
    profileImage: { control: "text", description: "Name of the " },
    coverImage: { control: "text", description: "Name of the " },
    name: { control: "text", description: "Name of the " },
    description: { control: "text", description: "Name of the " }
  },
  parameters: {
    docs: {
      description: {
        component:
          "The ProfileCard component displays an image or user initials with customizable size and shape.",
      },
    },
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

/**
 * 📸 Basic ProfileCard Example
 */
export const Basic: Story = {
  args: {
    profileImage: defaultAvatar,
    coverImage: defaultFontPage,
    name: "Perfil",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
};
