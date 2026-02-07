import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const ChatNotSelected = () => {
  return (
    <div>
      <h1>ChatNotSelected</h1>
      <Link to={ROUTES.SERVICE_HOME}>Choose chat or create new one</Link>
    </div>
  );
};

export default ChatNotSelected;
