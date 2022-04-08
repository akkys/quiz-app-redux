import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const history = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    history("/questions");
  };

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography mt={20} variant="h6" color="red">
        Something went wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True / False" },
  ];

  return (
    <>
      <Typography variant="h2" fontWeight={450}>
        Quiz App
      </Typography>
      <form onSubmit={handleSumbit}>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <SelectField
              options={response.trivia_categories}
              label="Category"
            />
            <SelectField options={difficultyOptions} label="Difficulty" />
            <SelectField options={typeOptions} label="Type" />
            <TextFieldComp label="Amount of Questions" type="number" />
            <Box width="100%" mt={3}>
              <Button fullWidth variant="contained" type="submit">
                Get Started
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Settings;
