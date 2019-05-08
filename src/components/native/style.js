/**
 * Plannet Screen UI Styles
 */
import {
    PADDING_TOP,
    PADDING_LEFT,
    PADDING_BOTTOM,
    PADDING_RIGHT,
    SIZE_NORMAL,
    SIZE_SMALL,
} from '../../value/dimen';
import { COLOR_WHITE, COLOR_BLACK } from '../../value/colors';

export const infoStyle = {
    containerStyle: {
        flex: 1,
        paddingLeft: PADDING_LEFT,
        paddingTop: PADDING_TOP,
        paddingBottom: PADDING_BOTTOM,
        paddingRight: PADDING_RIGHT,
    },
    searchViewStyle: {
        backgroundColor: COLOR_WHITE,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius:10,
      },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        fontSize: SIZE_NORMAL,
      },
      loginText: {
        fontFamily: 'Cochin',
        fontSize: SIZE_NORMAL,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 10,
    },
  };
  export const itemStyle = {
      titleStyle: {
        fontSize: SIZE_NORMAL,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
      },
      descStyle: {
        fontSize: SIZE_NORMAL,
        fontFamily: 'Cochin',
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
      }
  };