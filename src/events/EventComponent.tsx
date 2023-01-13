import React from 'react';

const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(
      '🚀 ~ file: EventComponent.tsx:5 ~ onChange ~ e',
      e.target.value
    );
  };
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('🚀 ~ file: EventComponent.tsx:11 ~ onDragStart ~ e', e);
  };
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me!!
      </div>
    </div>
  );
};

export default EventComponent;
