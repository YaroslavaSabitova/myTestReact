import { useDisclosure } from './useDisclosure';

export const ToggleText = () => {
  const { isOpen, toggle } = useDisclosure(false, {
    onOpen: () => console.log('Open'),
    onClose: () => console.log('Close'),
  });

  return (
    <div className='page'>
      <div className='card'>
        <button onClick={toggle}>Открыть или закрыть блок с текстом</button>
      </div>

      {isOpen && (
        <p className='content'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores atque
          delectus dolor doloremque, dolores doloribus ducimus ea eos est explicabo
          facilis magnam molestiae nisi officia optio praesentium quaerat quibusdam quos,
          sapiente tempore ut voluptatem voluptatum.
        </p>
      )}
    </div>
  );
};
