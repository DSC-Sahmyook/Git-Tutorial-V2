import express from 'express';
import UsersData from '../data/users.json';

import gitLog from 'git-log';

const router = express.Router();

router.get("/", (req,res,next)=>{
    console.log("Hello");
    res.json("Hello");
});

router.get("/user", (req, res)=>{
    res.json({
        list: UsersData,
    })
});

router.get("/history", (req, res)=>{
    console.log("called");
    gitLog().then(commits=>{
        console.log("called",commits);
        res.json({
            list: [],
            commits: commits
        })
    })
    .catch(err=>{
        console.log("failed", err);
        res.json({error: err});
    });
});

export { router };