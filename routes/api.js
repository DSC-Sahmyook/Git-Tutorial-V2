import express from 'express';
const router = express.Router();

import UsersData from '../data/users.json';
import {gitlogPromise} from 'gitlog';

router.get("/", (req,res,next)=>{
    res.json("Hello");
});

router.get("/user", (req, res)=>{
    res.json({
        list: UsersData,
    })
});

router.get("/history", (req, res)=>{
    gitlogPromise({
        repo: __dirname,
        fields: ["hash", "abbrevHash", "subject", "authorName", "authorEmail" , "authorDate" ,"committerDate","committerEmail","committerName"]
    })
    .then(commits=>{
        console.log(commits);
        res.json({
            list : commits
        })
    })
    .catch(err=>{
        console.log("err");
        res.json({
            err: err
        });
    });
});

export { router };