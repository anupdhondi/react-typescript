import ReactDOM from 'react-dom/client';
import UserSearch from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
