## This lab (Lab # 3 on 4/18/2015) is about Git (local repository), Github and a few of the simple commands. 

Commands used will include git add, git commit, git pull, git checkout, git branch, git push, git log, git status, git diff , git tag,  git rebase and git merge


- Here is a cheat sheet for git commands https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf

0. Please generate ssh keys if you have not done so. Please follow the instructions (under creating an SSH key on linux and Mac OS X) in this website and add it to your git hub page. https://help.github.com/articles/generating-ssh-keys/
 

1. Create a local repository exercise01 from command line by following instructions
from slide 7 to 27 of https://github.com/rcos/Git-Introduction-Part-I and in the slide file the index.html  . create a README.Md file
- This file should include your name , your photograph and your graduating
year as a bullet-ed list. Md stands for Markdown language - Please
read the cheat sheet http://scottboms.com/downloads/documentation/markdown_cheatsheet.pdf - and then push it to your git hub repository with the same name.
You will provide a link to this repository in your Lab3 answer git-hub page.

2. In the local repository, create two branches, happybranch and happierbranch.
 go to happybranch, change the README.Md file to include a statement about what project you are planning to work on. Then go to happierbranch, change the
README.Md file to include which websites you looked at for your project.
Show it to one of the lab helpers (TAs or Moorthy) about what you have done. Please see slides 30 through 41. Merge them. 

3.   Download gitk and visualize the branching diagram. using gitk and gitk -all  compare it with this command
git log --graph --oneline --decorate

4.  Create a repository Exercise02 in github (in the web itself). Create Two branches of the master branch,
Test1 and Test2. In each of the branches create a different README.Md file Check out the Test1 branch from command line and make modifications to README. Md and push it back to Test1 branch in the github.

5. Fork the https://github.com/octocat/Spoon-Knife repository by pressing the Fork command in the top right.
clone that in your desktop. Add a file myprojectprogress.Md and write how you are making progress with your project selection and push it back to your git hub respository. Follow the instructions in https://guides.github.com/activities/forking/index.html

6. Do the four levels (first four levels) in http://pcottle.github.io/learnGitBranching/ Have a screen shot  in your lab report.

65. Please fork the repostiry https://github.com/mskmoorthy/pulreq/ and edit the file students.md to mark your attendence - (write 9/18/2015) and make your pull request.

7. Please understand the command git diff from the example given here https://www.safaribooksonline.com/library/view/version-control-with/9780596158187/ch08s02.html For the previous question is there a diff file and examine the content of the diff file.

8. Understand git tagging from this example https://git-scm.com/book/en/v2/Git-Basics-Tagging and this http://rogerdudler.github.io/git-guide/

9. Create a Project git hub repository called courseproject. Create a file References.Md and add the websites/project pages you have seen for. The result should be back in the github repository.

10. Clone the repository https://github.com/mskmoorthy/Story - One (Only one) member of each Table creates one (just one branch per table) branch - Table1, Table2,....
Each member of the table create a file name called table_<number>.Md and write your project ideas. Each table merges on that branch. Then each table merges with the master branch. https://github.com/rcos/Git-Introduction-Part-II and in the index.html slides will be helpful
