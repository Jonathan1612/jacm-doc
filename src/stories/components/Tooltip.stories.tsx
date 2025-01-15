import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "jacm-library/src";

// 📝 **Documentación del Componente Tooltip**
/**
 * 📚 **Tooltip Component Story**
 *
 * The Tooltip component displays contextual information when hovering over an element.
 * It supports customizable text, position, and child elements.
 */
const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    /**
     * The text displayed inside the tooltip.
     */
    text: { 
      control: "text", 
      description: "The text displayed inside the tooltip." 
    },

    /**
     * Determines the position of the tooltip.
     */
    position: {
      control: { type: "inline-radio" },
      options: ["top", "bottom", "left", "right"],
      description: "Determines the position of the tooltip relative to the trigger element.",
    },

    /**
     * The child element that triggers the tooltip.
     */
    children: {
      control: "text",
      description: "The child element that triggers the tooltip.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Tooltip component displays contextual information when hovering over an element. It supports customizable text, position, and child elements.",
      },
    },
    layout: "centered",
  },
};

export default meta;

// 🛡️ **Tipo explícito para las historias**
type Story = StoryObj<typeof Tooltip>;

/**
 * 📸 **Basic Tooltip Example**
 *
 * A Tooltip displayed on top of the trigger element.
 */
export const Basic: Story = {
  args: {
    text: "This is a tooltip",
    position: "top",
    children: "Library",
  },
};