document.addEventListener("DOMContentLoaded", (event) => {
    const app = new Vue({
        el: "#app",
        data: {
            users: [],
            histories: [],
            title:"DSC/GIT-Tutorial",
            content_state:"USERS", // USERS / HISTORIES

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
            }
        },
        created: function () {
            this.fetchUsers()
            .then(result=>{ this.users = result.data.list; console.log(result.data); })
            .then(this.fetchHistories)
            .then(result=>{ this.histories = result.data.list; console.log(result.data); });
        },
    });
});