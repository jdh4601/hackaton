import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StandardImageList from './ImageList';
import BottomAppBar from './BottomAppBar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div>
      <BottomAppBar />
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
      <BottomAppBar />
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Street" {...a11yProps(0)} />
          <Tab label="Minimul" {...a11yProps(1)} />
          <Tab label="Casual" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h2>Street Fashion 😎</h2>
        <StandardImageList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <h2>Minimul Fashion 😎</h2> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <h2>Casual Fashion 😎</h2> */}
      </TabPanel>
    </Box>
  );
}
