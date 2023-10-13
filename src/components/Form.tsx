import {
  Box,
  Button,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";

const Form = () => {
  console.log();
  return (
    <>
      <Box m="2rem">
        <form action="submit">
          <FormLabel>First name</FormLabel>
          <Input placeholder="First name" />

          <FormLabel>Country</FormLabel>
          <Select placeholder="Select country">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
          <FormLabel>Amount</FormLabel>
          <NumberInput max={50} min={10}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button type="submit" marginTop="1rem">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Form;
