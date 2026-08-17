---
title: Backup
---

# Backup

## What this module is for

Backup protects the household's Yuvomi data against mistakes, failed experiments and hardware loss. It is focused on practical restore safety rather than on complicated infrastructure assumptions, which makes it especially important for self-hosted installations run by a family instead of a full operations team.

## What people usually do here

- Trigger a manual backup before a risky change or upgrade.
- Configure scheduled backups so recovery does not depend on memory.
- Restore from a backup when the household needs to roll back to a known-good state.
- Upload backups to WebDAV storage for an off-device copy.

## How it connects to other modules

- Backup protects the data created in every other module.
- [Documents](./documents) needs special attention when binaries live outside the database.
- [API Tokens](./api-tokens) matter when a household later automates backup-related workflows with external tools.

## Good to know

- Restore includes a pre-restore rollback step so recovery is less risky if the chosen backup turns out not to be the right one.
- WebDAV upload is optional, not mandatory.
- Database backups do not automatically include externally stored document binaries, so those need their own backup path.
- This is primarily an admin-facing module, but it protects the experience of every household member.
