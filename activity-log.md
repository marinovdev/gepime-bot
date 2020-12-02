## CONTENT
#### 1. OVERVIEW
#### 2. CHANGES

----

## 1. OVERVIEW

---

## 2. CHANGES

#### all progress lost due to 'git reset --hard origin/master'
- never use <code>git reset</code> because all commits are lost that are not pushed on the local branch

#### starting clean project
- creating folders 'server' and 'client'
- the back-end is going to be based in the './server' folder

#### issues with git revert HEAD
- made the local repo to go back by one commit

- finding a way to revert back to "activity log starting clean project"

> git revert 27d883b9c1d10afbceada7e25beba570754b2420

>  git fetch origin

- reverting to a commit insted reverted to the preveous commit insights about git revert not resolved


#### successfull revert back to Revert "Revert  "activity log starting clean project""

- the revert was done using Git Desktop

#### server and client folders dont seem to appear on public repo
attempting to fix this :

- synchronising gepime-bot repo
no results: public repo doesnt have ./client and ./server

- listing all files under source control in the current repo
> git ls-tree -r master --name-only

result: 
```
README.md
activity-log.md
```

#### gitignore all node_modules/
pattern:
> node_modules/

to ignore all folders with this name in the main directory