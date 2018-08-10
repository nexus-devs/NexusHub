# Contributing to Nexus-Stats

We would love for you to contribute to Nexus-Stats and help us shape the future
of the project! To make it as easy as possible, we have a few introduction
points for you below:

<br>

## <a name="question"></a> Got a Question or Problem?
Do not open issues for general support questions as we want to keep GitHub issues for bug reports and feature requests. You've got much better chances of getting your question answered on [Discord](https://discord.gg/AG8RPZ8).

<br>

## <a name="issue"></a> Found a Bug?
If you find a bug in the source code, you can help us by
[submitting an issue](https://github.com/nexus-devs/nexus-stats/issues/new) to our GitHub Repository. Even better, you can
submit a Pull Request with a fix.

If the bug entails a critical security flaw, you can disclose it responsibly by mailing us at
[devs@nexus-stats.com](mailto:devs@nexus-stats.com).

<br>

## <a name="feature"></a> Missing a Feature?
You can *request* a new feature by [submitting an issue](https://github.com/nexus-devs/nexus-stats/issues/new) to our GitHub
Repository. If you would like to *implement* a new feature, please submit an issue with
a proposal for your work first. Please consider what kind of change it is:

* For a **Major Feature**, first open an issue and outline your proposal so that it can be
discussed. This will also allow us to better coordinate our efforts, prevent duplication of work,
and help you to craft the change so that it is successfully accepted into the project.
* **Small Features** or Bugfixes can be crafted and directly submitted as a Pull Request alongside a relevant issue.

<br>

## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All API endpoints **must be documented within the endpoint schema**.
* We follow the [Standard JS styleguide](https://standardjs.com/). Your linter should be able to pick this up automatically.

<br>

## <a name="commit"></a> Commit Message Guidelines
> This is adapted from [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular).

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the project history. But we also use git commit messages to **generate our dynamic change logs**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Header
The **type** is mandatory and the **scope** of the header is optional.<br>
Anything below the header is optional and will only be used if you want your
changes to affect the changelogs.

### Body
The **body** should contain a list of the **most significant changes** in your commit, each line
starting with a hyphen (`-`). Think of it as writing patch logs, since this is what the body will
be used for anyways. Keep in mind that not all commit types will be added to the changelogs. For
instance, there is no reason to let users know about changes in our CI pipeline or builds.

### Footer
Footers should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any apply. This
will add references to the selected issues in the changelogs.


### Example:

```
feat(ui): Add comparison tool to sidebar.

- Can be used on any item or player page.
- Provides a list of tags that allow custom comparisons.
- Comparisons are displayed inline with the normal values of the current page.

Resolves #145, #123
```

### Type
Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: webpack, cubic, vue, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: drone, scripts)
* **docs**: Documentation only changes
* **feat**: A new feature (example scopes: api, ui)
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc)

### Scope
The scope should be the name of the topic that is affected by the changes (i.e. ui for Web-UI changes or api for new/changed API endpoints). Changelogs will be grouped up by these topics.
