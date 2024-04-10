oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @ismail/habit-cli
$ habit COMMAND
running command...
$ habit (--version)
@ismail/habit-cli/0.0.0 win32-x64 node-v20.12.1
$ habit --help [COMMAND]
USAGE
  $ habit COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g oclif-hello-world
$ oex COMMAND
running command...
$ oex (--version)
oclif-hello-world/0.0.0 darwin-x64 node-v16.13.1
$ oex --help [COMMAND]
USAGE
  $ oex COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`habit habits list [FILE]`](#habit-habits-list-file)
* [`habit habits new NAME CATEGORY`](#habit-habits-new-name-category)
* [`habit help [COMMAND]`](#habit-help-command)
* [`habit plugins`](#habit-plugins)
* [`habit plugins add PLUGIN`](#habit-plugins-add-plugin)
* [`habit plugins:inspect PLUGIN...`](#habit-pluginsinspect-plugin)
* [`habit plugins install PLUGIN`](#habit-plugins-install-plugin)
* [`habit plugins link PATH`](#habit-plugins-link-path)
* [`habit plugins remove [PLUGIN]`](#habit-plugins-remove-plugin)
* [`habit plugins reset`](#habit-plugins-reset)
* [`habit plugins uninstall [PLUGIN]`](#habit-plugins-uninstall-plugin)
* [`habit plugins unlink [PLUGIN]`](#habit-plugins-unlink-plugin)
* [`habit plugins update`](#habit-plugins-update)

## `habit habits list [FILE]`

Showing all the habits

```
USAGE
  $ habit habits list [FILE] [-f] [-n <value>]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  Showing all the habits

EXAMPLES
  $ habit habits list
```

_See code: [src/commands/habits/list.ts](https://github.com/irabai/habit-cli/blob/v0.0.0/src/commands/habits/list.ts)_

## `habit habits new NAME CATEGORY`

Creating a new habit

```
USAGE
  $ habit habits new NAME CATEGORY [-d <value>] [-D <value>] [-f <value>] [-i <value>] [-r <value>]

ARGUMENTS
  NAME      the name of the habit
  CATEGORY  (Exercise|Reading|Meditation|Coding|Healthy Eating|Others) the category of the habit

FLAGS
  -D, --Description=<value>  Description of the habit
  -d, --Date=<value>         Date of the habit
  -f, --Frequency=<value>    Frequency of the habit for example 1 mean every dar 2 every 2 days etcs
  -i, --Id=<value>           Id of the contact that want to add the habit
  -r, --Reminder=<value>     Reminder time

DESCRIPTION
  Creating a new habit

EXAMPLES
  $ habit habits new "Food" "Healthy eating" --id "contact" --Date 20/04/2024 --Reminder 14:00 --Frequency 1 --Description "This is a test habit"
```

_See code: [src/commands/habits/new.ts](https://github.com/irabai/habit-cli/blob/v0.0.0/src/commands/habits/new.ts)_

## `habit help [COMMAND]`

Display help for habit.

```
USAGE
  $ habit help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for habit.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.20/src/commands/help.ts)_

## `habit plugins`

List installed plugins.

```
USAGE
  $ habit plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ habit plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.5/src/commands/plugins/index.ts)_

## `habit plugins add PLUGIN`

Installs a plugin into habit.

```
USAGE
  $ habit plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into habit.

  Uses bundled npm executable to install plugins into C:\Users\irabai\AppData\Local\habit

  Installation of a user-installed plugin will override a core plugin.

  Use the HABIT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the HABIT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ habit plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ habit plugins add myplugin

  Install a plugin from a github url.

    $ habit plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ habit plugins add someuser/someplugin
```

## `habit plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ habit plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ habit plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.5/src/commands/plugins/inspect.ts)_

## `habit plugins install PLUGIN`

Installs a plugin into habit.

```
USAGE
  $ habit plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into habit.

  Uses bundled npm executable to install plugins into C:\Users\irabai\AppData\Local\habit

  Installation of a user-installed plugin will override a core plugin.

  Use the HABIT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the HABIT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ habit plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ habit plugins install myplugin

  Install a plugin from a github url.

    $ habit plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ habit plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.5/src/commands/plugins/install.ts)_

## `habit plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ habit plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ habit plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.5/src/commands/plugins/link.ts)_

## `habit plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ habit plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ habit plugins unlink
  $ habit plugins remove

EXAMPLES
  $ habit plugins remove myplugin
```

## `habit plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ habit plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.5/src/commands/plugins/reset.ts)_

## `habit plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ habit plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ habit plugins unlink
  $ habit plugins remove

EXAMPLES
  $ habit plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.5/src/commands/plugins/uninstall.ts)_

## `habit plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ habit plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ habit plugins unlink
  $ habit plugins remove

EXAMPLES
  $ habit plugins unlink myplugin
```

## `habit plugins update`

Update installed plugins.

```
USAGE
  $ habit plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.5/src/commands/plugins/update.ts)_
<!-- commandsstop -->
* [`oex hello PERSON`](#oex-hello-person)
* [`oex hello world`](#oex-hello-world)
* [`oex help [COMMAND]`](#oex-help-command)
* [`oex plugins`](#oex-plugins)
* [`oex plugins:inspect PLUGIN...`](#oex-pluginsinspect-plugin)
* [`oex plugins:install PLUGIN...`](#oex-pluginsinstall-plugin)
* [`oex plugins:link PLUGIN`](#oex-pluginslink-plugin)
* [`oex plugins:uninstall PLUGIN...`](#oex-pluginsuninstall-plugin)
* [`oex plugins update`](#oex-plugins-update)

## `oex hello PERSON`

Say hello

```
USAGE
  $ oex hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/oclif/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `oex hello world`

Say hello world

```
USAGE
  $ oex hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `oex help [COMMAND]`

Display help for oex.

```
USAGE
  $ oex help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oex.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `oex plugins`

List installed plugins.

```
USAGE
  $ oex plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oex plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `oex plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oex plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oex plugins:inspect myplugin
```

## `oex plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oex plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ oex plugins add

EXAMPLES
  $ oex plugins:install myplugin 

  $ oex plugins:install https://github.com/someuser/someplugin

  $ oex plugins:install someuser/someplugin
```

## `oex plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ oex plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ oex plugins:link myplugin
```

## `oex plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oex plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oex plugins unlink
  $ oex plugins remove
```

## `oex plugins update`

Update installed plugins.

```
USAGE
  $ oex plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
