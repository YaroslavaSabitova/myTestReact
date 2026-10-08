// вводим цену без НДС, либо цену с НДС.
// Второе поле пересчитывается автоматически.

import { useState } from 'react';

// Ставка НДС. Меняется здесь — пересчитывается везде.
const VAT_RATE = 0.2;

// --- Формулы ---
const addVat = (net: number): number => net * (1 + VAT_RATE);
const removeVat = (gross: number): number => gross / (1 + VAT_RATE);

// --- Утилита конвертации ---
function tryConvert(value: string, convert: (_: number) => number): string {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);

  // округляем до копеек — 2 знака
  const rounded = Math.round(output * 100) / 100;

  return rounded.toString();
}

// --- Типы ---

type TPrice = {
  scale: 'net' | 'gross'; // какая цена введена: без НДС или с НДС
  amount: string; // само значение строкой
};

type TPriceInputProps = {
  label: string;
  amount: string;
  onChange: (amount: string) => void;
};

// --- Один компонент для обоих полей ---

export const PriceInput = ({ label, amount, onChange }: TPriceInputProps) => {
  return (
    <fieldset className='card'>
      <label className='label'>
        {label}:
        <input
          className='input'
          type='text'
          inputMode='decimal'
          value={amount}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className='currency'> ₽</span>
      </label>
    </fieldset>
  );
};

// --- Родитель ---

export const VatNds = () => {
  const [{ scale, amount }, setValue] = useState<TPrice>({
    scale: 'net',
    amount: '',
  });

  const handleNetChange = (amount: string): void => {
    setValue({ scale: 'net', amount });
  };

  const handleGrossChange = (amount: string): void => {
    setValue({ scale: 'gross', amount });
  };

  // Активное поле показываем как есть, неактивное — конвертируем
  const net = scale === 'gross' ? tryConvert(amount, removeVat) : amount;

  const gross = scale === 'net' ? tryConvert(amount, addVat) : amount;

  // Показываем размер НДС отдельно — приятный бонус
  const vatAmount =
    net === '' || gross === '' ? '' : tryConvert(net, (n) => n * VAT_RATE);

  return (
    <div className='page'>
      <h2>Калькулятор НДС {VAT_RATE * 100}%</h2>
      <div className='content'>
        <PriceInput label='Цена без НДС' amount={net} onChange={handleNetChange} />
        <PriceInput label='Цена с НДС' amount={gross} onChange={handleGrossChange} />
      </div>
      {vatAmount && <p className='vat'>Сумма НДС: {vatAmount} ₽</p>}
    </div>
  );
};
