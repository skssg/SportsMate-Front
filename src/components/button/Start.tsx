import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating() {
  return (
    <Stack spacing={1} alignItems="center">
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
  );
}

