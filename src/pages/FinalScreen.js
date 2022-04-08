import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScreen = () => {
  const { score } = useSelector((state) => state);
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(10));
    history("/");
  };

  return (
    <Box mt={25}>
      <Typography variant="h3" fontWeight="450" mb={5}>
        Final Score : {score}
      </Typography>
      <Button onClick={handleBack} variant="outlined">
        Try Again!
      </Button>
    </Box>
  );
};

export default FinalScreen;
