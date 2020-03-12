const gulp = require('gulp');
const run = require('gulp-run');
const fs = require('fs');


function released(success){
	const p = fs.readFileSync('index.html', 'utf-8');
	const versionFind = p.match(/\d\.\d\.\d/g);
	return gulp.src('./**/**')
	.pipe(run(`git add .`).exec())
	.pipe(run(`git commit -m ${versionFind}`).exec())
	.pipe(run(`git push origin master`).exec())
	
	success();
}

exports.released = released;

// run(`git tag ${versionFind}`).exec()
//     run( `git push origin ${versionFind}` ).exec();
//     run(`git add .`).exec();
//     run(`git commit -m ${versionFind}`).exec();
//     run(`git push origin master`).exec();