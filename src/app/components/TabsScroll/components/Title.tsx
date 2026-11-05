import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

interface TitleProps {
  children: React.ReactNode;
  tabName: string;
}

export const Title = ({ children, tabName }: TitleProps) => {
  const [searchParams] = useSearchParams();
  // Получаем текущий таб из URL
  const currentTab = searchParams.get('currentTab');

  // Создаем ref для тега h4
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Если таб в URL совпадает с именем этого заголовка
    if (currentTab === tabName && titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentTab, tabName]); // Эффект сработает при смене URL

  return <h4 ref={titleRef}>{children}</h4>;
};
