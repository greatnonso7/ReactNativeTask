import {reducerActions as reducers} from './reducer';

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
        const data = await state.Task.tasks;
        if (data) {
          return data;
        }
      } catch (error) {
        this.handleError(error);
      }
    },

    async addSingleTask({callback, data}, state) {
      dispatch.Task.setError(false);
      console.log(state, 'my state');
      try {
        console.log(typeof state.Task.tasks);
        const response = state.Task.tasks.push(data);
        console.log(response, 'response data');
        if (response) {
          console.log('Hello world');
        }
      } catch (e) {
        this.handleError(e);
      }
    },

    async handleError(error) {
      dispatch.Task.setError(true);
      console.log(error);
    },
  }),
};
