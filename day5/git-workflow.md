# Git & GitHub Workflow

## 1. Git Branching

Git branches allow developers to work on different features without affecting the main branch.

For my internship project, I created separate feature branches for each day:

```text
main
 └── feature/week-1-day-1
      └── feature/week-1-day-2
           └── feature/week-1-day-3
                └── feature/week-1-day-4
                     └── feature/week-1-day-5
```

## 2. Git Commit

A commit saves changes to the local Git repository.

Example:

```bash
git add .
git commit -m "feat: git-workflow week-1-day-5 complete"
```

I used descriptive commit messages to clearly identify the work completed.

## 3. Git Push

The `git push` command uploads local commits to GitHub.

Example:

```bash
git push origin feature/week-1-day-5
```

## 4. Git Merge

Git merge combines changes from one branch into another branch.

Example:

```bash
git checkout main
git merge feature/week-1-day-5
```

Merge preserves the existing branch history.

## 5. Git Rebase

Git rebase moves commits from one branch onto another base branch.

Example:

```bash
git checkout feature/week-1-day-5
git rebase main
```

Rebase can create a cleaner and more linear project history.

### Merge vs Rebase

| Git Merge                 | Git Rebase                  |
| ------------------------- | --------------------------- |
| Combines branches         | Moves commits to a new base |
| Can create a merge commit | Creates a linear history    |
| Preserves branch history  | Rewrites commit history     |

## 6. Pull Request

A Pull Request allows developers to propose changes and have them reviewed before merging.

A professional Pull Request should include:

* Clear title
* Description of changes
* Completed tasks
* Testing information
* Deliverables
* Review checklist

## 7. Merge Conflict

A merge conflict occurs when Git finds different changes in the same part of a file and cannot automatically decide which change to keep.

### Steps to Resolve a Conflict

1. Run `git status` to identify the conflicted file.
2. Open the file and find the conflict markers.
3. Decide which changes should be kept.
4. Remove the conflict markers.
5. Save the file.
6. Stage the resolved file.
7. Commit the changes.

Example:

```bash
git status
git add .
git commit -m "fix: resolve merge conflict"
```

## 8. Git Ignore

The `.gitignore` file tells Git which files and folders should not be tracked.

Example:

```gitignore
node_modules/
.env
.env.local
dist/
build/
*.log
.DS_Store
.vscode/
```

Sensitive files such as `.env` and large dependency folders such as `node_modules` should not normally be committed.

## 9. Professional Git Workflow

```text
Create Feature Branch
        ↓
Write Code
        ↓
git add .
        ↓
git commit
        ↓
git push
        ↓
Create Pull Request
        ↓
Code Review
        ↓
Resolve Conflicts
        ↓
Merge Pull Request
```

## Conclusion

Git and GitHub help developers manage code, work with branches, collaborate with team members, review changes, and maintain a clean project history.

## Git Practice

I practiced Git branching, committing, pushing, rebasing, and Pull Requests.
