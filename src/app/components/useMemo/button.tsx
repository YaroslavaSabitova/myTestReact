import { withControlRerenders } from './withControlRenders';

import './styles.css';

type TRapidButtonProps = {
  onClick: () => void;
};

const RapidButton = ({ onClick }: TRapidButtonProps) => {
  return (
    <button className='button' onClick={() => onClick()}>
      Изменить ширину
    </button>
  );
};

export default withControlRerenders('RapidButton', RapidButton);
