import * as React from 'react';
import Box from '@mui/material/Box';
import StyledSpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { deepOrange, green } from '@mui/material/colors';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' }
];

export default function LeftSpeedDial() {
    const direction = 'right';
    return (
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
            <StyledSpeedDial
                ariaLabel="SpeedDial openIcon example"
                sx={{ p: 1 }}
                icon={<BookmarkAddIcon bgcolor="success" openIcon={<EditIcon color="success" />} />}
                direction={direction}
            >
                {actions.map((action) => (
                    <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
                ))}
            </StyledSpeedDial>
        </Box>
    );
}
