import express from 'express';
const router = express.Router();

import UsersData from '../data/users.json';
import git_log_to_json from 'git-log-to-json';

router.get("/", (req,res,next)=>{
    res.json("Hello");
});

router.get("/user", (req, res)=>{
    res.json({
        list: UsersData,
    })
});

router.get("/history", (req, res)=>{
    git_log_to_json(".")
    .then(logs=>{
        res.json({
            list : logs
        })
    })
    .catch(err=>{
        console.log(err);
        res.json({
            err: err
        });
    });
});

export { router };