import { useNavigate } from "react-router-dom";
import UserInfoForm from "../../components/UserInfoForm/UserInfoForm";

function Constractor(props: any) {
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    if (data) {
      navigate('/endUser', { state: data });
    }
  };
  return (
    <div>
      <UserInfoForm onSubmit={onSubmit} />
    </div>
  );
}

export default Constractor;