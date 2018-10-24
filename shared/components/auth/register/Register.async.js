import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () =>
    import(/* webpackChunkName: "Register" */ './Register.container'),
});
