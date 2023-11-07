import { Box, Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Box>
      <Skeleton variant="rectangular" width={250} height={120} />
      <Skeleton variant="text" width={80} height={40} />
      <Skeleton variant="text" width={150} height={30} />
    </Box>
  );
};

export default CardSkeleton;
