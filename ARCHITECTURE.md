# PhotoFrame – Architecture

## Purpose
PhotoFrame is a personal, offline-first digital photo frame app.

Primary target:
- Android tablet, landscape orientation, always-on display

Secondary targets (future):
- Android TV / Android box
- iPad (via React Native reuse)

The app connects to Google Photos, lets the user pick an album, caches photos locally, and plays a slideshow that works fully offline.

---

## Core Constraints (v1 – non-negotiable)

- React Native using Expo
- TypeScript
- No backend services
- Single-user, personal use
- Google Photos is the only photo source
- User accepts periodic album re-picking
- Slideshow must never depend on network once images are cached
- Metadata stored locally in SQLite
- Images cached locally in the filesystem
- Landscape-first UI

---

## Non-goals (v1)

- No multi-user support
- No cloud sync
- No real-time album auto-sync
- No admin panel
- No advanced AI/photo processing

---

## High-level Architecture

The app is structured into clear feature-based modules with minimal coupling.

Layers:
- UI (screens, navigation)
- Domain logic (slideshow, sync)
- Data access (SQLite, filesystem)
- External services (Google OAuth, Google Photos API)
- Platform-specific helpers (keep awake, device behavior)

All Google Photos data is treated as a *remote source* and mirrored locally.

---

## Module Overview

### auth
- Handles Google OAuth
- Secure token storage
- Token refresh logic
- No UI logic inside the module

### googlePhotos
- Thin API client for Google Photos
- Album listing
- Media item listing for a selected album
- No caching or persistence logic

### db
- SQLite schema
- Repository functions for:
  - app settings
  - selected album
  - media items
- No business logic

### sync
- Sync engine that:
  - compares remote album contents with local DB
  - schedules downloads
  - enforces offline cache limits
  - handles eviction
- Owns download queue and retry logic

### slideshow
- Offline-first slideshow playback
- Reads only from local cached files
- Supports interval, shuffle, and fit mode
- No network logic

### settings
- User preferences
- Stored locally
- UI + persistence

### albums
- Album picker UI
- Delegates data fetching to googlePhotos module

### platform
- Platform-specific utilities (keep screen awake, device info)
- No business logic

---

## Repository Structure (contract)

This structure must be respected.
/src
  /app
    App.tsx
    navigation.tsx
  /features
    /auth
    /googlePhotos
    /sync
    /slideshow
    /settings
    /albums
  /db
    db.ts
    schema.ts
    mediaRepo.ts
    settingsRepo.ts
  /platform
    keepAwake.ts
  /utils

---

## Data Storage

### SQLite (metadata)
- App settings
- Selected album
- Media item metadata
- Download state

### Filesystem (images)
- Cached image files
- Sized appropriately for device resolution
- Evicted according to cache policy

---

## Offline Strategy

- Slideshow reads only local files by default
- Network is never required during playback
- Sync runs opportunistically
- App must degrade gracefully when offline

---

## Future Evolution (not implemented yet)

- Firebase:
  - Sync settings across devices
  - Remote configuration
  - Companion phone app
- Multiple photo sources
- Multiple playlists

These must be added without breaking existing module boundaries.