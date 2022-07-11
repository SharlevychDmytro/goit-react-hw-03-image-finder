import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Oval } from 'react-loader-spinner';
import { Box } from 'components/Box';

export const Loader = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Oval height="100" width="100" color="grey" ariaLabel="loading" />
    </Box>
  );
};
