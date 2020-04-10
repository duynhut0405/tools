import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import TableRate from './Table';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #ddd'
  },
  indicator: {
    backgroundColor: '#9BE6C8'
  }
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    opacity: 1,
    fontSize: '24px',
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: '#9BE6C8',
      opacity: 1
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      style={{ height: '250px', overflow: 'auto' }}
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(3)
  },
  demo1: {
    color: '#333333',
    backgroundColor: '#ffffff'
  }
}));

function ExchangeRate({ tab1, tab2, data1 }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="divtigia">
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label={tab1} />
          <AntTab label={tab2} />
        </AntTabs>
      </div>

      <TabPanel value={value} index={0}>
        <TableRate data={data1.exchangeRateDetail} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableRate data={data1.exchangeRateDetail} />
      </TabPanel>
    </div>
  );
}

ExchangeRate.propTypes = {
  tab1: PropTypes.string,
  tab2: PropTypes.string,
  data1: PropTypes.object
};

export default ExchangeRate;
