import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { ActionType } from 'typesafe-actions';
import { useNavigate } from 'react-router-dom';

import { MENU_ITEM_HEIGHT } from '../../../state/utils/consts';
import { deleteStudent } from '../../../state/ducks/student/actions';

interface IProps {
  id: number;
  deleteStudent: (id: number) => ActionType<typeof deleteStudent>;
}

export default function OptionsMenu({ id, deleteStudent }: IProps) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    navigate(`/student/${id}`);
    setAnchorEl(null);
  };

  const handleDelete = () => {
    deleteStudent(id);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className="pointer"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: MENU_ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleEdit} className="pointer">
          <CreateIcon sx={{ padding: '10px', paddingLeft: 0 }} />
          Edit
        </MenuItem>
        <MenuItem
          onClick={handleDelete}
          sx={{ color: 'red' }}
          className="pointer"
        >
          <DeleteIcon sx={{ padding: '10px', paddingLeft: 0 }} />
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}
