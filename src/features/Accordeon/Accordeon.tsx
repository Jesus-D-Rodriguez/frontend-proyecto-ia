import React, { useState, ChangeEvent } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../../components/navbar/navbar';
import Box from '@mui/material/Box';
import { InputLabel } from '@mui/material';
import Chat from '../chat/Chat';
import Button from '@mui/material/Button';
interface AccordionProps {
  label: string;
}

function Accordeon() {
  const [inputValue1, setInputValue1] = useState<string>('');
  const [selectValue1, setSelectValue1] = useState<string>('');

  const handleInputChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue1(e.target.value);
  };

  const handleSelectChange1 = (e: ChangeEvent<{ value: unknown }>) => {
    setSelectValue1(e.target.value as string);
  };

  const [inputValue2, setInputValue2] = useState<string>('');
  const [selectValue2, setSelectValue2] = useState<string>('');

  const handleInputChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(e.target.value);
  };

  const handleSelectChange2 = (e: ChangeEvent<{ value: unknown }>) => {
    setSelectValue2(e.target.value as string);
  };

  return (
    <Box sx={{ height: '60%', width: '100%' }}>
      <Navbar />
      <div style={{height:"100%", width:"100%", display:"grid"}}>
        <Box sx={{width:"80%", height:"40%", margin:"auto"}}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                label="Input 1"
                value={inputValue1}
                onChange={handleInputChange1}
              />
              <InputLabel htmlFor="select-1">Select 1</InputLabel>
              <Select
                labelId="select-1"
                displayEmpty
                label="Select"
                value={selectValue1}
                onChange={handleSelectChange1}
              >
                <MenuItem disabled value=''>
                  Select 1
                </MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                label="Input 2"
                value={inputValue2}
                onChange={handleInputChange2}
              />
              <Select
                labelId="select-2"
                displayEmpty
                label="Select"
                value={selectValue2}
                onChange={handleSelectChange2}
              >
                <MenuItem disabled value=''>
                  Select 2
                </MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Button>Enviar</Button>
        <Typography>Respuesta: </Typography>
        <Chat></Chat>
      </div>
    </Box>
  );
}

export default Accordeon;