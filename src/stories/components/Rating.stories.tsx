import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "jacm-library/src";

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
  tags: ["autodocs"],
  argTypes: {
    maxRating: { control: "number", description: "Name of the " },
    initialRating: { control: "number", description: "Name of the " },
    variant: {
      control: { type: "inline-radio" },
      options: ["primary", "secondary", "normal"],
      description: "Determines the variant style of the button.",
    },
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
      description: "Determines the size of the button.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Rating component displays an image or user initials with customizable size and shape.",
      },
    },
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Rating>;

/**
 * 📸 Basic Rating Example
 */
export const Basic: Story = {
  args: {
    maxRating: 5,
    initialRating: 0,
    variant: "primary",
    size: "medium",
  },
};
