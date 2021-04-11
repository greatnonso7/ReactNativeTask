import {StyleSheet} from 'react-native';
import {
  wp,
  hp,
  paddingTopiOS,
  deviceWidth,
} from '../shared/responsive-dimesion';
import {normalColors as colors} from '../colors';
import {globalStyle} from '../style';

const {main} = globalStyle(colors);

export const styles = StyleSheet.create({
  profile: {
    height: hp(55),
    width: wp(60),
    bottom: hp(5),
  },
  profileContainer: {
    height: hp(65),
    width: wp(65),
    backgroundColor: colors.purple100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...main.regularText24,
    color: '#757285',
  },
  name: {
    ...main.boldText24,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    height: '100%',
  },
  body: {
    marginHorizontal: hp(20),
  },
  navButtons: {
    height: hp(60),
    width: wp(130),
    backgroundColor: colors.purple300,
    marginLeft: hp(22),
    borderRadius: hp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
