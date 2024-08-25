


import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  InputBase,
  IconButton,
  TablePagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Employee {
  fullName: string;
  employeeId: string;
  userId: string;
  hireDate: string;
  event: string;
  position: string;
  netSalary: string;
  avatarUrl: string;
}

const employees: Employee[] = [
  { fullName: 'Eleanor Pena', employeeId: '9261456', userId: 'tanya.hil', hireDate: '8/21/15', event: 'New Hire', position: 'Medical Assistant', netSalary: '5,50,000', avatarUrl: '/path/to/avatar1.png' },
  { fullName: 'Albert Flores', employeeId: '4152764', userId: 'michael123', hireDate: '5/27/15', event: 'Transfer', position: 'UI/UX Designer', netSalary: '19,000', avatarUrl: '/path/to/avatar2.png' },
  { fullName: 'Arlene McCoy', employeeId: '5626082', userId: 'lawson', hireDate: '8/16/13', event: 'Re-Hire', position: 'Dog Trainer', netSalary: '90,000', avatarUrl: '/path/to/avatar3.png' },
  { fullName: 'Esther Howard', employeeId: '5021368', userId: 'alma.@', hireDate: '1/28/17', event: 'New Hire', position: 'President of Sales', netSalary: '15,000', avatarUrl: '/path/to/avatar4.png' },
  { fullName: 'Marvin McKinney', employeeId: '6690725', userId: 'debra.holt', hireDate: '9/23/16', event: 'Termination', position: 'Web Designer', netSalary: '1,03,000', avatarUrl: '/path/to/avatar5.png' },
  { fullName: 'Cameron Williamson', employeeId: '8192637', userId: 'cam.wills', hireDate: '7/15/18', event: 'New Hire', position: 'Marketing Manager', netSalary: '7,00,000', avatarUrl: '/path/to/avatar6.png' },
  { fullName: 'Jenny Wilson', employeeId: '7192638', userId: 'jenny.wils', hireDate: '6/18/18', event: 'Promotion', position: 'Financial Analyst', netSalary: '12,00,000', avatarUrl: '/path/to/avatar7.png' },
  { fullName: 'Kristin Watson', employeeId: '6152639', userId: 'kristin.wats', hireDate: '8/21/19', event: 'New Hire', position: 'HR Specialist', netSalary: '8,50,000', avatarUrl: '/path/to/avatar8.png' },
  { fullName: 'Dianne Russell', employeeId: '8123647', userId: 'dianne.russ', hireDate: '11/05/17', event: 'Transfer', position: 'Software Engineer', netSalary: '15,50,000', avatarUrl: '/path/to/avatar9.png' },
  { fullName: 'Floyd Miles', employeeId: '7102736', userId: 'floyd.mile', hireDate: '2/15/16', event: 'New Hire', position: 'Data Scientist', netSalary: '22,00,000', avatarUrl: '/path/to/avatar10.png' },
  { fullName: 'Courtney Henry', employeeId: '9132635', userId: 'court.henry', hireDate: '4/12/14', event: 'Re-Hire', position: 'UX Researcher', netSalary: '14,50,000', avatarUrl: '/path/to/avatar11.png' },
  { fullName: 'Kathryn Murphy', employeeId: '5142634', userId: 'kath.murphy', hireDate: '10/30/18', event: 'Termination', position: 'Product Manager', netSalary: '18,00,000', avatarUrl: '/path/to/avatar12.png' },
  { fullName: 'Savannah Nguyen', employeeId: '6112733', userId: 'sav.nguyen', hireDate: '3/25/20', event: 'Promotion', position: 'Project Coordinator', netSalary: '11,00,000', avatarUrl: '/path/to/avatar13.png' },
  { fullName: 'Wade Warren', employeeId: '5122632', userId: 'wade.warr', hireDate: '12/14/21', event: 'New Hire', position: 'Quality Analyst', netSalary: '9,50,000', avatarUrl: '/path/to/avatar14.png' },
  { fullName: 'Jane Cooper', employeeId: '8132641', userId: 'jane.coop', hireDate: '5/20/22', event: 'Re-Hire', position: 'Content Writer', netSalary: '6,50,000', avatarUrl: '/path/to/avatar15.png' },
];
const EmployeeTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    console.log(event);
    
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.employeeId.includes(searchTerm)
  );

  return (
    <Box 
    sx={{
      border: '2px solid #d3d3d3',
      borderRadius: '1rem',      
      padding: '8px',        
    }} 
    >
      <Box mb={2}>
        <div className='flex justify-between items-center pl-[2rem] pr-[1rem] '>
          <Typography variant="h6" component="div">
            Employees
          </Typography>

          <Paper 
            component="form" 
            sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', width: isExpanded ? 300 : 42, borderRadius: isExpanded ? '5rem' : '7rem', transition: 'width 0.3s' }}
          >
            <IconButton onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
            {isExpanded && (
              <InputBase
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by employee name & ID"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ ml: 1, flex: 1 }}
              />
            )}
          </Paper>
        </div>
      </Box>
      
      <TableContainer>
        <Table aria-label="employee table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#4A5568', fontSize: '1rem', fontWeight: 'bold' }}>Full Name</TableCell>
              <TableCell sx={{ color: '#4A5568', fontSize: '1rem', fontWeight: 'bold' }}>Employee Id</TableCell>
              <TableCell sx={{ color: '#4A5568', fontSize: '1rem', fontWeight: 'bold' }}>User Id</TableCell>
              <TableCell sx={{ color: '#4A5568', fontSize: '1rem', fontWeight: 'bold' }}>Hire Date</TableCell>
              <TableCell sx={{ color: '#4A5568', fontSize: '1rem', fontWeight: 'bold' }}>Event</TableCell>
              <TableCell sx={{ color: '#4A5568', fontSize: '1rem', fontWeight: 'bold' }}>Position</TableCell>
              <TableCell sx={{ color: '#4A5568', fontSize: '1rem', fontWeight: 'bold' }}>Net Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee) => (
              <TableRow key={employee.employeeId}>
                <TableCell sx={{ color: '#4A5568', fontSize: '0.9rem', fontWeight: 'semibold' }}>
                  <Box display="flex" alignItems="center">
                                
               <Avatar src={employee.avatarUrl} alt={employee.fullName} sx={{ mr: 2 }} />
                    <Typography variant="body2">{employee.fullName}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: '#4A5568', fontSize: '0.9rem', fontWeight: 'semibold' }}>{employee.employeeId}</TableCell>
                <TableCell sx={{ color: '#4A5568', fontSize: '0.9rem', fontWeight: 'semibold' }}>{employee.userId}</TableCell>
                <TableCell sx={{ color: '#4A5568', fontSize: '0.9rem', fontWeight: 'semibold' }}>{employee.hireDate}</TableCell>
                <TableCell sx={{ color: '#4A5568', fontSize: '0.9rem', fontWeight: 'semibold' }}>{employee.event}</TableCell>
                <TableCell sx={{ color: '#4A5568', fontSize: '0.9rem', fontWeight: 'semibold' }}>{employee.position}</TableCell>
                <TableCell sx={{ color: '#4A5568', fontSize: '0.9rem', fontWeight: 'semibold' }}>{employee.netSalary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredEmployees.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Box>
  );
};

export default EmployeeTable;

