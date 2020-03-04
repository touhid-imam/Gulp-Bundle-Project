const gulp = require('gulp');
const run = require('gulp-run');
const fs = require('fs');


function pushTags(success){
	const p = fs.readFileSync('index.html', 'utf-8');
	const versionFind = p.match(/\d\.\d\.\d/g);
	run(`git tag ${versionFind}`).exec()
    run( `git push origin ${versionFind}` ).exec();
    run(`git add .`).exec();
    run(`git commit -m ${versionFind}`).exec();
    run(`git push origin master`).exec();
	success();
}

exports.pushTags = pushTags;