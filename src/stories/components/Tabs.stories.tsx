import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab } from "jacm-library/src";

// 📝 **Documentación del componente Tabs**
/**
 * 📚 **Tabs Component Story**
 *
 * The Tabs component allows users to switch between different content panels within a single interface.
 * It supports customizable styles, sizes, and multiple tabs with unique content.
 */
const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    /**
     * The index of the tab that is active by default.
     */
    defaultActiveTab: {
      control: { type: "number" },
      description: "The index of the tab that is active by default.",
      defaultValue: 0,
    },

    /**
     * Determines the visual style of the tabs.
     */
    variant: {
      control: { type: "inline-radio" },
      options: ["primary", "secondary", "normal"],
      description: "Determines the visual style of the tabs.",
      defaultValue: "primary",
    },

    /**
     * Determines the size of the tabs.
     */
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
      description: "Determines the size of the tabs.",
      defaultValue: "small",
    },

    /**
     * Additional class names for styling.
     */
    className: {
      control: "text",
      description: "Additional class names for styling.",
    },

    /**
     * Inline styles for the tabs container.
     */
    style: {
      control: "object",
      description: "Inline styles for the tabs container.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Tabs component allows users to switch between different content panels within a single interface. It supports customizable styles, sizes, and multiple tabs with unique content.",
      },
    },
    layout: "centered",
  },
};

export default meta;

// 🛡️ Tipo explícito para StoryObj
type Story = StoryObj<typeof Tabs>;

/**
 * 📸 **Default Tabs**
 *
 * A default Tabs component with three sample tabs.
 */
export const Basic: Story = {
  args: {
    defaultActiveTab: 0,
    variant: "primary",
    size: "medium",
    children: <Tab label={"Tab 1"}>Tab 1</Tab>,
  },
};
