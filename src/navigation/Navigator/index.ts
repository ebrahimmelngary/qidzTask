import {navigate} from '../index';
import {NavigationData, Screens} from './ScreensType';

const navigateToScreen: (data: Screens & NavigationData) => void = (
  data: any,
) => {
  navigate(data.name, data.params);
};

export default navigateToScreen;

type ResetToIntroOrAuth = {
  navigation: any;
};
export const resetToIntroOrAuth: ({navigation}: ResetToIntroOrAuth) => void = ({
  navigation,
}: ResetToIntroOrAuth) => {
  resetToScreen({
    navigation,
    routes: [{name: 'Home'}],
  });
};

interface ResetParams {
  navigation: any;
  routes: Array<Screens>;
}

export const resetToScreen: (params: ResetParams) => void = ({
  navigation,
  routes,
}: ResetParams) => {
  navigation.reset({routes});
};
