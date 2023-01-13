interface ChildProps {
  color: string;
  clickHandler: () => void;
  children: any;
}

export const Child = ({ color, clickHandler }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={clickHandler}>Click me!!</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  clickHandler,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={clickHandler}>Click me!!</button>
    </div>
  );
};
