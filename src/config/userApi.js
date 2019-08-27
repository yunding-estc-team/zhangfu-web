import api, {instance} from "./url";
export default class UserApi{

    /**
     * 修改真实姓名
      */
    update(){
        //传给后台的数据
        let data ={
            realname:"",
        };
        //axios
        instance.post(api.user.updatePrivateInfo,data)
            .then(res=> {
                if (res.data.code === "200") {
                    this.setState({msg: "修改成功"});
                    console.log(res.data.msg);
                    //todo 跳转回修改信息页
                }else{
                    this.setState({msg:"修改失败"});
                    console.log(res.data.msg);
                    //todo 留在修改姓名页面
                }
            })
    };

    // 判断用户类型
    static judgeUser=(e)=>{
        return instance.post(api.user.checkAccountType,{address:e.nativeEvent.target.value})
            .then(res=>{
                if (res.data.code!=="200"){
                    this.setState({msg:"手机/电子邮件非法"});
                }else{
                    instance.post(api.user.checkAccountExist,{userName:this.state.userName})
                        .then(res=>{
                            //判断是否存在200正常
                            if(res.data.code===204){
                                this.setState({msg:"手机/电子邮件已注册"});
                                console.log(this.state.msg);
                            }else{
                                this.setState({msg:""});
                                this.setState({isIllegal:false});
                            }
                        });
                }
            });
    };
    static exist=(e)=>{
       return instance.post(api.user.checkAccountExist,{userName:this.state.userName});
    };

    // 发送验证码
    sendCode=()=>{
        console.log("code");
        if (this.state.isIllegal===true){
            return;
        }
        let data = {name:"19834522726"};
        instance.post(api.user.sendCode,data)
            .then(res=>{
                console.log(res.data);
                if (res.data.code === "200") {
                    //todo 发送成功
                    console.log("success");
                }else{
                    //todo 发送失败
                    console.log("failure");
                }
            })
    };

    // 请求注册接口
    register=()=>{

        //传输的数据
        let data =
            {
                // 验证码
                code:this.state.code,
                // 用户手机/邮箱
                address:this.state.userName,
                // 用户的类型
                type:this.state.type,
                password:this.state.password,
            };
        // axios
        instance.post(api.user.register,data)
            .then(res=>{
                if (res.data.code==="200"){
                    // todo 跳转到注册成功
                    console.log("success");
                }
            })
    };
    /**
     * 用户登录
     */
    login=()=>{
        // const url = api.user.loginByPassword;
        let data = {};
        let url;
        if (this.state.active===true){
            //验证code登录
            url = api.user.loginByCode;
        }else{
            //密码登录
            url = api.user.loginByPassword;
        }
        instance.post(url,data)
            .then(response=>{
                console.log(response.data.code==="200");
                if(response.data.code === "200"){
                    // 存储token到localStorage
                    localStorage.setItem("token",response.data.data);
                }})
            .catch(error=>{
                //todo 错误处理
            });
    };






    // 绑定邮箱,发送邮箱和验证码
    bindPhone(){
        let data ={
            address:"",
            code:"",
        };
        instance.post(api.user.checkCode,data)
            .then(res=> {
                console.log(res.data.code);
                if (res.data.code === "200") {
                    instance.post(api.user.updateInfo, data)
                        .then(res => {
                            console.log(res.data.code);
                            if (res.data.code === "200") {
                                this.setState({msg: "绑定成功"});
                                console.log(res.data.msg);
                            } else {
                                this.setState({msg: "绑定失败"});
                                console.log(res.data.msg);
                            }
                        })

                }
            });
    };

    /**
     * 发送邮箱验证码,有邮箱发验证码
     */
    sendEmail () {
        let data = {
            address: "",
        };

        instance.post(api.user.sendEmailCode, data)
            .then(res => {
                console.log(res.data.code === "200");
                if (res.data.code === "200") {
                    this.setState({msg: "验证码发送成功"});
                    console.log(res.data.msg);
                } else {
                    this.setState({msg: "验证码发送失败"});
                    console.log(res.data.msg);
                }
            });
    };

    /**
     *改绑手机号
     */

    changePhone(){
        instance.post(api.user.sendbindPhoneCode)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"验证码发送成功"});
                    console.log(res.data.msg);
                }else{
                    this.setState({msg:"验证码发送失败，请重新发送"});
                    console.log(res.data.msg);
                }
            });
    };

    // 检验验证码是否正确,有token
    checkCode(){
        let data = {
            code:""
        };

        instance.post(api.user.tokenCheckCode,data)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200") {
                    this.setState({msg: "校验正确"});
                    console.log(res.data.msg);
                    //todo 跳转到绑定手机号页面
                }else{
                    this.setState({msg:"校验失败，请检查您的验证码是否正确"});
                    console.log(res.data.msg);
                    //todo 不做跳转，仍在原页面
                }
            });
    };

    /**
     * 绑定手机号
     */

    sendPhone () {
        let data = {
            address: "",
        };

        instance.post(api.user.sendPhoneCode, data)
            .then(res => {
                console.log(res.data.code === "200");
                if (res.data.code === "200") {
                    this.setState({msg: "验证码发送成功"});
                    console.log(res.data.msg);
                } else {
                    this.setState({msg: "验证码发送失败"});
                    console.log(res.data.msg);
                }
            });
    };
    bindPhone() {
        let data ={
            address:"",
            code:""
        }
        instance.post(api.user.checkCode,data)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"校验成功"});
                    console.log(res.data.msg);
                    //将新手机号以及当前TOKEN传给入后台并进行绑定
                    instance.post(api.user.updateInfo,data)
                        .then(res=>{
                            console.log(res.data.code);
                            if(res.data.code==="200"){
                                this.setState({msg:"改绑成功"});
                                console.log(res.data.msg);
                                //todo 跳转回账户安全页面
                            }else{
                                this.setState({msg:"改绑失败，请重试"})
                                console.log(res.data.msg);
                                //todo 仍留重新绑定页面
                            }
                            })
                }else{
                    this.setState({msg:"校验失败，请您检验您的验证码是否输入正确"})
                    console.log(res.data.msg);
                    //todo 仍留在重新绑定页面
                }
            });
    };

    /**
     * 私有信息修改
     */
    updatePrivateInfo(){
        let data={
            userNo:"",
            userSchool:"",
            userMajor:""
        }
        instance.post(api.user.updatePrivateInfo,data)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"修改信息成功，请重新认证"});
                    console.log(res.data.msg);
                    //todo 跳转回账户安全页面
                }else{
                    this.setState({msg:"修改失败，请重试"})
                    console.log(res.data.msg);
                    //todo 仍留在修改学生信息也买你
            }
            });
    };

    /**
     * 常规信息修改
     */
    updateInfo(){
        let data={

        }
        instance.post(api.user.updateInfo,data)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"修改信息成功，请重新认证"});
                    console.log(res.data.msg);
                    //todo 跳转回账户安全页面
                }else{
                    this.setState({msg:"修改失败，请重试"})
                    console.log(res.data.msg);
                    //todo 仍留在修改学生信息也买你
                }
            });
    };

    /**
     * 修改密码
     */
    changePassword(){
        let data = {
            password:"",
            newpassword:""
        }
        instance.post(api.user.changePassword,data)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"密码修改成功"});
                    console.log(res.data.msg);
                    //todo 跳转回账户安全页面
                }else{
                    this.setState({msg:"密码修改失败，请检验原密码是否正确"})
                    console.log(res.data.msg);
                    //todo 仍留在修改学生信息也买你
                }
            });
    };

    /**
     * 忘记密码（手机号）
     */
    //发送验证码
    sendPhoneCode(){
        let data ={
            address:"",
        }
        instance.post(api.user.sendPhoneCode,data)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"发送验证码成功"});
                    console.log(res.data.msg);
                }else {
                    this.setState({msg: "发送验证码失败"});
                    console.log(res.data.msg);
                }
            });
    };
    //检验验证码并修改密码
    //todo 检验两次输入的密码是否正确
    findPasswordByPhone() {
        let data = {
            address: "",
            code: "",
            newpassword: ""
        }
        instance.post(api.user.findPasswordByPhone, data)
            .then(res => {
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"修改密码成功"});
                    console.log(res.data.msg);
                }else {
                    this.setState({msg: "修改密码失败"});
                     console.log(res.data.msg);
                }
            });
    };

    /**
     * 忘记密码（邮箱）
     */
    //发送验证码
    sendEmailCode(){
        let data ={
            address:"",
        }
        instance.post(api.user.sendEmailCode,data)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"发送验证码成功"});
                    console.log(res.data.msg);
                }else {
                    this.setState({msg: "发送验证码失败"});
                    console.log(res.data.msg);
                }
            });
    };
    //检验验证码并修改密码
    //todo 检验两次输入的密码是否正确
    findPasswordByEmail() {
        let data = {
            address: "",
            code: "",
            newpassword: ""
        }
        instance.post(api.user.findPasswordByEmail, data)
            .then(res => {
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"修改密码成功"});
                    console.log(res.data.msg);
                }else {
                    this.setState({msg: "修改密码失败"});
                    console.log(res.data.msg);
                }
            });
    };

    /**
     * 搜索（下拉框推荐与输入内容相关的结果）
     */
    search(){
        let data={
            //搜索内容
            name:""
        }
        instance.post(api.user.searchName,data)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"搜索成功"});
                    console.log(res.data.msg);
                }else {
                    this.setState({msg: "搜索失败"});
                    console.log(res.data.msg);
            }
            });
    }

    /**
     * 搜索内容展示
     */
    searchResult(){
        let data={
            //搜索内容
            name:"",
            //当前页
            pageCurrent:"",
            //每页的行数
            pageSize:","
        }
        instance.post(api.user.searchAll,data)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"搜索成功"});
                    console.log(res.data.msg);
                }else {
                    this.setState({msg: "搜索失败"});
                    console.log(res.data.msg);
                }
            });
    }

    /**
     * 获取历史获奖记录
     */
    findHistoryPrize(){
        let data ={
            //当前页
            pageCurrent:"",
            //每页的行数
            pageSize:","
        }
        instance.post(api.user.selectJoinCompetion,data)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"搜索成功"});
                    console.log(res.data.msg);
                }else {
                    this.setState({msg: "搜索失败"});
                    console.log(res.data.msg);
                }
            });
    }
}
