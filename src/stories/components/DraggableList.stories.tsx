import type { Meta, StoryObj } from "@storybook/react";
import {DraggableList} from "jacm-library/src";

// 📝 **Documentación del componente DraggableList**
/**
 * 📚 **DraggableList Component Story**
 *
 * The DraggableList component allows users to reorder a list of items via drag-and-drop interactions.
 * It supports customizable styles and provides callbacks for item order changes.
 */
const meta: Meta<typeof DraggableList> = {
  title: "Components/DraggableList",
  component: DraggableList,
  tags: ["autodocs"],
  argTypes: {
    /**
     * The list of items to display in the draggable list.
     */
    title: {
        control: "text",
        description: "List title"
      },

    items: {
      control: "object",
      description: "The list of items to display in the draggable list.",
      defaultValue: [
        { id: 1, content: "Item 1" },
        { id: 2, content: "Item 2" },
        { id: 3, content: "Item 3" },
      ],
    },

    /**
     * Callback when the order of items changes.
     */
    onItemsChange: {
      action: "onItemsChange",
      description: "Callback function when the order of items changes.",
    },

    /**
     * Additional custom class names for the list container.
     */
    className: {
      control: "text",
      description: "Additional custom class names for the list container.",
    },

    /**
     * Inline styles for the list container.
     */
    style: {
      control: "object",
      description: "Inline styles for the list container.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The DraggableList component allows users to reorder a list of items via drag-and-drop interactions. It supports customizable styles and provides callbacks for item order changes.",
      },
    },
    layout: "centered",
  },
};

export default meta;

// 🛡️ Tipo explícito para StoryObj
type Story = StoryObj<typeof DraggableList>;

/**
 * 📸 **Default Draggable List**
 *
 * A simple draggable list with three default items.
 */
export const Basic: Story = {
  args: {
    title: 'Lista',
    items: [
      { id: 1, content: "Item 1" },
      { id: 2, content: "Item 2" },
      { id: 3, content: "Item 3" },
    ],
  },
};

export const CustomStyled: Story = {
  args: {
    title: 'Lista',
    items: [
      { id: 1, content: "Item 1" },
      { id: 2, content: "Item 2" },
      { id: 3, content: "Item 3" },
    ],
    style: { backgroundColor: "#f9f9f9", border: "1px solid #ddd", padding: "10px" },
    className: "custom-draggable-list",
  },
};

