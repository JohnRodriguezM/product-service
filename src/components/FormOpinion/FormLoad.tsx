import { FormOpinion } from "./FormOpinion";
import { store } from './store';
import { Provider } from 'react-redux';

export const FormLoad = () => {
  return (
    <Provider store={store}>
      <FormOpinion />
    </Provider>
  );
};