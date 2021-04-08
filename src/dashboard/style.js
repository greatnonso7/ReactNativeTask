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
  spectaText: {
    ...main.regularText12,
    fontSize: hp(11),
    lineHeight: hp(14),
    textAlign: 'center',
    // borderWidth: 1,
  },
  spectaLogo: {
    height: wp(38),
    width: wp(38),
    marginBottom: wp(5),
    resizeMode: 'contain',
    // borderWidth: 1,
  },
  imageRow: {
    height: wp(88),
    position: 'absolute',
    width: wp(140),
    zIndex: 1000,
    resizeMode: 'contain',
  },
  imageRowContainer: {
    // borderWidth: 1,
    // width: wp(88 * 2),
    overflow: 'visible',
    flex: 1,
    zIndex: 1000,
  },
  saleCount: {
    ...main.boldText16,
    marginRight: wp(20),
    color: colors.grey400,
  },
  saleLabel: {
    ...main.regularText16,
    marginRight: wp(20),
    color: colors.grey400,
  },
  durationText: {
    ...main.regularText14,
    // borderWidth: 1,
  },
  downIcon: {
    height: wp(12),
    width: wp(12),
    marginLeft: wp(10),
    tintColor: colors.red500,
    // borderWidth: 1,
  },
  durationButton: {
    width: wp(100),
    height: hp(35),
    borderWidth: wp(1.5),
    borderRadius: wp(4),
    borderColor: colors.red500,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    width: wp(100),
    backgroundColor: colors.red500,
  },
  growthBar: {
    width: wp(200),
    height: hp(5),
    backgroundColor: colors.grey300,
    borderRadius: wp(10),
  },
  row: {
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowSpaced: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  balanceText: {
    ...main.boldText24,
    paddingTop: hp(10),
  },
  sectionLabel: {
    ...main.regularText16,
    marginRight: wp(50),
  },
  percentText: {
    ...main.regularText14,
    color: colors.green500,
    // borderWidth: 1,
  },
  balance: {
    width: '100%',
    paddingRight: 150,
  },
  summaryBody: {
    width: '100%',
    paddingHorizontal: wp(20),
    backgroundColor: colors.white,
    flex: 1,
    marginTop: hp(3),
    paddingTop: hp(10),
  },
  servicesListContainer: {
    width: deviceWidth,
    backgroundColor: colors.white,
  },
  gridIcon: {
    height: wp(32),
    width: wp(32),
    resizeMode: 'contain',
    marginBottom: wp(10),
    // borderWidth: 1,
  },
  item: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
    margin: 0.7,
    height: wp(88),
    paddingTop: wp(10),
    // borderWidth: 1,
  },
  itemInvisible: {
    // backgroundColor: 'transparent',
    backgroundColor: 'white',
    zIndex: -100,
  },
  itemText: {
    ...main.regularText12,
    lineHeight: hp(15),
    textAlign: 'center',
    // borderWidth: 1,
  },

  headerIconLabel: {
    ...main.regularText16,
    color: colors.white,
    marginTop: hp(6),
  },
  headerIcon: {
    width: hp(32),
    height: hp(32),
    marginBottom: hp(6),
  },
  headerButton: {
    width: wp(166),
    height: hp(98),
    justifyContent: 'flex-end',
    alignItems: 'center',
    // borderColor: 'white',
    // borderWidth: 1,
    paddingBottom: hp(16),
  },
  header: {
    width: '100%',
    paddingTop: paddingTopiOS + hp(16),
    paddingBottom: hp(16),
    paddingHorizontal: wp(16),
    backgroundColor: colors.grey700,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    height: '100%',
  },
  body: {
    backgroundColor: '#4ec3e0',
  },
});
