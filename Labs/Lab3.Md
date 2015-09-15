## This lab (Lab # 3 on 4/18/2015) is about Git (local repository), Github and a few of the simple commands. 

Commands used will include `git add`, `git commit`, `git pull`, `git checkout`, `git branch`, `git push`, `git log`, `git status`, `git diff` , `git tag`,  `git rebase` and `git merge`


- Here is a cheat sheet for git commands https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf
- https://git-scm.com/book/en/v2  very nice git book.




## Part 1

> Please generate ssh keys if you have not done so. Please follow the instructions (under creating an SSH key on linux and Mac OS X) in this website and add it to your git hub page. https://help.github.com/articles/generating-ssh-keys/
 

2. Create a local repository exercise01 from command line by following instructions
from slide 7 to 27 of https://github.com/rcos/Git-Introduction-Part-I and in the slide file the index.html  . create a README.Md file.
- This file should include your name , your photograph and your graduating
year as a bullet-ed list. Md stands for Markdown language - Please
read the cheat sheet http://scottboms.com/downloads/documentation/markdown_cheatsheet.pdf

*Provide a link to this repository in your Lab3 blog post.*

3. Create a repository on github and push the README.md file you created.

> hint: you should be doing something like `git init`, `git add README.md`, `git commit`, `git remote add origin <repo url>`, and `git push origin master`

4. Create a file `first.py` that prints "Hello World!". Add the file, commit it, and push it to your github repository on the master branch with `git push origin master`.

5. Create a new branch called `mars` with `git branch mars`. Check out the mars branch by doing `git checkout mars`. Change `first.py` to print "Hello Mars!". Add, commit and push this file to the mars branch using `git push origin mars`.

6. Do the same thing with a branch called `jupiter`.

7. Install gitk with `sudo apt-get install gitk`. Visualize the branching diagram. using gitk and gitk -all  compare it with this command `git log --graph --oneline --decorate`.

## Part 2

1. You can create a derivative of a repository by forking. Fork the https://github.com/octocat/Spoon-Knife repository by pressing the Fork button in the top right corner of Github.

2. Clone the fork you made using `git clone <fork url>`

3. Add a file `myprojectprogress.md` and write how you are making progress with your project selection and push it back to your forked Github repository. ( if you need help, see the instructions in https://guides.github.com/activities/forking/index.html

4. Do the four levels (first four levels) in http://pcottle.github.io/learnGitBranching/. Include a screenshot in your lab report.

## Part 3

1. Fork the repository https://github.com/mskmoorthy/pulreq/ and edit the file students.md to mark your attendence - (write 9/18/2015) and make a pull request. (Ask a TA to merge your pull request).

2. Make sure you understand the command `git diff` from the example given here https://www.safaribooksonline.com/library/view/version-control-with/9780596158187/ch08s02.html For the previous question is there a diff file and examine the content of the diff file.

3. Understand git tagging from this example https://git-scm.com/book/en/v2/Git-Basics-Tagging and this http://rogerdudler.github.io/git-guide/

4. Create a Project Github repository called courseproject. Create a file `References.md` and add any projects or websites that have interested you so far.

5. Clone the repository https://github.com/mskmoorthy/Story - One (Only one) member of each table creates one (just one branch per table) branch - Table1, Table2,....
Each member of the table create a file name called table_<number>.Md and write your project ideas. Each table merges on that branch. Then each table merges with the master branch. Resolve any merge conflicts that occur along the way. https://github.com/rcos/Git-Introduction-Part-II and in the index.html slides will be helpful
