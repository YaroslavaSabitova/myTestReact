import './styles.css';

interface ShareButtonProps {
  isAuth: boolean;
  needAuthText: string;
}

export const ShareButton = ({ isAuth, needAuthText }: ShareButtonProps) => {
  const onClick = () => {
    alert('Вы успешно поделились картинкой');
  };

  return (
    <>
      {isAuth ? (
        <button onClick={onClick}>Поделиться</button>
      ) : (
        <div>{needAuthText}</div>
      )}
    </>
  );
};
