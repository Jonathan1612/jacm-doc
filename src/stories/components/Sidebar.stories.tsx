import type { Meta, StoryObj } from '@storybook/react';
import {Sidebar} from 'jacm-library/src';


export interface MenuItem {
  label: string;
  url?: string;           
  children?: MenuItem[];  // Submenús
}

// Datos de ejemplo para el menú
const menuData: MenuItem[] = [
  { label: 'Inicio', url: '/' },
  {
    label: 'Productos',
    children: [
      {
        label: 'Categoría A',
        children: [
          { label: 'Producto A1', url: '/producto-a1' },
          { label: 'Producto A2', url: '/producto-a2' },
        ],
      },
      {
        label: 'Categoría B',
        children: [
          { label: 'Producto B1', url: '/producto-b1' },
          { label: 'Producto B2', url: '/producto-b2' },
        ],
      },
    ],
  },
  { label: 'Contacto', url: '/contacto' },
];

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ["autodocs"],
  // Opcional: puedes agregar controles u otras propiedades
  // argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Basic: Story = {
  args: {
    menuData,
  },
};
