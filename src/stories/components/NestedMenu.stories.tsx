// NestedMenu.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { NestedMenu } from 'jacm-library/src';

export interface MenuItem {
    label: string;        // Texto a mostrar
    url?: string;         // Ruta o enlace asociado
    children?: MenuItem[]; // Submenús (opcional)
}

const meta: Meta<typeof NestedMenu> = {
  title: 'Components/NestedMenu',
  component: NestedMenu,
};
export default meta;

type Story = StoryObj<typeof NestedMenu>;

export const Primary: Story = {
  args: {
    items: [
      {
        label: 'Inicio',
        url: '/',
      },
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
      {
        label: 'Contacto',
        url: '/contacto',
      },
    ] as MenuItem[],
  },
};
