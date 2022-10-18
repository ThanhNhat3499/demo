import { FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm';

EndUser.propTypes = {

};

function EndUser(props: any) {
    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        if (data) {
            const information = {
                constractor: data,
                endUser: location.state
            }
            navigate('/serviceLocation', {state: information});
        }
    };
    return (
        <div>
            <div className='checkbox'>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Same as contractor information" />
            </div>
            <UserInfoForm onSubmit={onSubmit}  endUserInfo={location.state} />
        </div>
    );
}

export default EndUser;