import { Button, Typography } from '@material-ui/core';
import { Box, FormControl, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './style.css';
import { makeStyles } from '@material-ui/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const inputStyle = { m: 1, width: "25%" };

function Constractor(props: any) {
    const [constractor, setConstractor] = useState({});
    function setConstractorInfo(info: any) {
        const { name, value } = info;
        setConstractor({
            ...constractor,
            [name]: value
        })
    };

    const useStyles = makeStyles({
        asterisk: {
            fontSize: "50px"
        },
        formControl: {
            fontSize: "50px"
        },
    });

    const validationSchema = Yup.object().shape({
        customerNameEng: Yup.string().required('Customer Name Eng is required'),
        customerNameThai: Yup.string()
            .required('Customer Name Thai is required')
            .min(6, 'Customer Name Thai must be at least 6 characters')
            .max(20, 'Customer Name Thai must not exceed 20 characters'),
        customerType: Yup.string().required('Customer type is required'),
        companyType: Yup.string().required('Company type is required'),
        businessType: Yup.string().required('Business type is required'),
        nationality: Yup.string().required('Nationality is required'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: any) => {
        console.log(JSON.stringify(data, null, 2));
    };
    return (
        <div>
            
            <Box className='constractor-container'>
                <div className='line'>
                    <div>
                        <TextField required fullWidth id="customerNameEng" label="Customer Name (English)" variant="standard"
                            {...register("customerNameEng")} />
                        <div className='error'>
                            {errors.customerNameEng?.message?.toString()}
                        </div>
                    </div>

                    <div>
                        <TextField required fullWidth id="customerNameThai" label="Customer Name (Thai)" variant="standard" />
                        <div className='error'>
                            {errors.customerNameThai?.message?.toString()}
                        </div>
                    </div>

                </div>
                <div className='line'>
                    <FormControl variant="standard" sx={inputStyle}>
                        <InputLabel>Customer type</InputLabel>
                        <Select
                            id="customerType"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Juristic'}>Juristic</MenuItem>
                        </Select>
                        <div className='error'>
                            {errors.customerType?.message?.toString()}
                        </div>
                    </FormControl>
                    <FormControl variant="standard" sx={inputStyle}>
                        <InputLabel>Company type</InputLabel>
                        <Select
                            id="companyType"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'limitedCompany'}>Limited Company</MenuItem>
                        </Select>
                        <div className='error'>
                            {errors.companyType?.message?.toString()}
                        </div>
                    </FormControl>
                    <FormControl variant="standard" sx={inputStyle}>
                        <InputLabel>Business type</InputLabel>
                        <Select
                            id="businessType"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'securityIndustry'}>Security Industry</MenuItem>
                        </Select>
                        <div className='error'>
                            {errors.businessType?.message?.toString()}
                        </div>
                    </FormControl>
                    <FormControl variant="standard" sx={inputStyle}>
                        <InputLabel>Nationality</InputLabel>
                        <Select
                            id="nationality"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'thailand'}>Thailand</MenuItem>
                        </Select>
                        <div className='error'>
                            {errors.nationality?.message?.toString()}
                        </div>
                    </FormControl>
                </div>
                <div className='line'>
                    <TextField id="taxID" label="ID no./Tax ID" variant="standard" />
                    <TextField id="presentativePersonName" label="Presentative person name" variant="standard" />
                    <TextField id="customerContact" label="Customer Contact" variant="standard" />
                    <TextField id="telephoneNo" label="Telephone no" variant="standard" />
                </div>
            </Box>

            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
            >
                Submit
            </Button>
        </div>
    );
}

export default Constractor;