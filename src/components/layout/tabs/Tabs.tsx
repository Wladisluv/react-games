import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate, useLocation } from "react-router-dom";
import gamesStore from "../../../stores/games-store";
import { observer } from "mobx-react-lite";
import GamesGrid from "../movie-grid/GamesGrid";

interface Props {
  selectedTab: string;
}

const Tabs = observer(({ selectedTab }: Props) => {
  const [value, setValue] = useState(selectedTab || "1");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabValue = params.get("tab");
    setValue(tabValue || "1");
  }, [location.search]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`/${newValue === "1" ? "cart" : "wishlist"}?tab=${newValue}`);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            indicatorColor="primary"
            textColor="inherit"
          >
            <Tab label="Cart" value="1" />
            <Tab label="Wishlist" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <GamesGrid games={gamesStore.cartGames} />
        </TabPanel>
        <TabPanel value="2">
          <GamesGrid games={gamesStore.favGames} />
        </TabPanel>
      </TabContext>
    </Box>
  );
});

export default Tabs;
