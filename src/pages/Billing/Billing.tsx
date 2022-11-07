import { Button } from "@material-ui/core";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Address from "../../components/Address/Address";
import "./style.css";

function Billing(props: any) {
  const location = useLocation();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const information = {
      ...location.state,
      billing: data
    };

    fetch("localhost://3000", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(information)
    })
      .then((response: any) => {
        if (response?.status === 2000)
          alert("Da gui mail thanh cong")
      })
    console.log(information);
  };
  const style = {
    labelSize: "15px",
    inputStyle: { m: 0, width: "100%" },
  };
  const { labelSize, inputStyle } = style;
  return (
    <div>
      <div className="radio">
        <FormControl>
          <RadioGroup defaultValue="new" name="radio-buttons-group">
            <FormControlLabel
              value="new"
              control={<Radio />}
              label="New billing information"
            />
            <FormControlLabel
              value="constractor"
              control={<Radio />}
              label="Same as contractor information"
            />
            <FormControlLabel
              value="endUser"
              control={<Radio />}
              label="Same as end user information"
            />

            <FormControlLabel
              value="endUser"
              control={<Radio />}
              label="Same as service location information"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="line">
        <div className="long-input">
          <TextField
            required
            fullWidth
            id="customerNameEng"
            label="Customer Name (English)"
            variant="standard"
            {...register("customerNameEng")}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>
        <div className="long-input">
          <TextField
            required
            fullWidth
            id="customerNameThai"
            label="Customer Name (Thai)"
            variant="standard"
            {...register("customerNameThai")}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>
      </div>
      <div className="line">
        <div className="input">
          <FormControl variant="standard" sx={inputStyle}>
            <InputLabel>Customer type</InputLabel>
            <Select id="customerType"
              {...register("customerType")}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value={"Juristic"}>Juristic</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="input">
          <FormControl variant="standard" sx={inputStyle}>
            <InputLabel>Company type</InputLabel>
            <Select id="companyType"
              {...register("companyType")}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value={"limitedCompany"}>Limited Company</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="input">
          <FormControl variant="standard" sx={inputStyle}>
            <InputLabel>Business type</InputLabel>
            <Select id="businessType"
              {...register("businessType")}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value={"securityIndustry"}>Security Industry</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="input">
          <FormControl variant="standard" sx={inputStyle}>
            <InputLabel>Nationality</InputLabel>
            <Select id="nationality"
              {...register("nationality")}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value={"thailand"}>Thailand</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="line">
        <div className="input">
          <TextField
            fullWidth
            id="taxID"
            label="ID no./Tax ID"
            variant="standard"
            {...register("taxID")}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>
        <div className="input">
          <TextField
            fullWidth
            id="telephoneNo"
            label="Telephone no"
            variant="standard"
            {...register("telephoneNo")}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
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
      <div className="line line1">
        <TextField
          fullWidth
          id="contactPoint"
          label="Contact point"
          variant="standard"
          {...register("contactPoint")}
          InputLabelProps={{ style: { fontSize: labelSize } }}
        />
      </div>
      <div className="line">
        <div className="long-input">
          <FormControl variant="standard" sx={inputStyle}>
            <InputLabel>Send inovoice type</InputLabel>
            <Select id="inovoiceType"
              {...register("inovoiceType")}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="long-input">
          <TextField
            fullWidth
            id="email1"
            label="Email 1"
            variant="standard"
            {...register("email1")}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>
      </div>
      <div className="line">
        <div className="long-input">
          <TextField
            fullWidth
            id="email2"
            label="Email 2"
            variant="standard"
            {...register("email2")}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>

        <div className="long-input">
          <TextField
            fullWidth
            id="email3"
            label="Email 3"
            variant="standard"
            {...register("email3")}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>
      </div>
      <div className="line">
        <div className="input">
          <FormControl variant="standard" sx={inputStyle}>
            <InputLabel>Payment method</InputLabel>
            <Select id="paymentMethod"
              {...register("paymentMethod")}
              defaultValue={"1"}>
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="button">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          register
        </Button>
      </div>
    </div>
  );
}

export default Billing;