import ReduxMap from "../utils/ReduxMap";
import Loging from "../login/component/login";
import Input1 from "../login/input/input1";
import Input2 from "../login/input/input2";
import {connect} from "react-redux";
import Personal from "../information/component/personal/personal";
// 为各个组件加入redux
export const loging = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToProps)(Loging);
export const input1 = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToProps)(Input1);
export const input2 = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToProps)(Input2);
