document.addEventListener("DOMContentLoaded", (event) => {
    moment.locale('ko');
    const app = new Vue({
        el: "#app",
        data: {
            users: [],
            commits: [],
            title:"DSC/GIT-Tutorial",
            content_state:"COMMITS", // USERS / HISTORIES
        },
        methods: {
            changeContentState: function(state){
                this.content_state = state;
            },
            fetchUsers: () => {
                console.log("load users");
                return new axios({
                    method:"get",
                    url: "/api/user"
                });
            },
            fetchHistories: () => {
                console.log("load histories");
                return new axios({
                    method:"get",
                    url:"/api/history"
                });
            },
            getAvatarUrl: (user_name)=>{
                return (
                    "https://avatars.githubusercontent.com/" + `${user_name}`
                );
            },
            getGithubUrl:user_name=>{
                return ("https://github.com/" + `${user_name}`);
            },
            shortHash:hash=>{
                return hash.slice(0,7);
            },
            formattedDate:date=>{
                
                return (new moment(date)).fromNow()
            }
        },
        created: function () {
            this.fetchUsers()
            .then(result=>{ this.users = result.data.list; console.log(result.data); })
            .then(this.fetchHistories)
            .then(result=>{ this.commits = result.data.list; console.log(result.data); });
        },
    });
});