# AGENTS.md

# RepoAtlas - AI Development Guide

> This document defines the architecture, engineering principles, coding standards, and product vision for every AI agent contributing to RepoAtlas.
>
> Every code generation, refactoring, feature implementation, documentation update, and review **MUST** follow this specification.

---

# Project Vision

RepoAtlas is an open-source developer platform that transforms any repository into beautiful, configurable, documentation-ready, AI-friendly, and visually appealing project structures.

It is **NOT** just another tree command.

RepoAtlas should become the industry standard for repository visualization.

The platform consists of:

- CLI
- Documentation Website
- VSCode Extension
- GitHub Action
- Node SDK
- React Components
- Plugin System

Everything should share the same core engine.

---

# Primary Goals

Always optimize for

- Simplicity
- Extensibility
- Performance
- Developer Experience
- Beautiful Output
- Maintainability

Never sacrifice architecture for shortcuts.

---

# Engineering Principles

Always follow

- SOLID
- DRY
- KISS
- YAGNI
- Composition over Inheritance
- Dependency Injection
- Pure Functions whenever possible
- Immutable Data
- Functional Core / Imperative Shell

Avoid

- Tight coupling
- Circular dependencies
- Global mutable state
- Magic values
- Deep nesting
- Monolithic classes

---

# Coding Standards

Language

- TypeScript

Node Version

- Latest Active LTS

Package Manager

- pnpm

Build

- tsup

Testing

- Vitest

Formatting

- Prettier

Linting

- ESLint

Git Hooks

- Husky

Commit Convention

- Conventional Commits

Versioning

- Changesets

---

# Repository Structure

```
apps/
packages/
examples/
templates/
scripts/
.github/
```

Never mix application code with reusable packages.

---

# Package Responsibilities

## core

Responsible for

- scanning
- parsing
- tree generation

Never

- render output
- print console
- generate files

---

## renderer

Only converts TreeNode into visual output.

Never scan filesystem.

---

## exporters

Convert rendered output into

- Markdown
- HTML
- JSON
- Mermaid
- PDF
- DOCX
- etc.

---

## icons

Only icon mapping.

No rendering logic.

---

## detector

Detect

- frameworks
- languages
- package managers
- monorepos
- CI providers

---

## config

Configuration loading

Support

- JSON
- YAML
- TOML
- JS
- TS

---

## utils

Pure helper utilities only.

---

# Architecture Rules

Every feature should pass through

Filesystem

↓

Scanner

↓

Tree Model

↓

Transformer

↓

Renderer

↓

Exporter

↓

Output

Never skip layers.

---

# Core Data Model

Everything revolves around

TreeNode

Every renderer receives

TreeNode

Every exporter receives

RenderedTree

Never access filesystem directly outside Scanner.

---

# Plugin Architecture

Everything should be pluggable.

Examples

Renderer Plugin

Exporter Plugin

Icon Pack

Theme

Project Detector

Statistics Provider

AI Prompt Generator

Adding a plugin should require zero modification to existing plugins.

Follow Open/Closed Principle.

---

# Performance Rules

Always

Use async filesystem APIs.

Never block event loop.

Support streaming for huge repositories.

Avoid unnecessary recursion.

Cache expensive operations.

Minimize allocations.

Support repositories with

100,000+

files.

---

# Error Handling

Never crash.

Provide helpful errors.

Provide recovery suggestions.

Use typed errors.

Avoid generic Error.

---

# CLI Guidelines

Commands should be

predictable

discoverable

composable

Examples

repo-atlas generate

repo-atlas preview

repo-atlas doctor

repo-atlas config

repo-atlas init

Every command should include

- help
- examples
- validation

---

# Configuration

Support

repo-atlas.config.ts

repo-atlas.config.js

repo-atlas.config.json

repo-atlas.config.yaml

CLI arguments always override configuration.

---

# Output Formats

Supported

ASCII

Unicode

VSCode

Material

Markdown

HTML

JSON

YAML

XML

CSV

Mermaid

PlantUML

Graphviz

Mindmap

PDF

DOCX

PNG

SVG

Future formats should require minimal implementation.

---

# Themes

Support

Default

VSCode

Material

GitHub

Dracula

Nord

One Dark

Catppuccin

Tokyo Night

Monokai

Theme should affect

colors

icons

indentation

connectors

spacing

---

# Icons

Use existing icon ecosystems.

Prefer

Material Icon Theme

VSCode Icons

Nerd Fonts

Fallback

Emoji

Fallback

Plain Text

Never hardcode icons.

---

# Documentation Philosophy

Documentation should be

interactive

visual

copy-paste friendly

Every feature should include

Example

CLI

Configuration

Screenshot

Output

---

# Website

Built with

Docusaurus

Should contain

Landing

Documentation

Examples

Playground

Theme Gallery

Command Builder

Configuration Builder

Export Preview

Search

Dark Mode

Versioning

---

# VSCode Extension

Support

Explorer Context Menu

Command Palette

Preview

Export

Copy

Generate Markdown

Generate Mermaid

---

# GitHub Action

Should automatically generate

PROJECT_STRUCTURE.md

Support all CLI options.

---

# AI Features

Generate

LLM Prompt

Architecture Summary

Repository Summary

Folder Explanations

Tech Stack Detection

Context Compression

---

# Testing

Minimum

90%

coverage.

Every package must include

Unit Tests

Integration Tests

Snapshot Tests where applicable.

---

# Accessibility

Website must

Keyboard Accessible

Screen Reader Friendly

Responsive

---

# Logging

Use structured logging.

Never spam console.

Provide

verbose mode

debug mode

silent mode

---

# Security

Never execute arbitrary files.

Never evaluate user code.

Validate every input.

Sanitize generated HTML.

---

# Dependencies

Prefer

small

maintained

tree-shakeable

libraries.

Avoid unnecessary dependencies.

---

# Public API

Public API must remain stable.

Breaking changes require

major version.

---

# Documentation Style

Write

short

clear

professional

example-first

documentation.

Every public API requires examples.

---

# Pull Request Checklist

Every PR should

✅ Compile

✅ Pass Tests

✅ Pass Lint

✅ Update Docs

✅ Add Examples

✅ No Breaking Changes

---

# AI Agent Instructions

When implementing a feature:

1. Understand existing architecture.
2. Reuse existing abstractions.
3. Avoid duplicate logic.
4. Keep modules small.
5. Write tests.
6. Update documentation.
7. Preserve backward compatibility.
8. Prefer extension over modification.
9. Keep functions focused.
10. Explain non-obvious decisions with comments.

If a request conflicts with this document, prioritize long-term maintainability and the established architecture over the fastest implementation.

---

# Product Philosophy

RepoAtlas should become the **Prettier + ESLint + tree** equivalent for repository visualization.

The project should be:

- Beautiful by default.
- Extensible by design.
- Fast at any scale.
- Friendly for beginners.
- Powerful for enterprises.
- Useful for documentation, AI, onboarding, architecture, and open-source projects.

Every contribution should move the project closer to being the **standard tool developers use to understand and share codebases**.
