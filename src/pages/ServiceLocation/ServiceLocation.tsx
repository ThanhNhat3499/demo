import { useNavigate, useLocation } from "react-router-dom";
import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import Address from "../../components/Address/Address";
import { useForm } from "react-hook-form";

function ServiceLocation(props: any) {
  const location = useLocation();
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    const information = {
      ...location.state,
      serviceLocation: data
    };
    if (data) {
      navigate('/billing', {state: information});
    }
  };
  const { register, handleSubmit } = useForm();

  const style = {
    labelSize: "15px",
    inputStyle: { m: 0, width: "100%" },
  };
  const { labelSize, inputStyle } = style;

  return (
    <div>
      <FormControl>
        <RadioGroup defaultValue="new" name="radio-buttons-group">
          <FormControlLabel
            value="new"
            control={<Radio />}
            label="New service location"
          />
          <FormControlLabel
            value="constractor"
            control={<Radio />}
            label="Same as constractor information"
          />
          <FormControlLabel
            value="endUser"
            control={<Radio />}
            label="Same as end user information"
          />
        </RadioGroup>
      </FormControl>
      <div className="line">
        <div className="long-input">
          <TextField
            required
            fullWidth
            id="siteNameEng"
            label="Site Name (English)"
            variant="standard"
            {...register("siteNameEng")}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>
        <div className="long-input">
          <TextField
            required
            fullWidth
            id="siteNameThai"
            label="Site Name (Thai)"
            variant="standard"
            {...register("siteNameThai")}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>
      </div>
      <div className="line">
        <div className="input">
          <FormControl variant="standard" sx={inputStyle}>
            <InputLabel>Usage</InputLabel>
            <Select id="usage" 
            {...register("usage")}
            defaultValue={"1"}>
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="line">
        <div className="input">
          <TextField
            fullWidth
            id="zipCode"
            label="Zip code"
            variant="standard"
            {...register("zipCode")}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>
      </div>
      <Address register={register} />
      <div className="button">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          continue
        </Button>
      </div>
    </div>
  );
}

export default ServiceLocation;