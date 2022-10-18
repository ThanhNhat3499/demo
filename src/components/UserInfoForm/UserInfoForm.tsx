import { Button } from "@material-ui/core";
import { FormControl, InputLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Address from "../../components/Address/Address";
import { useTranslation } from 'react-i18next';

interface UserInfoFormProps {
  onSubmit: (data: any) => void;
  endUserInfo?: any;
}

function UserInfoForm(props: UserInfoFormProps) {
  const { t, i18n } = useTranslation();

  const { onSubmit,
    endUserInfo: { customerNameEng,
      customerNameThai,
      customerType,
      companyType,
      businessType,
      nationality,
      taxID,
      presentativePersonName,
      customerContact,
      telephoneNo,
      zipCode,
      addressEng,
      addressThai,
      soiEng,
      roadEng,
      soiThai,
      roadThai,
      tambolEng,
      amperEng,
      tambolThai,
      amperThai,
      jangwatEng,
      jangwatThai
    } = {} } = props;

    const addressInfo = {
      addressEng,
      addressThai,
      soiEng,
      roadEng,
      soiThai,
      roadThai,
      tambolEng,
      amperEng,
      tambolThai,
      amperThai,
      jangwatEng,
      jangwatThai
    };
  const style = {
    labelSize: "15px",
    inputStyle: { m: 0, width: "100%" },
  };
  const { labelSize, inputStyle } = style;

  const validationSchema = Yup.object().shape({
    customerNameEng: Yup.string().required("Customer Name Eng is required"),
    customerNameThai: Yup.string()
      .required("Customer Name Thai is required")
      .min(6, "Customer Name Thai must be at least 6 characters")
      .max(20, "Customer Name Thai must not exceed 20 characters"),
    customerType: Yup.string().required("Customer type is required"),
    companyType: Yup.string().required("Company type is required"),
    businessType: Yup.string().required("Business type is required"),
    nationality: Yup.string().required("Nationality is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitUserInfo = (data: any) => {
    if (data) {
      onSubmit(data)
    }
  };

  return (
    <div>
      <div className="line">
        <div className="long-input">
          <TextField
            required
            fullWidth
            id="customerNameEng"
            label={t('customerNameEng')}
            variant="standard"
            {...register("customerNameEng")}
            defaultValue={customerNameEng ?? "abc"}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
          <div className="error">
            {errors.customerNameEng?.message?.toString()}
          </div>
        </div>

        <div className="long-input">
          <TextField
            required
            fullWidth
            id="customerNameThai"
            label={t('customerNameThai')}
            variant="standard"
            {...register("customerNameThai")}
            defaultValue={customerNameThai ?? "abc123"}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
          <div className="error">
            {errors.customerNameThai?.message?.toString()}
          </div>
        </div>
      </div>
      <div className="line">
        <div className="input">
          <FormControl variant="standard" sx={inputStyle}>
            <InputLabel>{t('customerType')}</InputLabel>
            <Select id="customerType"
              {...register("customerType")}
              defaultValue={customerType ?? "1"}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value={"Juristic"}>Juristic</MenuItem>
            </Select>
            <div className="error">
              {errors.customerType?.message?.toString()}
            </div>
          </FormControl>
        </div>
        <div className="input">
          <FormControl variant="standard" sx={inputStyle}>
            <InputLabel>{t('companyType')}</InputLabel>
            <Select id="companyType"
              {...register("companyType")}
              defaultValue={companyType ?? "1"}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value={"limitedCompany"}>Limited Company</MenuItem>
            </Select>
            <div className="error">
              {errors.companyType?.message?.toString()}
            </div>
          </FormControl>
        </div>
        <div className="input">
          <FormControl variant="standard" sx={inputStyle}>
            <InputLabel>{t('businessType')}</InputLabel>
            <Select id="businessType"
              {...register("businessType")}
              defaultValue={businessType ?? "1"}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value={"securityIndustry"}>Security Industry</MenuItem>
            </Select>
            <div className="error">
              {errors.businessType?.message?.toString()}
            </div>
          </FormControl>
        </div>
        <div className="input">
          <FormControl variant="standard" sx={inputStyle}>
            <InputLabel>{t('nationality')}</InputLabel>
            <Select id="nationality"
              {...register("nationality")}
              defaultValue={nationality ?? "1"}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value={"thailand"}>Thailand</MenuItem>
            </Select>
            <div className="error">
              {errors.nationality?.message?.toString()}
            </div>
          </FormControl>
        </div>
      </div>
      <div className="line">
        <div className="input">
          <TextField
            fullWidth
            id="taxID"
            label={t('taxID')}
            variant="standard"
            {...register("taxID")}
            defaultValue={taxID ?? "123456"}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>
        <div className="input">
          <TextField
            fullWidth
            id="presentativePersonName"
            label={t('represent')}
            variant="standard"
            {...register("tapresentativePersonNamexID")}
            defaultValue={presentativePersonName ?? 'abc'}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>
        <div className="input">
          <TextField
            fullWidth
            id="customerContact"
            label={t('customerContact')}
            variant="standard"
            {...register("customerContact")}
            defaultValue={customerContact ?? '123456789'}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>
        <div className="input">
          <TextField
            fullWidth
            id="telephoneNo"
            label={t('tel')}
            variant="standard"
            {...register("telephoneNo")}
            defaultValue={telephoneNo ?? '0123456789'}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>
      </div>
      <div className="line">
        <div className="input">
          <TextField
            fullWidth
            id="zipCode"
            label={t('zip')}
            variant="standard"
            {...register("zipCode")}
            defaultValue={zipCode ?? '56789'}
            InputLabelProps={{ style: { fontSize: labelSize } }}
          />
        </div>
      </div>
      <Address register={register} addressInfo={addressInfo} />
      <div className="button">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmitUserInfo)}
        >
          {t('continue')}
        </Button>
      </div>
    </div>
  );
}

export default UserInfoForm;