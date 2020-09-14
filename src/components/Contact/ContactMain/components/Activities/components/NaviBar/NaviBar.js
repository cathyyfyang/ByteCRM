import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NaviBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabBarItems=[
    {key:0,value:"Activity",page:(<div>Activity</div>)},
    {key:1,value:"Notes",page:(<div>Notes</div>)},
    {key:2,value:"Emails",page:(<div>Emails</div>)},
    {key:3,value:"Calls",page:(<div>Calls</div>)},
    {key:4,value:"Tasks",page:(<div>Tasks</div>)},
    {key:5,value:"Meetings",page:(<div>Meetings</div>)},
  ]

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tabBarItems.map((item)=>(
            <Tab label= {item.value} {...a11yProps(item.key)}/>
          ))}
        </Tabs>
      </AppBar>
      {tabBarItems.map((item)=>(
            <TabPanel value={value} index={item.key}>
              {item.page}
            </TabPanel> 
          ))}
    </div>
  );
}