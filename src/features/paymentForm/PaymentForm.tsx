import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Divider, Snackbar, Alert, CircularProgress } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

const PaymentForm = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCVC, setCardCVC] = useState<string>('');
  const [cardNumberError, setCardNumberError] = useState<boolean>(false);
  const [cardExpiryError, setCardExpiryError] = useState<boolean>(false);
  const [cardCVCError, setCardCVCError] = useState<boolean>(false);
  const [openSuccess, setOpenSuccess] = useState<boolean>(false);
  const [paymentError, setPaymentError] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [selectedButton, setSelectedButton] = useState<'Card' | 'BLIK'>('Card');
  const [blikMessage, setBlikMessage] = useState<string>('');
  const discountPercentage = 15;

  const formatCardNumber = (value: string) => value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1-').slice(0, 19);
  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (!cleaned) return '';
    let formatted = cleaned.slice(0, 2);
    if (formatted.length === 2 && parseInt(formatted, 10) > 12) formatted = formatted.slice(0, 1);
    if (cleaned.length > 2) formatted += '/' + cleaned.slice(2, 4);
    return formatted.slice(0, 5);
  };

  const validateExpiry = (value: string) => {
    const [month, year] = value.split('/').map(Number);
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear() % 100;
    return !(year < currentYear || (year === currentYear && month < currentMonth));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedExpiry = formatExpiry(e.target.value);
    setCardExpiry(formattedExpiry);
    setCardExpiryError(!validateExpiry(formattedExpiry));
  };

  useEffect(() => {
    setCartItems([
      { id: 1, name: 'Produkt 1', price: 413.50 },
      { id: 2, name: 'Produkt 2', price: 17.35 },
      { id: 3, name: 'Produkt 3', price: 62.7 }
    ]);
  }, []);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const discountAmount = (totalPrice * discountPercentage) / 100;
  const finalPrice = totalPrice - discountAmount;

  const handlePayment = () => {
    const isCardNumberEmpty = !cardNumber;
    const isCardExpiryEmpty = !cardExpiry;
    const isCardCVCEmpty = !cardCVC;
    setCardNumberError(isCardNumberEmpty);
    setCardExpiryError(isCardExpiryEmpty || !validateExpiry(cardExpiry));
    setCardCVCError(isCardCVCEmpty);

    if (isCardNumberEmpty || isCardExpiryEmpty || isCardCVCEmpty || !validateExpiry(cardExpiry)) {
      setPaymentError(true);
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setOpenSuccess(true);
      setIsProcessing(false);
      setTimeout(() => window.location.href = '/', 1500);
    }, 2000);
  };

  const handleButtonClick = (button: 'Card' | 'BLIK') => {
    setSelectedButton(button);
    if (button === 'BLIK') {
      setBlikMessage('Ta funkcja jest obecnie niedostępna');
      setCardNumber('');
      setCardExpiry('');
      setCardCVC('');
    } else {
      setBlikMessage('');
    }
  };

  return (
    <Box sx={{ padding: 10, maxWidth: 800, margin: '0 auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
        <Button variant={selectedButton === 'Card' ? 'contained' : 'outlined'} onClick={() => handleButtonClick('Card')}>Karta</Button>
        <Button variant={selectedButton === 'BLIK' ? 'contained' : 'outlined'} onClick={() => handleButtonClick('BLIK')}>BLIK</Button>
      </Box>
      {blikMessage && <Typography variant="body2" color="error" sx={{ mb: 2 }}>{blikMessage}</Typography>}
      {selectedButton === 'Card' && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
          <TextField label="Numer karty" 
          slotProps={{ inputLabel: { sx: { marginTop: -1.2 }}}} variant="outlined" value={cardNumber} onChange={e => setCardNumber(formatCardNumber(e.target.value))} fullWidth error={cardNumberError} helperText={cardNumberError ? 'Numer karty jest wymagany' : ''} sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField label="Data ważności (MM/RR)" 
            slotProps={{ inputLabel: { sx: { marginTop: -1.2 }}}} variant="outlined" value={cardExpiry} onChange={handleExpiryChange} fullWidth error={cardExpiryError} helperText={cardExpiryError ? 'Data ważności jest nieprawidłowa' : ''} />
            <TextField label="CVC" 
            slotProps={{ inputLabel: { sx: { marginTop: -1.2 }}}} variant="outlined" value={cardCVC} onChange={e => setCardCVC(e.target.value.replace(/\D/g, '').slice(0, 3))} fullWidth error={cardCVCError} helperText={cardCVCError ? 'CVC jest wymagane' : ''} />
          </Box>
        </Box>
      )}
      {selectedButton === 'Card' && (
        <>
          <Divider sx={{ mb: 4 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="body1">Całkowita cena:</Typography><Typography variant="h6">${totalPrice.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="body1">Zaoszczędziłeś na rabacie ({discountPercentage}%):</Typography><Typography variant="h6" color="success.main">${discountAmount.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="body1">Do zapłaty:</Typography><Typography variant="h6">${finalPrice.toFixed(2)}</Typography>
          </Box>
        </>
      )}
      {selectedButton === 'Card' && (
        <Button variant="contained" color="secondary" fullWidth onClick={handlePayment} disabled={isProcessing}>ZAPŁAĆ</Button>
      )}
      <Snackbar open={openSuccess} autoHideDuration={3000} onClose={() => setOpenSuccess(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setOpenSuccess(false)} severity="success" sx={{ width: '100%' }} icon={<CheckCircleIcon sx={{ fontSize: 30 }} />}>Płatność zakończona sukcesem!</Alert>
      </Snackbar>
      <Snackbar open={paymentError} autoHideDuration={3000} onClose={() => setPaymentError(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setPaymentError(false)} severity="error" sx={{ width: '100%' }} icon={<ErrorIcon sx={{ fontSize: 30 }} />}>Płatność nie powiodła się. Sprawdź dane karty.</Alert>
      </Snackbar>
      {isProcessing && <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>}
    </Box>
  );
};

export default PaymentForm;