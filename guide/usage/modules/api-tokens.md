---
title: API Tokens
---

# API Tokens

## What this module is for

API Tokens is the controlled access point for integrations and automation. It is not a daily end-user module in the same sense as Tasks or Calendar, but it matters when a household wants trusted external tools to work with Yuvomi without sharing a normal user password.

## What people usually do here

- Create a token for an importer, automation or AI client.
- Restrict that token with module-level read and write scopes.
- Choose which family member the token should act as.
- Test integrations against the OpenAPI description or the built-in MCP endpoint.

## How it connects to other modules

- [Budget](./budget) and other data modules can be read or written by external tools through scoped access.
- [Backup](./backup) and sidecar services often depend on API-level access instead of direct database access.
- Tokens can act as a chosen member, which helps imports land under the correct household person instead of under the admin.

## Good to know

- Token creation is an admin responsibility.
- Yuvomi supports both Bearer tokens and X-API-Key style usage.
- The built-in MCP endpoint at /mcp is intended for agent-style clients that should speak to the API in a safer, structured way.
- Scopes should stay as narrow as possible, especially for tools that touch sensitive areas such as finances or health data.
