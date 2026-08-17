---
title: Reminders
---

# Reminders

## What this module is for

Reminders is the notification layer that helps tasks and calendar items stay actionable after they are created. Instead of living only inside the module where an item began, a reminder can reach the user through the app, through push, or through household-wide delivery channels.

## What people usually do here

- Review in-app badges for due or upcoming items.
- Enable Web Push on supported devices when personal notifications are helpful.
- Configure household delivery channels such as Gotify, ntfy or webhooks.
- Open the linked task or event directly from the reminder context.

## How it connects to other modules

- [Tasks](./tasks) and [Calendar](./calendar) are the main sources of reminders.
- [Inventory](./inventory) can contribute tracked dates such as warranty or service reminders.
- [Health](./health) and [Birthdays](./birthdays) also benefit from reminders in real household use.

## Good to know

- Web Push is opt-in and depends on a working HTTPS setup.
- Household channels are useful when the whole family should see a reminder in one shared place.
- Generic HTTP webhooks can be shaped with payload templates for services that expect a custom body format.
- This module becomes more valuable as soon as the household uses several time-based modules at once.
