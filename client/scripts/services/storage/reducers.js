import authReducer from '../auth/store/reducer';
import homeReducer from '../../features/Home/store/reducer';
import loginReducer from '../../features/Login/store/reducer';



export default {
    auth: authReducer,
    loginComponentStore: loginReducer,
    homeComponentStore: homeReducer,
};
