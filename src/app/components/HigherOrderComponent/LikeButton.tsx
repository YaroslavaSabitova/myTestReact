import './styles.css';

interface LikeButtonProps {
  isAuth: boolean;
  needAuthText: string;
}

export const LikeButton = ({ isAuth, needAuthText }: LikeButtonProps) => {
  const onClick = () => {
    alert('Вы успешно поставили лайк');
  };

  return (
    <>
      {isAuth ? (
        <button onClick={onClick}>Поставить лайк</button>
      ) : (
        <div>{needAuthText}</div>
      )}
    </>
  );
};
