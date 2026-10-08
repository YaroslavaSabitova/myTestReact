import { useState, ChangeEvent, SyntheticEvent } from 'react';

export const Form = () => {
  // name = ''
  const [name, setName] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(name);
    setName('');
  };

  return (
    <div>
      <h2>Заполните форму:</h2>
      <form className='card' onSubmit={handleSubmit}>
        <label className='label'>
          Ваше имя:
          <input
            className='input'
            name='name'
            type='text'
            // value={name} и onChange={handleInputChange} делают поле управляемым
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <button type='submit'>Отправить</button>
      </form>
    </div>
  );
};
