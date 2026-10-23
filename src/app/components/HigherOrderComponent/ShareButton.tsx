import './styles.css';

interface ShareButtonProps {
  isAuth: boolean;
  needAuthText: string;
}

export const ShareButton = ({ isAuth, needAuthText }: ShareButtonProps) => {
  const onClick = () => {
    alert('Вы успешно поделились картинкой');
  };

  return <button onClick={onClick}>Поставить лайк</button>;
};
