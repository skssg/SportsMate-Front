import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const CenteredContainer = styled.div`
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    padding: 20px; /* 필요에 따라 패딩 추가 */
`;

export default function PaginationRounded() {
  return (
    <CenteredContainer>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </CenteredContainer>
  );
}