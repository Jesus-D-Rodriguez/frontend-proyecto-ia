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
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../../components/navbar/navbar';
import Box from '@mui/material/Box';
import { InputLabel } from '@mui/material';
import Chat from '../chat/Chat';
import Button from '@mui/material/Button';
import { DateField } from '@mui/x-date-pickers/DateField';

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

  const [nombre, setNombre] = useState<string>('');
  const [seudonimo, setSeudonimo] = useState<string>('');
  const [padre, setPadre] = useState<string>('');
  const [fechaNacimiento, setFechaNacimiento] = useState<Date | null>(null);
  const [selectValue2, setSelectValue2] = useState<string>('');

  const handleNombre = (e: ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleSeudonimo = (e: ChangeEvent<HTMLInputElement>) => {
    setSeudonimo(e.target.value);
  };

  const handlePadre = (e: ChangeEvent<HTMLInputElement>) => {
    setPadre(e.target.value);
  };

  const handleFechaNacimientoChange = (date: Date | null) => {
    setFechaNacimiento(date);
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
              <Typography>Informacion personal</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                label="nombre"
                value={nombre}
                onChange={handleNombre}
              />
              <TextField
                label="seudonimo"
                value={seudonimo}
                onChange={handleSeudonimo}
              />       
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="Fecha de nacimiento" format="DD-MM-YYYY" />
                </DemoContainer>
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="Fecha de fallecimiento" />
                </DemoContainer>
              </LocalizationProvider>

              <TextField
                label="padre"
                value={padre}
                onChange={handlePadre}
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
              <Typography>Actividades</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                label="Nombre"
                value={nombre}
                onChange={handleNombre}
              />
              <TextField
                label="Seudonimo"
                value={inputValue1}
                onChange={handleNombre}
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
        <Box sx={{width:"100%", heigh:"60%", display:"grid", marginTop:"300px"}}>
        <Button sx={{width:"80px", margin:"auto", backgroundColor:"green", color:"white",
      "&::hover":{backgroundColor:"green"}}}>Enviar</Button>
        <Box sx={{width:"max-content", margin:"auto"}}>
          <Typography>Respuesta: </Typography>
          <Box sx={{overflow:"scroll", height:"200px"}}>
            <Chat></Chat>
          </Box>
        </Box>
        </Box>
      </div>
    </Box>
  );
}

export default Accordeon;