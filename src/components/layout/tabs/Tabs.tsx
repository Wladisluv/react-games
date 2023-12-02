import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid } from '@mui/material';
import GameCard from '../../screens/games/game-card/GameCard';
import { IGame } from '../../../Types/game.interface';

interface Props {
  games?: IGame[] | null;
}

export default function Tabs({ games }: Props) {
  
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" indicatorColor="primary" textColor='inherit'>
            <Tab label="Cart" value="1" />
            <Tab label="Wishlist" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <Grid container spacing={2}>
            {games?.map((game) => {
              return (
                <Grid item xs={6} md={4} lg={3} xl={3} key={game.id}>
                  <GameCard item={game} />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
        <TabPanel value="2">
        <Grid container spacing={2}>
            {games?.map((game) => {
              return (
                <Grid item xs={6} md={4} lg={3} xl={3} key={game.id}>
                  <GameCard item={game} />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}