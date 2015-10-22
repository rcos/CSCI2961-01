# Lab 7 Community Development - (un)Leadership Oct 23, 2015

### Dr. Luis Ibanez talked about community and how people co-operates to contribute to a project

### In this lab, we will explore this further using automatic tools, software and manually. 
This will be done by groups (all students sitting in a table form  All the results should be docuemnted in a labreport7.md
and show it in your git hub account.

1) Take any five projects from http://rcos.io (table 1 takes the first five, table 2 takes the next 5 and so on - If the last few tables run out 
of projects, then please take it from http://rcos.rpi.edu/projects/archive_list/  - Write down the number of contributor, number of lines of code
and the first and last commit of the project (by hand)

2) Clone the project `https://github.com/hoxu/gitstats` in your local repository. Clone each of the five project (from 
github to your local directory). sitstats require gnuplot. So do a `sudo apt-get ibstall gnuplot-x11' . Then
you can run for example the command from command line  `./gitstats ~/Test/Observatory/ ~/OutputLab7/index.html` (I am doing this for Observatory Project).
You can see the output in a browser by typing `file:///home/moorthy/OutputLab7/index.html/index.html` and 
`file:///home/moorthy/OutputLab7/index.html/index.html
Repeat this for every 
one of the five projects. Compare your results from 1) to these results and write your comments. 
(If you are curious, please read and understand the python code  
`https://github.com/hoxu/gitstats/blob/master/gitstats` - Better yet if you have a better idea for some suggest improvements)

3) Streaming Visualization - Please read the webpage http://gource.io/ . Please download gource by
`sudo apt-get install gource` . Now go to each of the five cloned repository directories and execute the coomand
`gource` - You will get a streaming video of the activity in that project. Now you can create a youtube video of these projects.
To do this get `sudo apt-get install ffmpeg` . The excute the following two commands (from each of the cloned repositories directories)


`gource -1280x720 -o gource.ppm and`
`ffmpeg -y -r 60 -f image2pipe -vcodec ppm -i gource.ppm  -vcodec mpeg4 -b 3000k -s hd480 gource.mp4`

Here is an example youtube video of Observatory project (old) https://www.youtube.com/watch?v=si-kxnwKvjU
and 






- https://www.youtube.com/watch?v=SKArMLw1QY0&feature=youtu.be
