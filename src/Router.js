import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import SignInSignUp from './components/login';
import Login from './components/login/login';
import Register from './components/login/register';
import Search from './components/search'
import Info from './components/info'
import NativeCode from './components/native';
import Settings from './components/settings';
import PlanetDetails from './components/details';
import {
  TITILE_SIGNIN_SIGNUP,
  TITILE_LOGIN,
  TITILE_REGISTER,
  TITILE_SEARCH,
  TITILE_INFO,
  TITILE_NATIVE,
  TITILE_SETTINGS,
  LOGOUT,
  BACK,
} from './value/strings';


const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene key="loginregister"
          component={SignInSignUp}
          title={TITILE_SIGNIN_SIGNUP}
          hideNavBar
        />
        <Scene key="login"
          component={Login}
          title={TITILE_LOGIN}
        />
        <Scene key="register"
          component={Register}
          title={TITILE_REGISTER}
        />
        <Scene key='dasboard' tabs={true} tabBarPosition="bottom" hideNavBar>
          <Scene
            key="search"
            component={Search}
            title={TITILE_SEARCH}
            rightTitle={LOGOUT}
            onRight={() => Actions.loginregister({ type: ActionConst.RESET })}
          />
          <Scene
            key="info"
            component={Info}
            title={TITILE_INFO}
          />

          <Scene
            key="native"
            component={NativeCode}
            title={TITILE_NATIVE}
          />

          <Scene
            key="settings"
            component={Settings}
            title={TITILE_SETTINGS}
            rightTitle={LOGOUT}
            onRight={() => Actions.loginregister({ type: ActionConst.RESET })}
          />
        </Scene>
        <Scene
          key="planetDetails"
          backTitle={BACK}
          component={PlanetDetails}
          title={TITILE_SEARCH}
          rightTitle={LOGOUT}
          onRight={() => Actions.loginregister({ type: ActionConst.RESET })}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
