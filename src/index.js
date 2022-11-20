import ReactDOM from 'react-dom/client';
import initApp from './init';

const runApp = () => {
  const app = initApp()
    .then((item) => {
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        item,
      );
    });
  return app;
};

runApp();
