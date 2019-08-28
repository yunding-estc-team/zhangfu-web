import ReduxMap from "../utils/ReduxMap";
import Loging from "../login/component/login";
import Input1 from "../login/input/input1";
import Input2 from "../login/input/input2";
import Approve from "../information/component/approve/going";
import Approve1 from "../information/component/approve/over";
import Call from "../information/component/name";
import Personal from "../information/component/personal/personal";
import Phone from "../information/component/phone";
import Code from "../information/component/possword";
import Postbox from "../information/component/postbox";

// 为各个组件加入redux
export const loging = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToProps)(Loging);
export const input1 = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToProps)(Input1);
export const input2 = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToProps)(Input2);
export const approve = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToProps)(Approve);
export const approve1 = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToProps)(Approve1);
export const call = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToProps)(Call);
export const personal = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToProps)(Personal);
export const phone = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToProps)(Phone);
export const code = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToProps)(Code);
export const postbox = connect(ReduxMap.mapStateToProps,ReduxMap.mapDispatchToProps)(Postbox);