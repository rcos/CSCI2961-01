## Lab 4 on Documentation (9/25/2015)
### Created by Brian Callhan (Local BSD Guru) https://news.ycombinator.com/item?id=9240533 and https://twitter.com/__briancallahan/status/579115053711958016

One important, but often overlooked, contribution to Open Source Software is documentation.

Documentation spans a wide variety of written words: from manual pages to FAQs to handbooks

to websites. The value of good documentation cannot be understated, and there are always fixes to

be made. Good documentation allows users and developers alike to get software running correctly

and quickly, reduces frustration, gets new users excited for the software, and enhances

programming effort. Documentation is one of the hallmarks of the positive feedback loop in Open

Source Software. Good documentation enables good code. Good code enables good

documentation.

This lab will result in creating a patch that you can send to an Open Source project for

inclusion. You will be fixing a minor documentation bug, such as a typo. We will be using two

projects, each known for their high quality and care for good documentation: FreeBSD and

OpenBSD. You may choose which project's documentation to work with for this assignment.

# Free BSD
FreeBSD's documentation can be found on the web here: https://www.freebsd.org/docs.html

The primary documents are the Handbook and the man pages. The Handbook is quite large, and

covers every aspect of the system. The manual pages also describe the system, but from a different

perspective. There are also smaller handbooks, such as the Developer's Handbook:

https://www.freebsd.org/doc/en_US.ISO8859­1/books/developers­handbook/ and the Porter's

Handbook: https://www.freebsd.org/doc/en_US.ISO8859­1/books/porters­handbook/

# OpenBSD
OpenBSD's primary documentation is the FAQ: http://www.openbsd.org/faq/index.html

Additionally, there is the Porter's Handbook: http://www.openbsd.org/faq/ports/index.html

As well as the manual pages. One important note: OpenBSD prefers British spelling over

American spelling (FreeBSD prefers American spelling).

#Now the Problem

Any web page for either project that you go to is also fair game for this lab. One thing that

can be done for websites besides looking for typos is to click on all the links and make sure they

go to the site they say they will (or if they go to a website at all).

Browsing the manual pages is best if you have a familiarity with Unix. Here is an incomplete list

of Unix commands to get started: https://en.wikipedia.org/wiki/List_of_Unix_commands

as well as a description of how to navigate the manual:

https://en.wikipedia.org/wiki/Man_page#Manual_sections

Each numbered section of the manual also has a page named intro, which you can use to start

browsing.

Remember, for this assignment you are not necessarily reading for correctness of documentation

(unless you know enough about a particular topic to do so), you are reading for spelling and

grammar.

# If you choose FreeBSD:

You will need a subversion client. Most Linux and all BSDs have subversion in their package

repositories. Windows users can use http://tortoisesvn.net/

The first thing you will want to do is identify the documentation fix first, before you check out any

code. Unlike git, subversion permits checking out only the directories you want to do work in, so

there is no need to grab the entire FreeBSD source tree.

Once you have identified what you will fix, you can then grab it. You do so by looking through

FreeBSD's source tree and locating the directory the file you want to edit is in:

https://svnweb.freebsd.org/

Manual pages are located in the base/ directory, everything else is located in the doc/ directory.

Once you have found your file, you can check out its directory by issuing the following command:

$ svn checkout https://svn0.us­west.FreeBSD.org/base/head local­directory/

This example will checkout the base source tree to a directory on your computer named local-
directory. You are responsible for editing the part of the command from “base” onward, to select

which section of the tree you want to check out and where you want it to be on your hard drive.

(Moorthy: I need to double check how to check out just the one directory you want to work in.

Will update.)

Next, use your favorite text editor to make the fix.

You then need to generate a diff that can be checked in by a committer. To do so on Unix, run:

$ svn diff filename > myfix.diff

You can name myfix.diff anything you want, but it is best if it ends in .diff or .patch. You can now

look at your diff to make sure it is correct.

If it is, you are ready to send your fix to FreeBSD. https://www.freebsd.org/support.html is the

website to report bug fixes. (You will need to create an account on their bugzilla, it's free.)

#If you choose OpenBSD:

You will need a cvs client. Most Linuxes and FreeBSD have cvs in their package repositories.

OpenBSD and NetBSD have cvs in their base install, so if you are using either of these, you need

not install any software. Windows users can use http://www.tortoisecvs.org/

The first thing you will want to do is identify the documentation fix first, before you check out any

code. Unlike git, cvs permits checking out only the directories you want to do work in, so there is

no need to grab the entire OpenBSD source tree.

Once you have identified what you will fix, you can then grab it. You do so by looking through

OpenBSD's source tree and locating the directory the file you want to edit is in:

http://cvsweb.openbsd.org/cgi­bin/cvsweb/

Manual pages are located in the src/ directory, everything else is located in the www/ directory.

Once you have found your file, you can check out its directory by issuing the following command:

$ cvs ­danoncvs@openbsd.nycbug.org:/cvs checkout ­P www/faq

This example will checkout the OpenBSD FAQ web pages to a directory on your computer named

www/faq. You are responsible for editing only the last part of the command (“www/faq”) to

identify which section of the tree you want to check out.

Next, use your favorite text editor to make the fix.

You then need to generate a diff that can be checked in by a developer. To do so on Unix, run:

$ cvs diff ­uNp filename > myfix.diff

You can name myfix.diff anything you want, but it is best if it ends in .diff or .patch. You can now

look at your diff to make sure it is correct.

If it is, you are ready to send your fix to OpenBSD. OpenBSD accepts documentation patches to

their tech@openbsd.org mailing list. Diffs must be sent inline (that is, the body of the email must

itself be your diff). It is also preferable if you add some information about the diff in the email, so

you will want to open the diff in your favorite text editor again, put one or two blank lines at the

very top, and add that information.

Here are some examples of documentation diffs recently sent to OpenBSD to give you a feel for

how they should look:

http://marc.info/?l=openbsd­tech&m=143650036605323&w=2

http://marc.info/?l=openbsd­tech&m=143654729117170&w=2

http://marc.info/?l=openbsd­tech&m=143676378121176&w=2

http://marc.info/?l=openbsd­tech&m=143551212528638&w=2

http://marc.info/?l=openbsd­tech&m=143690756728432&w=2

Wrapping up (both FreeBSD and OpenBSD):

Now that your diff is submitted, you may be asked to provide more information over the coming

days. Don't forget to answer any inquiries, this helps make sure your diff is correct and in shape to

be committed.

If everything checks out, you should see your name in the FreeBSD or OpenBSD commit logs

soon.
