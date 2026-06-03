<div align="center">

# 🏢 Smart Visitor Approval & Security System

### *A Full-Stack Digital Security Platform for Residential Buildings & Gated Communities*

<br/>

### 🌐 [**View Live Demo → smart-visitor-approval-security-sys.vercel.app**](https://smart-visitor-approval-security-sys.vercel.app)

<br/>

<!-- ROW 1 - TECH BADGES -->
<img src="https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/React.js-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Express.js-REST%20API-FF6C37?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>

<br/>

<!-- ROW 2 -->
<img src="https://img.shields.io/badge/JWT-Authentication-FB015B?style=for-the-badge&logo=jsonwebtokens&logoColor=white"/>
<img src="https://img.shields.io/badge/Sequelize-ORM-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white"/>
<img src="https://img.shields.io/badge/bcrypt-Password%20Security-E53E3E?style=for-the-badge&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>

<br/>

<!-- STATUS BADGES -->
<img src="https://img.shields.io/badge/⚡%20Status-Live%20on%20Vercel-22c55e?style=flat-square"/>
<img src="https://img.shields.io/badge/📦%20Version-1.0.0-F97316?style=flat-square"/>
<img src="https://img.shields.io/badge/🌐%20Platform-Web%20Application-8B5CF6?style=flat-square"/>
<img src="https://img.shields.io/badge/🏗️%20Architecture-MVC%20Pattern-0EA5E9?style=flat-square"/>
<img src="https://img.shields.io/badge/📱%20Responsive-Yes-EC4899?style=flat-square"/>
<img src="https://img.shields.io/badge/🧑‍💻%20Contributors-3-F59E0B?style=flat-square"/>

<br/><br/>

<!-- LANGUAGE STATS -->
<img src="https://img.shields.io/badge/JavaScript-82.8%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/CSS-16.9%25-1572B6?style=flat-square&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML-0.3%25-E34F26?style=flat-square&logo=html5&logoColor=white"/>

<br/><br/>

[![GitHub stars](https://img.shields.io/github/stars/happylimbasiya22/Smart-Visitor-Approval-Security-System?style=social&label=⭐%20Star)](https://github.com/happylimbasiya22/Smart-Visitor-Approval-Security-System)
&nbsp;&nbsp;
[![GitHub forks](https://img.shields.io/github/forks/happylimbasiya22/Smart-Visitor-Approval-Security-System?style=social&label=🍴%20Fork)](https://github.com/happylimbasiya22/Smart-Visitor-Approval-Security-System/fork)
&nbsp;&nbsp;
[![GitHub issues](https://img.shields.io/github/issues/happylimbasiya22/Smart-Visitor-Approval-Security-System?style=social&label=🐛%20Issues)](https://github.com/happylimbasiya22/Smart-Visitor-Approval-Security-System/issues)

<br/>

---

## 💬 *"Smart buildings deserve smarter security —*
## *digitize, automate, and protect every gate."*

---

</div>

<br/>

## 🧭 Table of Contents

| # | Section |
|:---:|:---|
| 1 | [📖 Project Overview](#-project-overview) |
| 2 | [🎯 Problem Statement](#-problem-statement) |
| 3 | [✅ Objectives](#-objectives) |
| 4 | [👥 User Roles & Responsibilities](#-user-roles--responsibilities) |
| 5 | [🔄 How The System Works](#-how-the-system-works) |
| 6 | [🏗️ System Architecture](#-system-architecture) |
| 7 | [🧩 Module Breakdown](#-module-breakdown) |
| 8 | [✨ Features](#-features) |
| 9 | [🛠️ Tech Stack](#-tech-stack) |
| 10 | [🗂️ Project Structure](#-project-structure) |
| 11 | [🔌 API Endpoints](#-api-endpoints) |
| 12 | [🚀 Getting Started](#-getting-started) |
| 13 | [🌐 Live Demo](#-live-demo) |
| 14 | [💡 Use Cases](#-use-cases) |
| 15 | [🔭 Future Scope](#-future-scope) |
| 16 | [🤝 Contributing](#-contributing) |

---

## 📖 Project Overview

The **Smart Visitor Approval & Security System** is a comprehensive, full-stack web application that completely **replaces paper-based visitor logbooks** used in residential societies, apartment complexes, and gated communities with a smart, digital, real-time platform.

The idea is simple but powerful. There are **three people** in this system:

- The **Security Guard** sits at the building gate with access to the Guard Dashboard
- The **Resident** logs into their Resident Portal from any browser
- The **Admin** oversees everything from the Admin Panel

When a visitor arrives at the gate, the **Guard registers the visitor's details** — name, phone number, purpose of visit, and which flat they are visiting — directly into the web portal. That entry **immediately appears on the Resident's portal** as a pending approval request. The resident reviews the visitor's details and clicks either **Approve** or **Decline** with a single button. The guard sees the decision update on their screen in real time and either lets the visitor in or turns them away. The **Admin has full visibility** over every visitor entry, every approval, every exit, and every user account in the system — all from one centralized dashboard.

Every single interaction — entry time, exit time, approval decision, guard who registered the visitor, resident who approved — is **permanently recorded** in the database, creating a tamper-proof audit trail.

The application is built with **React.js** on the frontend, **Node.js + Express.js** as the backend REST API, **MySQL/PostgreSQL** with **Sequelize ORM** as the database, and **JWT + bcrypt** for secure authentication. It is **live and deployed on Vercel**.

---

## 🎯 Problem Statement

Residential buildings and gated communities across India continue to rely on **manual, paper-based visitor registers** that fail every single day:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                ❌  PROBLEMS WITH TRADITIONAL SYSTEMS                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  📒  Paper registers lose data, get damaged, fade, or get tampered with    │
│                                                                             │
│  📞  Guards must call residents manually — calls often go unanswered       │
│                                                                             │
│  ⏱️  Long queues at gates because manual verification is slow               │
│                                                                             │
│  🔍  No searchable history — impossible to find old visitor records         │
│                                                                             │
│  🔐  No authentication — anyone can write anything in a paper log          │
│                                                                             │
│  📊  No audit trail, no reports, no system-level oversight for admin       │
│                                                                             │
│  🚨  Security incidents impossible to trace with accurate timestamps       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                ✅  HOW THIS SYSTEM SOLVES EVERY PROBLEM                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  💻  Guard digitally registers every visitor — instant, clean, permanent   │
│                                                                             │
│  🖥️  Resident sees pending visitors on their portal — no phone call needed │
│                                                                             │
│  ⚡  One-click approval or decline — faster gate clearance for everyone    │
│                                                                             │
│  📋  Full audit trail — every entry and exit permanently timestamped       │
│                                                                             │
│  🔒  JWT + bcrypt security — tamper-proof, role-protected platform         │
│                                                                             │
│  📊  Admin dashboard — every visitor, every user, every log in one place   │
│                                                                             │
│  🌐  Access from any browser — no app install, works on any device         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## ✅ Objectives

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          PROJECT OBJECTIVES                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  🎯  Objective 1 — Digitize Visitor Registration                            │
│      Replace physical logbooks with a digital form where the guard         │
│      captures visitor name, phone, purpose, and destination flat number.   │
│                                                                             │
│  🎯  Objective 2 — In-App Resident Approval System                          │
│      Visitor requests appear instantly on the resident's portal. The       │
│      resident approves or declines with one click — no phone call needed.  │
│                                                                             │
│  🎯  Objective 3 — Real-Time Guard Dashboard Updates                        │
│      The guard's dashboard updates the moment the resident makes a         │
│      decision — they see APPROVED or DECLINED immediately.                 │
│                                                                             │
│  🎯  Objective 4 — Entry & Exit Audit Trail                                 │
│      Maintain a permanent, timestamped record of every visitor's entry     │
│      and exit in the relational database — searchable at any time.         │
│                                                                             │
│  🎯  Objective 5 — Secure Role-Based Authentication                         │
│      JWT tokens and bcrypt hashing ensure only authorized users can        │
│      access each role's dashboard and API endpoints.                       │
│                                                                             │
│  🎯  Objective 6 — Centralized Admin Control                                │
│      Admin manages all residents, all guards, all visitor records, and     │
│      all approvals from one unified dashboard.                             │
│                                                                             │
│  🎯  Objective 7 — Live, Accessible Deployment                              │
│      System deployed publicly on Vercel — accessible from any browser      │
│      without any local installation.                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 👥 User Roles & Responsibilities

The system is built around **three distinct user roles**, each with their own dedicated dashboard and set of permissions:

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵  ROLE 1  🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵║
║                          👮  SECURITY GUARD                                 ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  The Security Guard operates at the building gate. They use the Guard      ║
║  Dashboard to register every visitor who arrives. They are the first       ║
║  point of contact — all visitor data flows through this role.              ║
║                                                                             ║
║  WHAT THE GUARD CAN DO:                                                     ║
║  ┌─────────────────────────────────────────────────────────────────────┐   ║
║  │  ✔  Fill in the visitor registration form for every arrival         │   ║
║  │  ✔  Enter visitor name, phone number, and purpose of visit          │   ║
║  │  ✔  Select which flat number / resident the visitor wants to meet   │   ║
║  │  ✔  View the real-time approval status (Pending / Approved / Declined│   ║
║  │  ✔  Allow the visitor in when APPROVED appears on the dashboard     │   ║
║  │  ✔  Turn the visitor away when DECLINED appears                     │   ║
║  │  ✔  Mark visitor exit when they leave the building                  │   ║
║  │  ✔  View all visitors registered during the current shift or day    │   ║
║  └─────────────────────────────────────────────────────────────────────┘   ║
╚═════════════════════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════════════════════╗
║  🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢  ROLE 2  🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢║
║                            🏠  RESIDENT                                     ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  Residents are homeowners or tenants living in the building. They log      ║
║  into the Resident Portal from any device and see a live list of           ║
║  pending visitor requests that the guard has submitted for their flat.     ║
║  No phone call needed — they handle everything through their portal.       ║
║                                                                             ║
║  WHAT THE RESIDENT CAN DO:                                                  ║
║  ┌─────────────────────────────────────────────────────────────────────┐   ║
║  │  ✔  See all pending visitor requests for their flat in real time    │   ║
║  │  ✔  View visitor details: name, phone number, purpose of visit      │   ║
║  │  ✔  Click APPROVE → visitor is immediately cleared for entry        │   ║
║  │  ✔  Click DECLINE → visitor is denied and guard is notified         │   ║
║  │  ✔  View full history of all past visitors to their flat            │   ║
║  │  ✔  See timestamps of when each visitor arrived and left            │   ║
║  └─────────────────────────────────────────────────────────────────────┘   ║
╚═════════════════════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════════════════════╗
║  🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴  ROLE 3  🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴║
║                         🔑  ADMINISTRATOR                                   ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  The Administrator has the highest level of access in the entire           ║
║  system. They see and manage everything — every user, every visitor,       ║
║  every approval decision, and every entry/exit log across all flats        ║
║  and all guards. Typically the building secretary or society manager.      ║
║                                                                             ║
║  WHAT THE ADMIN CAN DO:                                                     ║
║  ┌─────────────────────────────────────────────────────────────────────┐   ║
║  │  ✔  Create and manage resident accounts (add / update / remove)     │   ║
║  │  ✔  Create and manage security guard accounts                       │   ║
║  │  ✔  View ALL visitor records across every flat and every guard      │   ║
║  │  ✔  See every approval and decline decision with timestamps         │   ║
║  │  ✔  Access full entry and exit logs for any date or flat            │   ║
║  │  ✔  Filter and search visitors by name, flat, date, or status       │   ║
║  │  ✔  Manage flat numbers, building structure, and system settings    │   ║
║  └─────────────────────────────────────────────────────────────────────┘   ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## 🔄 How The System Works

This is the complete step-by-step flow — from the moment a visitor arrives to when they leave:

```
╔═════════════════════════════════════════════════════════════════════════════╗
║              🚶 COMPLETE VISITOR JOURNEY — STEP BY STEP                    ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  ┌─────────────────────────────────────────────────────────────────────┐   ║
║  │  STEP 1 — Visitor Arrives at the Building Gate                      │   ║
║  │                                                                     │   ║
║  │  👤 A visitor walks up to the security gate and tells the guard     │   ║
║  │     their name and which flat they want to visit.                   │   ║
║  └──────────────────────────────────────┬──────────────────────────────┘   ║
║                                         │                                  ║
║                                         ▼                                  ║
║  ┌─────────────────────────────────────────────────────────────────────┐   ║
║  │  STEP 2 — Guard Registers the Visitor on the Dashboard              │   ║
║  │                                                                     │   ║
║  │  👮 The guard opens the Guard Dashboard and fills in the form:      │   ║
║  │                                                                     │   ║
║  │     👤 Visitor Name    :  Rahul Mehta                               │   ║
║  │     📞 Phone Number    :  +91 98765 43210                           │   ║
║  │     🏠 Visiting Flat   :  B-204  (selects from dropdown)            │   ║
║  │     📝 Purpose         :  Personal / Delivery / Service             │   ║
║  │                                                                     │   ║
║  │  The guard hits SUBMIT — entry is saved in the database.            │   ║
║  └──────────────────────────────────────┬──────────────────────────────┘   ║
║                                         │                                  ║
║                                         ▼                                  ║
║  ┌─────────────────────────────────────────────────────────────────────┐   ║
║  │  STEP 3 — Request Appears on Resident's Portal Instantly            │   ║
║  │                                                                     │   ║
║  │  🏠 The resident of Flat B-204 logs in to their Resident Portal.    │   ║
║  │     They see a new PENDING request showing:                         │   ║
║  │                                                                     │   ║
║  │     • Visitor name, phone, and purpose of visit                     │   ║
║  │     • Time of arrival at the gate                                   │   ║
║  │     • Two action buttons: ✅ APPROVE   and   ❌ DECLINE              │   ║
║  └──────────────────────────────────────┬──────────────────────────────┘   ║
║                                         │                                  ║
║                                         ▼                                  ║
║  ┌─────────────────────────────────────────────────────────────────────┐   ║
║  │  STEP 4 — Resident Makes a Decision                                  │   ║
║  │                                                                     │   ║
║  │    ┌─────────────────────────┐     ┌──────────────────────────┐    │   ║
║  │    │     ✅ APPROVED          │     │      ❌ DECLINED          │    │   ║
║  │    │                         │     │                          │    │   ║
║  │    │  Status updates to      │     │  Status updates to       │    │   ║
║  │    │  APPROVED on guard's    │     │  DECLINED on guard's     │    │   ║
║  │    │  dashboard instantly    │     │  dashboard instantly      │    │   ║
║  │    │                         │     │                          │    │   ║
║  │    │  Guard lets visitor in  │     │  Guard turns visitor away│    │   ║
║  │    └────────────┬────────────┘     └─────────────┬────────────┘    │   ║
║  └─────────────────│───────────────────────────────────────────────────┘   ║
║                    │                               │                       ║
║                    └──────────────┬────────────────┘                       ║
║                                   ▼                                        ║
║  ┌─────────────────────────────────────────────────────────────────────┐   ║
║  │  STEP 5 — Entry Logged in Database Automatically                    │   ║
║  │                                                                     │   ║
║  │  📋 System records: Visitor name, phone, flat, guard ID,            │   ║
║  │     resident ID, approval status, and exact entry timestamp.        │   ║
║  └──────────────────────────────────────┬──────────────────────────────┘   ║
║                                         │                                  ║
║                                         ▼                                  ║
║  ┌─────────────────────────────────────────────────────────────────────┐   ║
║  │  STEP 6 — Visitor Exits the Building                                │   ║
║  │                                                                     │   ║
║  │  🚪 Guard marks exit on dashboard. Exit timestamp is recorded.      │   ║
║  │     Total visit duration is calculated and saved permanently.       │   ║
║  └──────────────────────────────────────┬──────────────────────────────┘   ║
║                                         │                                  ║
║                                         ▼                                  ║
║  ┌─────────────────────────────────────────────────────────────────────┐   ║
║  │  STEP 7 — Admin Sees Everything                                     │   ║
║  │                                                                     │   ║
║  │  📊 Admin dashboard shows every visitor, every decision,            │   ║
║  │     every guard action, every entry and exit — filterable by        │   ║
║  │     date, flat, guard, resident, or status at any time.             │   ║
║  └─────────────────────────────────────────────────────────────────────┘   ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## 🏗️ System Architecture

The application follows a clean **3-tier MVC architecture** separating the UI, business logic, and database clearly:

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  🟦🟦🟦🟦🟦🟦🟦🟦🟦  PRESENTATION LAYER  🟦🟦🟦🟦🟦🟦🟦🟦🟦               ║
║                       FRONTEND — React.js                                   ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║   ┌────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌──────────┐  ║
║   │  🔐 Login  │  │  👮 Guard        │  │  🏠 Resident    │  │ 🔑 Admin │  ║
║   │  Page      │  │  Dashboard       │  │  Portal          │  │ Panel    │  ║
║   │            │  │                  │  │                  │  │          │  ║
║   │  All roles │  │  Register visitor│  │  See pending     │  │  Manage  │  ║
║   │  login here│  │  View status     │  │  Approve/Decline │  │  everyone│  ║
║   └────────────┘  │  Mark exit       │  │  View history    │  │  View all│  ║
║                   └─────────────────┘  └─────────────────┘  └──────────┘  ║
║                                                                             ║
║        React Router DOM — client-side routing between all pages             ║
║        Axios — all HTTP calls from React to the Express backend             ║
║        CSS3  — fully responsive layout for all screen sizes                 ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                      ⬇  HTTP / REST API Calls ⬇                           ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  🟧🟧🟧🟧🟧🟧🟧🟧  BUSINESS LOGIC LAYER  🟧🟧🟧🟧🟧🟧🟧🟧                  ║
║                   BACKEND — Node.js + Express.js v5                         ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║   ┌─────────────────────────────────────────────────────────────────────┐  ║
║   │                     EXPRESS ROUTER LAYER                            │  ║
║   │   /api/auth  │  /api/visitors  │  /api/approval  │  /api/admin     │  ║
║   └──────────────────────────────────────────────────────────┬──────────┘  ║
║                                                              │             ║
║   ┌──────────────────────────────────────────────────────────▼──────────┐  ║
║   │                      MIDDLEWARE LAYER                               │  ║
║   │      🔐 JWT Token Verify   │   👮 Role Guard   │   ✅ Validation    │  ║
║   └──────────────────────────────────────────────────────────┬──────────┘  ║
║                                                              │             ║
║   ┌──────────────────────────────────────────────────────────▼──────────┐  ║
║   │                     CONTROLLER LAYER                                │  ║
║   │   Auth Controller  │  Visitor Controller  │  Approval Controller   │  ║
║   │   Admin Controller                                                  │  ║
║   └──────────────────────────────────────────────────────────┬──────────┘  ║
║                                                              │             ║
║   ┌──────────────────────────────────────────────────────────▼──────────┐  ║
║   │                      SERVICES LAYER                                 │  ║
║   │         🔒 bcrypt Password Hashing   │   🎫 JWT Token Signing       │  ║
║   └─────────────────────────────────────────────────────────────────────┘  ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                       ⬇  Sequelize ORM Queries ⬇                          ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  🟩🟩🟩🟩🟩🟩🟩🟩🟩  DATA LAYER  🟩🟩🟩🟩🟩🟩🟩🟩🟩                        ║
║                  DATABASE — MySQL / PostgreSQL                               ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║   ┌──────────┐  ┌──────────┐  ┌───────────┐  ┌──────────┐  ┌──────────┐  ║
║   │  Users   │  │ Visitors │  │ Approvals │  │EntryLogs │  │Residents │  ║
║   │  Table   │  │  Table   │  │   Table   │  │  Table   │  │  Table   │  ║
║   └──────────┘  └──────────┘  └───────────┘  └──────────┘  └──────────┘  ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## 🧩 Module Breakdown

The system is divided into **five core functional modules**:

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  🔐  MODULE 1 — AUTHENTICATION MODULE                                      ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  Handles all user identity, login, and access control. All three roles —   ║
║  Guard, Resident, and Admin — log in through the same login page. The     ║
║  system issues a JWT token that encodes their role and uses it to show     ║
║  the right dashboard and block unauthorized API access.                   ║
║                                                                             ║
║  • Single login page for all three roles (Guard / Resident / Admin)        ║
║  • JWT token issued on successful login, stored in the browser             ║
║  • All passwords hashed with bcrypt before being stored in the database    ║
║  • JWT middleware validates the token on every protected API request        ║
║  • Role middleware blocks access to routes not meant for a given role      ║
║  • Token expires after a configurable duration (default: 7 days)          ║
║  • Unauthorized requests return proper 401 / 403 HTTP responses            ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  👮  MODULE 2 — VISITOR REGISTRATION MODULE (Guard)                        ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  This is the core input module of the system. It lives on the Guard        ║
║  Dashboard and is the only way visitors get registered into the platform.  ║
║  Every visitor entry flows from this module into the database, and         ║
║  immediately becomes visible to the relevant resident.                     ║
║                                                                             ║
║  • Clean digital registration form — replaces paper logbooks entirely      ║
║  • Fields: Visitor name, phone number, purpose of visit, flat number       ║
║  • Flat number links to the resident who will receive the request          ║
║  • On submission — visitor is saved and status is set to PENDING           ║
║  • Guard dashboard shows live list of all visitors for the current shift   ║
║  • Status column updates automatically: PENDING → APPROVED / DECLINED      ║
║  • Guard marks visitor exit which records the exit timestamp               ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  ✅  MODULE 3 — RESIDENT APPROVAL MODULE                                   ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  This is the Resident Portal — the interface where residents manage who    ║
║  is allowed to enter their flat. When a guard registers a visitor for a   ║
║  flat, that request appears here instantly. The resident does not need a   ║
║  phone call, WhatsApp message, or email — everything is in this portal.   ║
║                                                                             ║
║  • Pending requests list — shows all new visitor entries for this flat     ║
║  • Each card shows: visitor name, phone, purpose, time of arrival          ║
║  • APPROVE button — clears the visitor for entry immediately               ║
║  • DECLINE button — marks visitor as denied, guard sees it instantly       ║
║  • History section — full record of all past visitors with their status    ║
║  • Data isolation — residents can only see visitors to their own flat      ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  📊  MODULE 4 — ADMIN PANEL MODULE                                         ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  The Admin Panel is the nerve centre of the whole system. The admin sees   ║
║  everything that every guard registers, every decision every resident      ║
║  makes, and every entry and exit across the entire building.               ║
║                                                                             ║
║  • Full visibility of all visitor records across all flats and all guards  ║
║  • Manage resident accounts — create, update, deactivate                   ║
║  • Manage guard accounts — create, update, deactivate                      ║
║  • Filter visitor records by date, flat number, guard, or status           ║
║  • See every approval and decline decision with who made it and when       ║
║  • Manage flat numbers, building wings, and system configuration           ║
║  • View real-time dashboard of currently active visitors in the building   ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  📋  MODULE 5 — ENTRY & EXIT LOG MODULE                                    ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  Every visitor movement is permanently recorded — this is the digital      ║
║  replacement for the paper logbook. It cannot be deleted or edited by      ║
║  guards and serves as the official audit trail for the building.           ║
║                                                                             ║
║  • Entry timestamp recorded automatically when the guard submits the form  ║
║  • Exit timestamp recorded when the guard marks the visitor as exited      ║
║  • Total visit duration calculated and stored for every visitor            ║
║  • All records include: visitor ID, flat number, guard ID, resident ID     ║
║  • Fully searchable and filterable from the admin dashboard                ║
║  • Permanent — records are read-only for guards, only admin can manage     ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## ✨ Features

<div align="center">

| # | Feature | Description | Role |
|:---:|:---:|:---|:---:|
| 01 | 🔐 JWT Auth | Secure token-based login with role enforcement for all three users | All |
| 02 | 👤 Visitor Registration | Guard fills digital form — name, phone, purpose, flat number | Guard |
| 03 | 🖥️ In-App Pending Requests | Visitor entries appear instantly on resident's portal | Resident |
| 04 | ✅ One-Click Approve | Resident approves visitor — guard sees APPROVED in real time | Resident |
| 05 | ❌ One-Click Decline | Resident declines — guard sees DECLINED, visitor turned away | Resident |
| 06 | 🕐 Entry Timestamp | Exact date & time auto-logged when visitor is registered | System |
| 07 | 🚪 Exit Timestamp | Guard marks exit — duration auto-calculated and saved | Guard |
| 08 | 📊 Admin Dashboard | Full control: all users, all visitors, all logs, all decisions | Admin |
| 09 | 🔒 bcrypt Hashing | Passwords never stored in plaintext — always hashed | System |
| 10 | 📱 Responsive UI | Works on desktop, tablet, and mobile — no app download needed | All |
| 11 | 🗃️ Sequelize ORM | Clean, type-safe SQL with model associations | Backend |
| 12 | 🚦 Role-Based Access | Each role sees only what they are authorized to see | System |
| 13 | 🔍 Search & Filter | Admin can search visitors by name, flat, date, or status | Admin |
| 14 | 📋 Audit Trail | Permanent, tamper-proof record of every visitor movement | Admin |
| 15 | 🌍 Vercel Deployment | Live on the internet — accessible from any browser, anywhere | All |

</div>

---

## 🛠️ Tech Stack

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  🟦  FRONTEND                                                               ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  React.js          — Component-based UI framework powering the Guard       ║
║                      Dashboard, Resident Portal, and Admin Panel.          ║
║                                                                             ║
║  React Router DOM  — Client-side routing between the login page, guard     ║
║  v7.13.1             dashboard, resident portal, and admin panel without   ║
║                      full page reloads.                                    ║
║                                                                             ║
║  Axios v1.13.6     — HTTP client for making API calls from React to the    ║
║                      Express backend. Handles auth headers and errors.     ║
║                                                                             ║
║  CSS3              — Responsive styling across all pages and components.   ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  🟧  BACKEND                                                                ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  Node.js           — JavaScript runtime for the server-side application.   ║
║                                                                             ║
║  Express.js v5.2.1 — REST API framework. Defines all routes, applies       ║
║                      middleware, and manages request/response lifecycle.   ║
║                                                                             ║
║  JWT v9.0.3        — Signs and verifies login tokens. Each user gets a     ║
║                      token on login that carries their role securely.      ║
║                                                                             ║
║  bcrypt v6 /       — Hashes all passwords before storage. Raw passwords    ║
║  bcryptjs v3.0.3     are never saved anywhere in the system.               ║
║                                                                             ║
║  CORS v2.8.6       — Allows the React frontend to communicate with the     ║
║                      Express backend across different ports.               ║
║                                                                             ║
║  dotenv v17.3.1    — Keeps secrets (DB passwords, JWT key) in .env and     ║
║                      out of the source code entirely.                      ║
║                                                                             ║
║  Nodemon v3.1.14   — Auto-restarts the server on file save in development. ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  🟩  DATABASE & ORM                                                         ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  MySQL / PostgreSQL — Relational database storing all users, visitors,     ║
║                       approvals, and entry/exit logs permanently.          ║
║                                                                             ║
║  Sequelize v6.37.8 — ORM providing model definitions, associations, and   ║
║                      clean query API for both MySQL and PostgreSQL.        ║
║                                                                             ║
║  mysql2 v3.20.0    — MySQL client driver used by Sequelize.                ║
║  pg v8.20.0        — PostgreSQL client driver used by Sequelize.           ║
║  pg-hstore v2.3.4  — Handles hstore data for PostgreSQL.                   ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

<div align="center">

| Technology | Badge | Version |
|:---:|:---:|:---:|
| React.js | ![React](https://img.shields.io/badge/-React.js-61DAFB?style=flat-square&logo=react&logoColor=black) | 18+ |
| Node.js | ![Node](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white) | v18+ |
| Express.js | ![Express](https://img.shields.io/badge/-Express.js-FF6C37?style=flat-square&logo=express&logoColor=white) | v5.2.1 |
| MySQL | ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) | 8.0+ |
| Sequelize | ![Sequelize](https://img.shields.io/badge/-Sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white) | v6.37.8 |
| JWT | ![JWT](https://img.shields.io/badge/-JWT-FB015B?style=flat-square&logo=jsonwebtokens&logoColor=white) | v9.0.3 |
| bcrypt | ![bcrypt](https://img.shields.io/badge/-bcrypt-555555?style=flat-square) | v6.0.0 |
| Axios | ![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) | v1.13.6 |
| React Router | ![RRD](https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=react-router&logoColor=white) | v7.13.1 |
| Nodemon | ![Nodemon](https://img.shields.io/badge/-Nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=white) | v3.1.14 |

</div>

---

## 🗂️ Project Structure

```
📁 Smart-Visitor-Approval-Security-System/
│
├── 📦 package.json                   ←  Root scripts: start, dev, test
├── 📄 package-lock.json              ←  Exact dependency lockfile
├── 📄 .gitignore                     ←  Excludes node_modules, .env, build/
│
├── 📁 backend/                       ←  ════ SERVER-SIDE APPLICATION ════
│   │
│   ├── 🟨 server.js                  ←  Express setup, middleware mount,
│   │                                     Sequelize sync, server listen on PORT
│   ├── 📄 .env                       ←  ⚠️ NEVER COMMIT — DB creds & JWT secret
│   │
│   ├── 📁 config/
│   │   └── db.config.js              ←  Sequelize DB connection using .env vars
│   │
│   ├── 📁 models/                    ←  Database table definitions
│   │   ├── user.model.js             ←  id, name, email, password, role
│   │   ├── visitor.model.js          ←  name, phone, purpose, flat, entryTime
│   │   ├── approval.model.js         ←  status, residentId, visitorId, timestamp
│   │   └── entrylog.model.js         ←  entryTime, exitTime, duration, guardId
│   │
│   ├── 📁 routes/                    ←  API route definitions
│   │   ├── auth.routes.js            ←  POST /login  •  POST /register
│   │   ├── visitor.routes.js         ←  CRUD for visitor registration
│   │   ├── approval.routes.js        ←  Approve / Decline / pending list
│   │   └── admin.routes.js           ←  Admin-only user & log management
│   │
│   ├── 📁 controllers/               ←  Business logic per route
│   │   ├── auth.controller.js        ←  Login, register, JWT signing
│   │   ├── visitor.controller.js     ←  Create visitor, list, mark exit
│   │   ├── approval.controller.js    ←  Handle approve / decline actions
│   │   └── admin.controller.js       ←  User management, logs, dashboard
│   │
│   ├── 📁 middleware/
│   │   ├── auth.middleware.js        ←  Verify JWT on every protected route
│   │   └── role.middleware.js        ←  Block if user role doesn't match
│   │
│   └── 📁 services/
│       └── token.service.js          ←  JWT sign, verify, decode helpers
│
└── 📁 frontend/                      ←  ════ CLIENT-SIDE APPLICATION ════
    │
    ├── 📦 package.json               ←  React frontend dependencies
    └── 📁 src/
        ├── 🟦 App.jsx                ←  Root component + all route definitions
        │
        ├── 📁 pages/
        │   ├── Login.jsx             ←  Shared login for Guard, Resident, Admin
        │   ├── GuardDashboard.jsx    ←  Register visitors, view live status list
        │   ├── ResidentPortal.jsx    ←  View pending requests, approve or decline
        │   └── AdminPanel.jsx        ←  Full control: users, visitors, logs
        │
        ├── 📁 components/
        │   ├── Navbar.jsx            ←  Navigation bar with role-based links
        │   ├── VisitorCard.jsx       ←  Visitor info card with approve/decline
        │   ├── ApprovalBadge.jsx     ←  Status badge: Pending / Approved / Declined
        │   └── Modal.jsx             ←  Confirmation popup dialogs
        │
        ├── 📁 services/
        │   └── api.js               ←  Axios instance + all API call functions
        │
        └── 📁 styles/               ←  CSS per page and component
```

---

## 🔌 API Endpoints

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  🔐  AUTH ROUTES — /api/auth                                                ║
╠══════════════╦══════════════════════════════╦══════════════════════════════╣
║  POST        ║  /api/auth/login             ║  Login — returns JWT token    ║
║  POST        ║  /api/auth/register          ║  Create a new user account    ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  👮  VISITOR ROUTES — /api/visitors          (Guard + Admin)                ║
╠══════════════╦══════════════════════════════╦══════════════════════════════╣
║  POST        ║  /api/visitors               ║  Guard registers a visitor    ║
║  GET         ║  /api/visitors               ║  Get all visitors (today)     ║
║  GET         ║  /api/visitors/:id           ║  Get one visitor's details    ║
║  PUT         ║  /api/visitors/:id/exit      ║  Guard marks visitor as exited║
╠═════════════════════════════════════════════════════════════════════════════╣
║  ✅  APPROVAL ROUTES — /api/approval         (Resident + Admin)             ║
╠══════════════╦══════════════════════════════╦══════════════════════════════╣
║  GET         ║  /api/approval/pending       ║  Resident fetches their queue ║
║  PUT         ║  /api/approval/:id/approve   ║  Resident approves visitor    ║
║  PUT         ║  /api/approval/:id/decline   ║  Resident declines visitor    ║
║  GET         ║  /api/approval/history       ║  Resident's past decisions    ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  🔑  ADMIN ROUTES — /api/admin               (Admin only)                  ║
╠══════════════╦══════════════════════════════╦══════════════════════════════╣
║  GET         ║  /api/admin/users            ║  List all users               ║
║  POST        ║  /api/admin/users            ║  Create guard or resident     ║
║  PUT         ║  /api/admin/users/:id        ║  Update any user account      ║
║  DELETE      ║  /api/admin/users/:id        ║  Deactivate a user            ║
║  GET         ║  /api/admin/visitors         ║  All visitors across all flats║
║  GET         ║  /api/admin/logs             ║  Full entry and exit log      ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## 🚀 Getting Started

### 📋 Prerequisites

```
✅  Node.js  v16+    →   https://nodejs.org
✅  npm      v8+     →   comes with Node.js
✅  MySQL    v8.0+   →   https://mysql.com   (or PostgreSQL v14+)
✅  Git              →   https://git-scm.com
```

### ⚡ Installation

**1 — Clone the repository**
```bash
git clone https://github.com/happylimbasiya22/Smart-Visitor-Approval-Security-System.git
cd Smart-Visitor-Approval-Security-System
```

**2 — Install backend dependencies**
```bash
npm install
```

**3 — Install frontend dependencies**
```bash
cd frontend
npm install
cd ..
```

**4 — Create the database**
```sql
CREATE DATABASE visitor_system;
```

**5 — Create `backend/.env`**
```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_database_password
DB_NAME=visitor_system
DB_DIALECT=mysql

JWT_SECRET=your_secret_key_here
JWT_EXPIRES_IN=7d
```

### ▶️ Run the App

**Terminal 1 — Backend**
```bash
npm start          # production
npm run dev        # development (auto-restart)
```
API → `http://localhost:5000`

**Terminal 2 — Frontend**
```bash
cd frontend
npm start
```
App → `http://localhost:3000`

---

## 🌐 Live Demo

<div align="center">

### 👉 [**smart-visitor-approval-security-sys.vercel.app**](https://smart-visitor-approval-security-sys.vercel.app)

<img src="https://img.shields.io/badge/🚀%20Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
<img src="https://img.shields.io/badge/Status-Live-22c55e?style=for-the-badge"/>

</div>

---

## 💡 Use Cases

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🏘️  RESIDENTIAL SOCIETIES   — Digitize gate visitor management across      │
│                                all flats. Residents approve from any device │
│                                without a single phone call from the guard.  │
├─────────────────────────────────────────────────────────────────────────────┤
│  🏢  CORPORATE BUILDINGS     — Track contractors and external visitors per  │
│                                department. Employees manage access from     │
│                                their own portal.                            │
├─────────────────────────────────────────────────────────────────────────────┤
│  🎓  EDUCATIONAL INSTITUTES  — Manage parent visits and guest lecturers on  │
│                                campus. Faculty can approve or decline from  │
│                                their login.                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│  🏥  HOSPITALS               — Control patient visitors ward by ward.       │
│                                Ward staff approve visitors digitally with   │
│                                a full log of every person who entered.      │
├─────────────────────────────────────────────────────────────────────────────┤
│  🏨  HOTELS & HOSTELS        — Track guests visiting specific rooms with a  │
│                                permanent digital record for management.     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🔭 Future Scope

```
╔═════════════════════════════════════════════════════════════════════════════╗
║                        🚀  PLANNED ENHANCEMENTS                            ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  📲  Push Notifications                                                     ║
║      Notify residents of new pending visitor requests via browser push      ║
║      notifications so they don't need to keep the portal open.             ║
║                                                                             ║
║  📱  Mobile App — React Native                                              ║
║      Native Android and iOS app for guards and residents with a better     ║
║      mobile experience and background notification support.                ║
║                                                                             ║
║  📷  QR Code Visitor Check-In                                               ║
║      Pre-approved regular visitors (maids, drivers) get a QR code the      ║
║      guard scans to log their entry without any manual form.               ║
║                                                                             ║
║  🤖  Face Recognition Entry                                                 ║
║      Camera at the gate auto-identifies pre-registered visitors and        ║
║      flags unknown faces to the guard dashboard.                           ║
║                                                                             ║
║  📊  Analytics Dashboard                                                    ║
║      Visual charts for peak visitor hours, approval rates, and building    ║
║      security insights using Recharts or Chart.js.                         ║
║                                                                             ║
║  🏙️  Multi-Building Support                                                 ║
║      One admin account managing multiple buildings, towers, or             ║
║      societies under a single unified platform.                            ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## 🤝 Contributing

```bash
# 1. Fork this repository

# 2. Create your branch
git checkout -b feature/your-feature-name

# 3. Commit your changes
git commit -m "feat: what you added or fixed"

# 4. Push and open a Pull Request
git push origin feature/your-feature-name
```

**Ideas:** Push notifications · QR code check-in · Face recognition · Analytics charts · Mobile app · Multi-building support · Docker setup · CI/CD with GitHub Actions

---

<div align="center">

```
╔══════════════════════════════════════════════════════════════════╗
║    Built to make every residential building safer, smarter,     ║
║    and more connected — one visitor registration at a time.     ║
╚══════════════════════════════════════════════════════════════════╝
```

**⭐ Star this repo if it helped you!**

[![GitHub stars](https://img.shields.io/github/stars/happylimbasiya22/Smart-Visitor-Approval-Security-System?style=social)](https://github.com/happylimbasiya22/Smart-Visitor-Approval-Security-System)
&nbsp;
[![GitHub forks](https://img.shields.io/github/forks/happylimbasiya22/Smart-Visitor-Approval-Security-System?style=social)](https://github.com/happylimbasiya22/Smart-Visitor-Approval-Security-System/fork)

*ISC License — free to use, modify, and distribute*

</div>
