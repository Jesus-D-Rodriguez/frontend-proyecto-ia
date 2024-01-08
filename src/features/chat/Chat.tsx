// Importar las bibliotecas necesarias
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Componente de burbuja de chat
interface ChatBubbleProps {
  message: string;
  isResponse?: boolean;
}

// Sustituye el uso de makeStyles con styled
const StyledBubble = styled(Paper)(({ theme, isResponse }: { theme: any; isResponse?: boolean }) => ({
  padding: theme.spacing(1),
  borderRadius: 10,
  width:"60%",
  margin:"auto",
  wordWrap: 'break-word',
  marginBottom: theme.spacing(1),
  backgroundColor: isResponse ? '#e0e0e0' : '#2196F3', // Color de fondo para la respuesta o el usuario
  color: isResponse ? '#000' : '#fff', // Color del texto para la respuesta o el usuario
  alignSelf: isResponse ? 'flex-start' : 'flex-end',
}));

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isResponse = false }) => {
  return (
    <StyledBubble isResponse={isResponse}>
      <Typography>{message}</Typography>
    </StyledBubble>
  );
};

// Componente principal de la aplicación
const Chat: React.FC = () => {
  return (
    <div>
      <ChatBubble message="Hola, ¿cómo estás?" />
      <ChatBubble message="¡Hola! Estoy bien, ¿y tú?" isResponse />
      {/* Agrega más burbujas de chat según sea necesario */}
    </div>
  );
};

export default Chat;