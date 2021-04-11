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
  buttonTitle: {
    ...main.semiBoldText16,
    color: colors.white,
  },
  taskTitle: {
    ...main.regularText16,
    color: '#757285',
    paddingBottom: hp(10),
  },
  taskHeading: {
    ...main.semiBoldText16,
  },
  completedHeading: {
    ...main.semiBoldText16,
    textDecorationLine: 'line-through',
  },
  tasksContainer: {
    width: wp(330),
    padding: hp(20),
    backgroundColor: '#F9FAFC',
    marginBottom: hp(10),
    borderRadius: hp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radio: {
    height: hp(30),
    width: wp(30),
    borderWidth: hp(2),
    borderRadius: hp(50),
    backgroundColor: colors.white,
    borderColor: '#D4D5D7',
  },
});
