import { ChangeEvent, FormEvent } from 'react';

export const FormEvents = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    console.log('e.target.checked', e.target.checked);
  };

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    console.log('e.target.value', e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    console.log('e.target.value', e.target.value);
  };

  return (
    <div>
      <h3>Обработка событий формы</h3>

      <form className='form' action='' onSubmit={handleSubmit}>
        <h3 className='form-element'>Форма для тренировки событий</h3>
        <div className='form-element'>
          <label className='label-input'>Текстовое поле ввода:</label>
          <input type='text' required onChange={handleInputChange} />
        </div>
        <div className='form-element'>
          <label className='label-input'>Чекбокс:</label>
          <input type='checkbox' required className='form-element' onChange={onChange} />
        </div>
        <fieldset className='form-element'>
          <legend>Радио кнопки</legend>
          <div>
            <input
              type='radio'
              id='One'
              name='training'
              value='один'
              onChange={onValueChange}
            />
            <label htmlFor='One'>One</label>
          </div>
          <div>
            <input
              type='radio'
              id='Two'
              name='training'
              value='два'
              onChange={onValueChange}
            />
            <label htmlFor='Two'>Two</label>
          </div>
        </fieldset>

        <button type='submit' className='form-element'>
          Сабмит формы
        </button>
      </form>
    </div>
  );
};
