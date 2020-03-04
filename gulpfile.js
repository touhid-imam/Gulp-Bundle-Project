const gulp = require('gulp');
const run = require('gulp-run');


function pushTags(success){
	const tag = 'Version-1.0';
	run(`git tag ${tag}`).exec();
	run(`git add .`).exec();
	run(`git commit -m ${tag}`).exec();
	run(`git push origin master`).exec();
	success();
}

exports.pushTags = pushTags;