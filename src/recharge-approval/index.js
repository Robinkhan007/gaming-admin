import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

export default function ApproveRecharge() {
  // Mock data for recharge requests
  const rechargeRequests = [
    {
      id: 1,
      account: "Account1",
      type: "Type1",
      amount: 100,
      code: "Code1",
      utr: "UTR1",
      time: "Time1",
      status: "Pending",
    },
    {
      id: 2,
      account: "Account2",
      type: "Type2",
      amount: 200,
      code: "Code2",
      utr: "UTR2",
      time: "Time2",
      status: "Pending",
    },
    // Add more mock data as needed
  ];

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Browse Recharge
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Account</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>UTR</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rechargeRequests.length > 0 ? (
              rechargeRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.id}</TableCell>
                  <TableCell>{request.account}</TableCell>
                  <TableCell>{request.type}</TableCell>
                  <TableCell>{request.amount}</TableCell>
                  <TableCell>{request.code}</TableCell>
                  <TableCell>{request.utr}</TableCell>
                  <TableCell>{request.time}</TableCell>
                  <TableCell>{request.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No More...
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
