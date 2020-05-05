document.addEventListener("DOMContentLoaded", (event) => {
    const app = new Vue({
        el: "#app",
        data: {
            users: [],
            histories: [],
        },
        methods: {
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
        },
        created: function () {
            this.fetchUsers()
            .then(result=>{ this.users = result.data.list; })
            .then(this.fetchHistories)
            .then(result=>{ this.histories = result.data.list; console.log(this.data) });
        },
    });
});