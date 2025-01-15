import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "jacm-library/src";

// 📝 **Documentación del componente Slider**
/**
 * 📚 **Slider Component Story**
 *
 * The Slider component allows users to select a numeric value from a range using a draggable slider handle.
 * It supports customizable styles, sizes, and provides callbacks for value changes.
 */
const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    /**
     * Minimum value of the slider.
     */
    min: {
      control: { type: "number" },
      description: "Minimum value of the slider.",
      defaultValue: 0,
    },

    /**
     * Maximum value of the slider.
     */
    max: {
      control: { type: "number" },
      description: "Maximum value of the slider.",
      defaultValue: 100,
    },

    /**
     * Step size between slider values.
     */
    step: {
      control: { type: "number" },
      description: "Step size between slider values.",
      defaultValue: 1,
    },

    /**
     * Initial value of the slider.
     */
    initialValue: {
      control: { type: "number" },
      description: "Initial value of the slider.",
      defaultValue: 50,
    },

    /**
     * Determines the visual style of the slider.
     */
    variant: {
      control: { type: "inline-radio" },
      options: ["primary", "secondary", "normal"],
      description: "Determines the visual style of the slider.",
      defaultValue: "primary",
    },

    /**
     * Determines the size of the slider.
     */
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
      description: "Determines the size of the slider.",
      defaultValue: "medium",
    },

    /**
     * Additional class names for styling.
     */
    className: {
      control: "text",
      description: "Additional class names for styling.",
    },

    /**
     * Inline styles for the slider container.
     */
    style: {
      control: "object",
      description: "Inline styles for the slider container.",
    },

    /**
     * Callback function when the slider value changes.
     */
    onChange: {
      action: "onChange",
      description: "Callback function when the slider value changes.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Slider component allows users to select a numeric value from a range using a draggable slider handle. It supports customizable styles, sizes, and provides callbacks for value changes.",
      },
    },
    layout: "centered",
  },
};

export default meta;

// 🛡️ Tipo explícito para StoryObj
type Story = StoryObj<typeof Slider>;

/**
 * 📸 **Default Slider**
 *
 * A basic Slider with default settings.
 */
export const Basic: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    initialValue: 50,
    variant: "primary",
    size: "medium",
  },
};


