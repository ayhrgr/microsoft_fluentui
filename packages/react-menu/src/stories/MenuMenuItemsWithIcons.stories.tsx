import * as React from 'react';

import { Menu, MenuTrigger, MenuList, MenuItem, MenuPopover } from '../index';

import { Button } from '@fluentui/react-button';
import {
  CutRegular as CutIcon,
  ClipboardPasteRegular as PasteIcon,
  EditRegular as EditIcon,
} from '@fluentui/react-icons';

export const MenuItemsWithIcons = () => (
  <Menu>
    <MenuTrigger>
      <Button>Toggle menu</Button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem icon={<CutIcon fontSize={20} />}>Cut</MenuItem>
        <MenuItem icon={<PasteIcon fontSize={20} />}>Paste</MenuItem>
        <MenuItem icon={<EditIcon fontSize={20} />}>Edit</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);
