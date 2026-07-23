---
title: "Featured Projects"
description: "Key software engineering projects including full-stack web applications, internal tools, database systems, and API integrations."
date: 2026-07-23
showToc: true
ShowBreadCrumbs: true
---

# Featured Projects

Here is a curated selection of systems and applications I have architected and built, focusing on internal business software, API integrations, and financial data management.

---

## 1. DIRA — Market Intelligence Stack & Vendor Dashboard

**Repository:** [github.com/sspirial/dira](https://github.com/sspirial/dira)  
**Tech Stack:** `React (Vite)`, `Node.js (WhatsApp Bridge)`, `PostgreSQL`, `FastAPI`, `Docker Compose`, `CI/CD (GitHub Actions)`, `Nginx`, `Google Cloud Platform`

### Problem & Solution
Informal vendors and small business operations teams often struggle with decentralized data scattered across messaging channels and manual spreadsheets. 

**DIRA** provides an integrated market intelligence ecosystem:
* **Frontend Dashboard:** A React application providing real-time data visualisations, transaction logs, and operational controls for vendors.
* **WhatsApp Messaging Bridge:** A Node.js service using Baileys to ingest, pair, and process incoming vendor transaction data directly via messaging.
* **Backend Engine:** High-performance FastAPI backend connected to PostgreSQL for structured relational data storage and queries.
* **DevOps & Security:** Fully containerized setup via Docker Compose, automated CI testing via GitHub Actions, and one-click GCP VM deployment scripts with automated Nginx reverse proxy and Let's Encrypt SSL configuration.

---

## 2. Developer Chamas (DevChama) — Group Financial Pool & Ledger Platform

**Repository:** [github.com/sspirial/developer-chamas](https://github.com/sspirial/developer-chamas)  
**Tech Stack:** `TypeScript`, `React`, `Node.js`, `Express`, `PostgreSQL / REST APIs`

### Problem & Solution
Cooperative savings groups (*chamas*) require accurate transaction tracking, member ledger balances, and transparent contribution histories.

* Built a financial management platform enabling members to record pool deposits, manage payouts, and track group liquidity.
* Implemented secure REST endpoints for user authentication, contribution calculations, and transaction history filtering.
* Designed clean UI workflows to eliminate spreadsheet-based bookkeeping errors.

---

## 3. Solana Sentinel — Real-Time Transaction Security Monitor

**Repository:** [github.com/sspirial/solana-sentinel](https://github.com/sspirial/solana-sentinel)  
**Tech Stack:** `Rust`, `Async I/O`, `WebSockets`, `JSON-RPC`

### Problem & Solution
High-throughput blockchain applications require instant notification when transactions fail or suspicious contract calls occur.

* Developed an asynchronous monitoring agent in Rust to track transaction logs in real time.
* Provides immediate alert notifications and error parsing for developer and auditing workflows.

---

## Technical Skills Summary

* **Frontend:** React, HTML5, CSS3, Tailwind CSS, Vite, JavaScript, TypeScript
* **Backend:** Node.js, Express, Python, FastAPI, RESTful APIs, WebSockets
* **Database & Infrastructure:** PostgreSQL, SQL, Docker, Docker Compose, Linux, Nginx, GCP GCE
* **Developer Practices:** Git / GitHub, CI/CD Actions, Automated Testing (pytest / ESLint), Clean Architecture, Documentation
