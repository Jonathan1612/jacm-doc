import type { Meta, StoryObj } from "@storybook/react";
import { SkillCard } from "jacm-library/src";
import defaultSkills from "../../assets/react.svg"

const meta: Meta<typeof SkillCard> = {
  title: "Components/SkillCard",
  component: SkillCard,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "text", description: "Name of the " },
    name: { control: "text", description: "Name of the " },
    level: { control: "text", description: "Name of the " }
  },
  parameters: {
    docs: {
      description: {
        component:
          "The SkillCard component displays an image or user initials with customizable size and shape.",
      },
    },
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof SkillCard>;

/**
 * 📸 Basic SkillCard Example
 */
export const Basic: Story = {
  args: {
    name: "React",
    icon: defaultSkills,
    level: 80
  },
};
