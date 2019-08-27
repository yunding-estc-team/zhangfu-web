import api,{instance} from "./url";
export default class CompetitionApi {

    // 获取赛事详情
    static getCompetitionInfo=(id)=>{
        return instance.get(api.competition.getCompetitionInfo,{
            params:{
                // 赛事id
                id:id,
            }
        });
    };

    // 关注赛事
    attention=()=>{
        let data={};
        instance.put(api.competition.attention,data)
            .then(res=>{
                if (res.data.code === "200") {
                    console.log(res.data);
                    console.log("success");
                }
            })
    };

    // 获取报名链接
    link=()=>{
        instance.get(api.competition.joinLink,{
            params:{
                id:""
            },
        })
            .then(res=>{
                if (res.data.code === "200") {
                    console.log("success");
                    console.log(res.data.data);
                }
            })
    };

    // 认领赛事
    claim=()=>{
        let data  = {
            // 赛事id
            id:"",
            // 文件 路径
            path:"",
            // 文件hash
            hash:"",
        };
        instance.post(api.competition.claim,data)
            .then(res=>{
                if (res.data.code === "200") {
                    console.log("success");
                    console.log(res.data.data);
                }
            })
    };

    // 首页赛事信息获取
    static home=(t,c,p)=>{
        return instance.get(api.competition.getRank,{
            params:{
                // 当前页面
                c:c,
                // 页面大小
                p:p,
                // 类型
                t:t,
            }
        })
    };

    // 获取rgr
    rgr=()=>{
        instance.get(api.competition.rgr,{
            params:{
                id:"",
            }
        })
            .then(res=>{
                if (res.data.code === "200") {
                    console.log("success");
                    console.log(res.data.data);
                }
            })
    };

    // 获取点击量
    getClick=()=>{
        instance.get(api.competition.click,{
            params:{
                id:"",
            }
        })
            .then(res=>{
                if (res.data.code === "200") {
                    console.log("success");
                    console.log(res.data.data);
                }
            })
    };

    // 获取热度
    getHot=()=>{
        instance.get(api.competition.hot,{
            params:{
                id:"",
            }
        })
            .then(res=>{
                if (res.data.code === "200") {
                    console.log("success");
                    console.log(res.data.data);
                }
            })
    };
}