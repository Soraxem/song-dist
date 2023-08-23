---
author: "Soraxem"
title: "Standarts"
published: true
---

# Standarts

For many projects there is need of resources or material. For example: programs, industrial standarts, language, working material, etc. So because all of this should be clear and simple, there is the need to standartise all of those things. So in the project standarts:

1. Rules for evaluation are created
2. Rescources are evaluated
3. Standarts are set

## Language

1. Language and Terminology
   1. By default all files and documents should be created and written in **english**.
   2. It is recomended to use a recurring terminology for the same things.
2. Exeptions
   1. Tasks and projects wich are related to third parties, are freed from this restrictions. But it would be favorable to, never the less set the project langauge to the deafult language.
   2. Tasks and Projects wich are focused around other langauges or linguistic themes are also freed from this restrictions. For eg. Project to learn english, french, chinese.

## Dates and Time

Date and time formates are applied from ISO 8601.

```text
YYYY-MM-DD
hhmm
hhmm(+/-)hh
```

## File structure



```text
nextcloud
    |- projects
    |- projects-concept
    `- projects-archive
```

### Types

1. Timeless folders or files
   1. A Timeless folder/files is a folder wich is intended to be used all the time, or at least as long as the project lives. For example a folder for storing passwords, because you will update those passwords. This ist the preffered folder/file type, because it helps with reusabllity and esthetics.
2. Timestamped folders or files
   1. Timestamped folders/files wich are specifically for use in a certain time period in wich the project is active. For example: teenagerclub folder/file for one specific evening.

### Names

Filenames and projectnames shall be built with this Naming Convention. This convention has the idea to be as human readable as Possible. All filenames have to be in kebab-case.

```text
Increasing specific filenames
yes: peter-left-eye-bandage
no: bandage-left-eye-peter

General----->Specific
Everyting--->Something

world/continent/land-city-house/peter/peter-left-eye-bandage
world/continent/land-city-house/peter/left-eye-bandage

projects/connect-house/sponti-wg-2022

Projects:


Files:
<what>.<ext>
<what>-<timestamp>.<ext>

CAD-Drawing:
<What>-prepared.dxf
<What>.dxf
```

## Suppliers

| What | Usage |
|------|-------|
| [Printworld](https://www.printworld.com/de/) | Customised paper prints |
| [Digitaldruck Fabrik](https://digitaldruck-fabrik.de) | Customised stickers, plastic, t-shirts |
| [Piksieben](https://www.piksieben.de) | Customised card-games, board-games |
| [Pixum](https://www.pixum.ch/) | Customised phone cases |
| [SUPAG](https://www.supag.shop/Langzeitarchivieren) | Microfilm Production |
| [Galaxus](https://www.galaxus.ch) | Consumer Products |
| [Reichelt](https://www.reichelt.de/) | Electronic Parts |
| [1lib](https://1lib.ch/) | Ripped E-Books |
| [FreeSewing](https://freesewing.org/) | Open source sewing patterns |
| [Schrauben King](https://www.schraubenking.ch) | Screws |
| [Yerbamate.ch](https://yerbamate.ch) | Yerba mate |

## Applications

All used applications should be open source, or at least have an open source alternative. This is because i think only open knowledge is useable knowledge.

| What | Usage | License |
|------|-------|---------|
| [Obsidian](https://obsidian.md) | Markdown Editor | Propriatary |
| [Marktext](https://github.com/marktext/marktext) | Markdown Editor | MIT |
| [Anki](https://github.com/ankitects/anki) | Flascard Learning | GNU AGPL |
| Nextcloud | File, Contacts, Calendar Cloud | AGPLv3 |
| Qcad | 2D CAD | GPL |
| Freecad | 3D CAD | LGPLv2+ |
| Inkscape | Simple 2D vector design, Gear creation | GPL |
| Scribus | Sopisticated 2D vector design | GPL |
| Blender | 3D design, video editor | GPL |
| Gimp | 2D pixel design | GPLv3+ |
| Firefox | Webbrowser | MPL 2 |
| VLC | Mediaplayer | GNU GPL 2.0 |
| QLC+ | Artnet, and DMX control software | APACHE 2.0 |
| [QEletrotech](https://qelectrotech.org) | Electrical CAD | GNU GPL 2.0 |
| Floccus | Bookmark sync and management | MPL 2 |
| [KeePass](https://keepass.info/) | Password Manager | GNU GPL |

## Filetypes

| What | Extension | Usage |
|------|-----------|-------|
| Markdown | .md | Text files, documentation |
| Document file | .doc | Text files, documentation, with 3rd partys |
| Drawing Interchange Format | .dxf | Technical drawings |
| QElectrotech Document | .qet | Electrical diagrams |
| Scribus Document | .sla | Publishments |
| Portable Document Format | .pdf | Documents for print, Archived Documents |

## Color

| Usage | RAL Color | Hex Color |
|-------|-----------|-----------|
| Private Stuff | RAL 4008 | #844C82 |
| Connect House | RAL 6037 | #008B29 |
| State | RAL 3020 | #BB1F11 |

Private Old: D400FF

## ToDo

* [x] Sync Dropbox to Nextcloud
* [ ] Digitalize school documents
* [x] Define sorting of images
* [ ] Define Archiving of Documents
  * [ ] Digital archive
  * [ ] Analog archive
* [x] Define project names / paths
