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
    static judgeUser=(userName)=>{
        return instance.post(api.user.checkAccountType,{address:userName});

    };

    static exist=(userName)=>{
       return instance.post(api.user.checkAccountExist,{address:userName});
    };

    // 发送验证码
    static sendCode=(address)=>{
        let data = {name:address};
        return instance.post(api.user.sendCode,data)
    };

    // 请求注册接口
    static register=(user)=>{
        return instance.post(api.user.register,user)
    };

    /**
     * 用户登录
     */
    static login=(url,data)=>{
        return instance.post(url,data)
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
    search(name){
            //搜索内容 name
        return instance.post(api.user.searchName,{name:name})
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
        };
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
    /**
     * 获取个人资料
     */
    listInfo(){
        instance.post(api.user.info)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"查看成功"});
                    console.log(res.data.msg);
                }else {
                    this.setState({msg: "查看失败"});
                    console.log(res.data.msg);
                }
            });
    }

    /**
     * 学生证上传
     */
    uploadStd(){
        let data ={
            // 提交文件的路径
            path:"",
            //已提交文件的删除hash
            hash:""
        };
        instance.post(api.user.uploadStd,data)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"提交成功"});
                    console.log(res.data.msg);
                }else {
                    this.setState({msg: "提交失败"});
                    console.log(res.data.msg);
                }
            });
    }

    /**
     * 获奖信息录入
     */
    insertPrizeInfo(){
        let data ={
            competitionName:"",
            reward:"",
            cover:""
        };
        instance.post(api.user.uploadStd,data)
            .then(res=>{
                console.log(res.data.code);
                if(res.data.code==="200"){
                    this.setState({msg:"录入成功"});
                    console.log(res.data.msg);
                }else {
                    this.setState({msg: "录入失败"});
                    console.log(res.data.msg);
                }
            });
    }

}
