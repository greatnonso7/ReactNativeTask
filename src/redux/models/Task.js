import {reducerActions as reducers} from './reducer';
import {sleep} from '../../utils';
import {db} from '../../db';

const IState = {
  isError: false,
  tasks: [],
};

export const Task = {
  name: 'Task',
  state: IState,
  reducers,
  effects: (dispatch: {[key: string]: any}) => ({
    async getTasks(_, state) {
      dispatch.Task.setError(false);

      if (state.Task.tasks > 0) return;

      try {
        const data = await sleep(1000, db.getSecretQuestions);
        if (data) {
          dispatch.Task.setState({
            tasks: data,
          });
        }
      } catch (error) {
        this.handleError(error);
      }
    },

    async handleError(error) {
      dispatch.Task.setError(true);
      console.log(error);
    },
  }),
};
