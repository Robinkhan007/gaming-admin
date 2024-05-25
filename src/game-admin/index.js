import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid, Button } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
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
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function GameTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderNumbers = () => {
    const numbers = Array.from({ length: 101 }, (_, i) => i);
    return (
      <Grid container spacing={2}>
        {numbers.map((number) => (
          <Grid item xs={3} key={number}>
            <Box
              sx={{
                backgroundColor: "green",
                color: "#fff",
                textAlign: "center",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "50px", height: "50px", marginBottom: "10px" }}
              >
                {number}
              </Button>
              <Typography>Join {number}</Typography>
              <Typography>0</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        marginTop: "100px", // Adjust this value to control the top margin
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered // Center the tabs
        >
          <Tab label="Gali" {...a11yProps(0)} />
          <Tab label="Faridabad" {...a11yProps(1)} />
          <Tab label="Ghaziabad" {...a11yProps(2)} />
          <Tab label="Dishwar" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {renderNumbers()}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {renderNumbers()}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {renderNumbers()}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {renderNumbers()}
      </CustomTabPanel>
    </Box>
  );
}
