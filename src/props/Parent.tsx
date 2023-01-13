import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <div>
      <ChildAsFC color="red" clickHandler={() => console.log('clicked')}>
        Abcd
      </ChildAsFC>
    </div>
  );
};

export default Parent;
