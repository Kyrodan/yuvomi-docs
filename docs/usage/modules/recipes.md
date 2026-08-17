---
title: Recipes
---

# Recipes

## What this module is for

Recipes is the reusable cooking library behind Yuvomi's meal planning flow. It keeps ingredients, instructions and portion logic in one place so a family does not have to retype the same meal every week.

## What people usually do here

- Create recipes from scratch and refine them over time.
- Duplicate or scale existing recipes instead of rebuilding a variation manually.
- Send ingredients to a shopping list when the recipe is needed this week.
- Drop recipes into meal slots so planning and cooking stay connected.

## How it connects to other modules

- [Meals](./meals) is the main place where recipes become part of a weekly plan.
- [Shopping](./shopping) receives ingredients directly from a recipe.
- [Pantry](./pantry) helps answer whether the needed ingredients are already in the house.

## Good to know

- Planned meals can be saved back as recipes, which helps when a one-off idea turns into a repeatable household standard.
- Yuvomi can mirror a self-hosted Mealie or Tandoor instance read-only, so those recipes appear alongside native ones without giving up the external source of truth.
- If a mirrored recipe needs local editing, the practical path is to duplicate it into a native Yuvomi recipe and edit that copy.
