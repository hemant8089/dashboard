import React from "react";
import { Box, Typography, LinearProgress, useMediaQuery, useTheme } from "@mui/material";

const salaryData = [
  { range: "10000 to 20000", value: 10 },
  { range: "20000 to 30000", value: 20 },
  { range: "30000 to 50000", value: 7 },
  { range: "50000 above", value: 5 },
];

const SalaryRangeChart: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        padding: isSmallScreen ? "16px" : "15px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        maxWidth: "100%",
        width: "400px",
      }}
    >
      <Typography className="text-gray-700 text-[0.6rem]" variant="h6" sx={{ marginBottom: "16px" }}>
        Salary range of employees
      </Typography>
      {salaryData.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography className="text-gray-600" variant="body2">{item.range}</Typography>
            <LinearProgress
              variant="determinate"
              value={(item.value / 20) * 100}
              sx={{
                height: "8px",
                borderRadius: "2rem",
                backgroundColor: "#e0e0e0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#00bfa5",
                },
              }}
            />
          </Box>
          <Typography variant="body2" sx={{ marginLeft: "8px", minWidth: "30px" }}>
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SalaryRangeChart;
