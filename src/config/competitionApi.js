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
    static attention=(competitionId)=>

        instance.put(api.competition.attention,{competitionId:competitionId})



    // 获取报名链接
    static link=()=>{
        return instance.get(api.competition.joinLink,{
            params:{
                id:""
            },
        })
    };

    // 认领赛事
    static claim=()=>{
        let data  = {
            // 赛事id
            id:"",
            // 文件 路径
            path:"",
            // 文件hash
            hash:"",
        };
        return instance.post(api.competition.claim,data)
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
    static rgr=()=>{
        return instance.get(api.competition.rgr,{
            params:{
                id:"",
            }
        })
    };

    // 获取点击量
    static getClick=()=>{
        return instance.get(api.competition.click,{
            params:{
                id:"",
            }
        })
    };

    // 获取热度
    static getHot=()=>{
        return instance.get(api.competition.hot,{
            params:{
                id:"",
            }
        })
    };
}