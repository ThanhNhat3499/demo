import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useTranslation } from 'react-i18next';

interface AddressProps {
    register: UseFormRegister<FieldValues>;
    addressInfo?: any;
}

function Address(props: AddressProps) {
    const { t, i18n } = useTranslation();
    const { register, addressInfo = {} } = props;

    const {
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
        jangwatThai } = addressInfo;

    const style = {
        labelSize: "15px",
        inputStyle: { m: 0, width: "100%" },
    };
    const { labelSize, inputStyle } = style;

    return (
        <div>
            <div className="line">
                <div className="long-input">
                    <TextField
                        required
                        fullWidth
                        id="addressEng"
                        label={t('addressEng')}
                        variant="standard"
                        {...register("addressEng")}
                        defaultValue={addressEng ?? 'abc'}
                        InputLabelProps={{ style: { fontSize: labelSize } }}
                    />
                </div>

                <div className="long-input">
                    <TextField
                        required
                        fullWidth
                        id="addressThai"
                        label={t('addressThai')}
                        variant="standard"
                        {...register("addressThai")}
                        defaultValue={addressThai ?? 'abc'}
                        InputLabelProps={{ style: { fontSize: labelSize } }}
                    />
                </div>
            </div>
            <div className="line">
                <div className="input">
                    <TextField
                        fullWidth
                        id="soiEng"
                        label={t('soiEng')}
                        variant="standard"
                        {...register("soiEng")}
                        defaultValue={soiEng ?? 'abc'}
                        InputLabelProps={{ style: { fontSize: labelSize } }}
                    />
                </div>
                <div className="input">
                    <TextField
                        fullWidth
                        id="roadEng"
                        label={t('roadEng')}
                        variant="standard"
                        {...register("roadEng")}
                        defaultValue={roadEng ?? 'abc'}
                        InputLabelProps={{ style: { fontSize: labelSize } }}
                    />
                </div>
                <div className="input">
                    <TextField
                        fullWidth
                        id="soiThai"
                        label={t('soiThai')}
                        variant="standard"
                        {...register("soiThai")}
                        defaultValue={soiThai ?? 'abc'}
                        InputLabelProps={{ style: { fontSize: labelSize } }}
                    />
                </div>
                <div className="input">
                    <TextField
                        fullWidth
                        id="roadThai"
                        label={t('roadThai')}
                        variant="standard"
                        {...register("roadThai")}
                        defaultValue={roadThai ?? 'abc'}
                        InputLabelProps={{ style: { fontSize: labelSize } }}
                    />
                </div>
            </div>
            <div className="line">
                <div className="input">
                    <TextField
                        fullWidth
                        id="tambolEng"
                        label={t('tambolEng')}
                        variant="standard"
                        {...register("tambolEng")}
                        defaultValue={tambolEng ?? 'abc'}
                        InputLabelProps={{ style: { fontSize: labelSize } }}
                    />
                </div>
                <div className="input">
                    <FormControl variant="standard" sx={inputStyle}>
                        <InputLabel>{t('amperEng')}</InputLabel>
                        <Select id="amperEng"
                            {...register("amperEng")}
                            defaultValue={amperEng ?? 'phatumwan'}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"phatumwan"}>Phatumwan</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="input">
                    <TextField
                        fullWidth
                        id="tambolThai"
                        label={t('tambolThai')}
                        variant="standard"
                        {...register("tambolThai")}
                        defaultValue={tambolThai ?? 'abc'}
                        InputLabelProps={{ style: { fontSize: labelSize } }}
                    />
                </div>
                <div className="input">
                    <FormControl variant="standard" sx={inputStyle}>
                        <InputLabel>{t('amperThai')}</InputLabel>
                        <Select id="amperThai"
                            {...register("amperThai")}
                            defaultValue={amperThai ?? '2'}>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value={"2"}>2</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="line">
                <div className="input">
                    <FormControl variant="standard" sx={inputStyle}>
                        <InputLabel>{t('jangwatEng')}</InputLabel>
                        <Select id="jangwatEng"
                            {...register("jangwatEng")}
                            defaultValue={jangwatEng ?? '1'}>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value={"2"}>2</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="input"></div>
                <div className="input">
                    <FormControl variant="standard" sx={inputStyle}>
                        <InputLabel>{t('jangwatThai')}</InputLabel>
                        <Select id="jangwatThai"
                            {...register("jangwatThai")}
                            defaultValue={jangwatThai ?? '1'}>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value={"2"}>2</MenuItem></Select>
                    </FormControl>
                </div>
            </div>
        </div>
    );
}

export default Address;