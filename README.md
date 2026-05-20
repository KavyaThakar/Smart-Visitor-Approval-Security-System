<div align="center">

# 🏢 Smart Visitor Approval & Security System

### *A Full-Stack Digital Security Platform for Residential Buildings & Gated Communities*

<br/>

<!-- LIVE DEMO BANNER -->
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
<img src="https://img.shields.io/badge/Nodemailer-Email%20Alerts-22B573?style=for-the-badge&logo=gmail&logoColor=white"/>
<img src="https://img.shields.io/badge/bcrypt-Password%20Security-E53E3E?style=for-the-badge&logoColor=white"/>

<br/>

<!-- ROW 3 - STATUS BADGES -->
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
| 5 | [🔄 Visitor Entry Workflow](#-visitor-entry-workflow) |
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

In traditional setups, a security guard at the gate writes visitor names into a physical register, picks up a phone to call the resident, waits for a response, and manually notes the time of entry and exit. This process is slow, error-prone, and unreliable — important visitor data gets lost, calls go unanswered, and there is no centralized record to review who entered a building and when.

This system changes all of that. When a visitor arrives at the building gate, the **Security Guard** uses the web portal to **register the visitor's details** — including name, phone number, photograph, purpose of visit, and the flat or resident they want to meet. The system then **automatically sends an email notification** to the concerned resident with a one-click **Approve** or **Decline** option. The resident can respond instantly from any device — mobile, tablet, or desktop. The guard's interface is updated in real time, and the visitor is either allowed inside or politely turned away. Every single entry and exit is **timestamped and permanently logged** in the database.

The **Admin** has complete visibility and control — they can manage resident accounts, security guard profiles, view complete visitor histories, and generate audit reports for any period.

Built with **React.js** on the frontend, **Node.js + Express.js** on the backend, **MySQL/PostgreSQL** via **Sequelize ORM**, **JWT** for authentication, **bcrypt** for password security, and **Nodemailer** for automated email alerts. The application is **live and deployed on Vercel** at [smart-visitor-approval-security-sys.vercel.app](https://smart-visitor-approval-security-sys.vercel.app).

---

## 🎯 Problem Statement

Residential buildings and gated communities continue to rely on **manual, paper-based visitor management** that suffers from critical problems every single day:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                ❌  PROBLEMS WITH TRADITIONAL SYSTEMS                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  📒  Paper registers lose data, fade, get damaged or tampered with         │
│                                                                             │
│  📞  Guards must manually call residents — calls go unanswered often       │
│                                                                             │
│  ⏱️  Long queues at gates due to slow manual verification process           │
│                                                                             │
│  🔍  No searchable history — impossible to trace old visitor records        │
│                                                                             │
│  🔐  No authentication — anyone can write anything in a paper log          │
│                                                                             │
│  📊  No reports, no analytics, no proper audit trail for management        │
│                                                                             │
│  🚨  Security incidents cannot be traced with accurate timestamps          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                ✅  HOW THIS SYSTEM SOLVES EVERY PROBLEM                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  💻  Digital registration — instant, clean, searchable, permanent          │
│                                                                             │
│  📧  Automated email alerts — residents notified in seconds                │
│                                                                             │
│  ⚡  One-click approval — no calls needed, faster gate clearance           │
│                                                                             │
│  📋  Full audit trail — every entry and exit permanently timestamped       │
│                                                                             │
│  🔒  JWT + bcrypt security — tamper-proof, role-protected platform         │
│                                                                             │
│  📊  Admin dashboard — complete reports and full system oversight          │
│                                                                             │
│  🌐  Access anywhere — web-based, no app installation required             │
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
│      Replace paper logbooks with a structured digital form that captures   │
│      visitor name, phone, photo, purpose, and destination flat number.     │
│                                                                             │
│  🎯  Objective 2 — Real-Time Resident Approval System                       │
│      Allow residents to approve or decline visitors instantly from their   │
│      phone or computer without any need for a phone call.                  │
│                                                                             │
│  🎯  Objective 3 — Automated Email Notifications                            │
│      Automatically send arrival alerts to residents via Nodemailer as      │
│      soon as a visitor is registered at the gate.                          │
│                                                                             │
│  🎯  Objective 4 — Entry & Exit Audit Trail                                 │
│      Maintain permanent, tamper-proof, timestamped records of every        │
│      visitor's entry and exit time in the relational database.             │
│                                                                             │
│  🎯  Objective 5 — Secure Role-Based Authentication                         │
│      Implement JWT tokens and bcrypt hashing so only authorized            │
│      personnel can access each module.                                     │
│                                                                             │
│  🎯  Objective 6 — Centralized Admin Management                             │
│      Admin panel for managing all residents, guards, visitor records,      │
│      and system-level configuration from one place.                        │
│                                                                             │
│  🎯  Objective 7 — Live, Accessible Web Deployment                          │
│      Deploy the system publicly on Vercel so it is accessible from any    │
│      browser without any local installation needed.                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 👥 User Roles & Responsibilities

The system is built around **three distinct user roles**, each with their own dashboard, permissions, and set of actions:

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵  ROLE 1  🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵           ║
║                          👮  SECURITY GUARD                                 ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  The Security Guard is the first point of contact for every visitor.       ║
║  They operate the Guard Dashboard from a tablet or desktop at the gate.   ║
║  All visitor registrations flow through this role into the system.         ║
║                                                                             ║
║  PERMISSIONS & ACTIONS:                                                     ║
║  ┌─────────────────────────────────────────────────────────────────────┐   ║
║  │  ✔  Register new visitors by filling in name, phone, photo         │   ║
║  │  ✔  Select which flat or resident the visitor wants to meet        │   ║
║  │  ✔  Specify purpose of visit (delivery, personal, service, etc.)   │   ║
║  │  ✔  Trigger automatic email notification to the resident            │   ║
║  │  ✔  View real-time approval or decline status on dashboard          │   ║
║  │  ✔  Mark visitor exit when they leave the building                  │   ║
║  │  ✔  View full list of all visitors for the current shift/day        │   ║
║  │  ✔  Search visitors by name, flat number, or status                 │   ║
║  └─────────────────────────────────────────────────────────────────────┘   ║
╚═════════════════════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════════════════════╗
║  🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢  ROLE 2  🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢           ║
║                            🏠  RESIDENT                                     ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  Residents are homeowners or tenants living in the building. They receive  ║
║  instant email notifications and manage visitor access through the         ║
║  Resident Portal — accessible from any browser, no app install needed.     ║
║                                                                             ║
║  PERMISSIONS & ACTIONS:                                                     ║
║  ┌─────────────────────────────────────────────────────────────────────┐   ║
║  │  ✔  Receive email notification when a visitor arrives for them      │   ║
║  │  ✔  View visitor's full details: name, photo, phone, purpose        │   ║
║  │  ✔  One-click APPROVE → visitor is allowed inside the building      │   ║
║  │  ✔  One-click DECLINE → visitor is politely turned away at gate     │   ║
║  │  ✔  View complete personal visitor history with timestamps          │   ║
║  │  ✔  Update personal profile and notification preferences            │   ║
║  └─────────────────────────────────────────────────────────────────────┘   ║
╚═════════════════════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════════════════════╗
║  🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴  ROLE 3  🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴           ║
║                         🔑  ADMINISTRATOR                                   ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  The Administrator has the highest level of access across the entire       ║
║  platform. They manage all users, all visitors, all logs, and all          ║
║  settings. Typically the building secretary or society manager.            ║
║                                                                             ║
║  PERMISSIONS & ACTIONS:                                                     ║
║  ┌─────────────────────────────────────────────────────────────────────┐   ║
║  │  ✔  Create, update, and deactivate resident accounts                │   ║
║  │  ✔  Create, update, and deactivate security guard accounts          │   ║
║  │  ✔  View complete visitor history for any resident or guard         │   ║
║  │  ✔  Access real-time dashboard of all currently active visitors     │   ║
║  │  ✔  Filter visitor records by date, flat, guard, or status          │   ║
║  │  ✔  Manage flat numbers, building wings, system configuration       │   ║
║  │  ✔  Override or correct any visitor entry or approval decision      │   ║
║  └─────────────────────────────────────────────────────────────────────┘   ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## 🔄 Visitor Entry Workflow

This is the complete step-by-step lifecycle of every visitor interaction from arrival to exit:

```
╔═════════════════════════════════════════════════════════════════════════════╗
║              🚶 COMPLETE VISITOR JOURNEY — STEP BY STEP                    ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  STEP 1 ──────────────────────────────────────────────────────────────     ║
║  👤  Visitor Arrives at the Building Gate                                   ║
║      The visitor walks up to the security gate. They state their name      ║
║      and which flat or resident they want to visit.                        ║
║             │                                                               ║
║             ▼                                                               ║
║  STEP 2 ──────────────────────────────────────────────────────────────     ║
║  👮  Guard Opens the Guard Dashboard & Fills Visitor Form                   ║
║      ┌──────────────────────────────────────────────────────────┐          ║
║      │  👤 Visitor Full Name    :  Rahul Mehta                  │          ║
║      │  📞 Phone Number         :  +91 98765 43210              │          ║
║      │  🏠 Visiting Flat No.    :  B-204                        │          ║
║      │  📝 Purpose of Visit     :  Personal / Delivery / Other  │          ║
║      │  📷 Photo                :  Upload or webcam capture      │          ║
║      └──────────────────────────────────────────────────────────┘          ║
║             │                                                               ║
║             ▼                                                               ║
║  STEP 3 ──────────────────────────────────────────────────────────────     ║
║  📧  System Auto-Sends Email to Resident of Flat B-204                      ║
║      Email includes:                                                       ║
║       • Visitor name, photo, and phone number                              ║
║       • Stated purpose and time of arrival                                 ║
║       • Two action buttons  →  ✅ APPROVE   or   ❌ DECLINE                 ║
║             │                                                               ║
║             ▼                                                               ║
║  STEP 4 ──────────────────────────────────────────────────────────────     ║
║  🏠  Resident Reviews Email & Makes a Decision from Any Device              ║
║                                                                             ║
║      ┌────────────────────────┐       ┌───────────────────────────┐        ║
║      │     ✅ APPROVED         │       │      ❌ DECLINED           │        ║
║      │                        │       │                           │        ║
║      │  Guard dashboard shows │       │  Guard dashboard shows    │        ║
║      │  GREEN — ENTRY ALLOWED │       │  RED — ENTRY DENIED       │        ║
║      │                        │       │                           │        ║
║      │  Visitor walks in      │       │  Visitor turned away      │        ║
║      └──────────┬─────────────┘       └─────────────┬─────────────┘        ║
║                 │                                   │                      ║
║                 └──────────────┬────────────────────┘                      ║
║                                ▼                                           ║
║  STEP 5 ──────────────────────────────────────────────────────────────     ║
║  📋  Entry Log Created in Database (auto)                                   ║
║      Records:  Visitor ID • Name • Phone • Flat Number                     ║
║                Entry Timestamp • Approval Status • Guard ID                ║
║             │                                                               ║
║             ▼                                                               ║
║  STEP 6 ──────────────────────────────────────────────────────────────     ║
║  🚪  Visitor Exits — Guard Marks Exit on Dashboard                          ║
║      Exit timestamp auto-recorded. Visit duration calculated & saved.     ║
║             │                                                               ║
║             ▼                                                               ║
║  STEP 7 ──────────────────────────────────────────────────────────────     ║
║  📊  Full Record Visible in Admin Dashboard                                  ║
║      Admin can view, filter, search, and export all records forever.       ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## 🏗️ System Architecture

The application follows a clean **3-tier MVC architecture** with a clear separation between presentation, business logic, and data storage:

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  🟦🟦🟦🟦🟦🟦🟦🟦🟦  PRESENTATION LAYER  🟦🟦🟦🟦🟦🟦🟦🟦🟦               ║
║                       FRONTEND — React.js                                   ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║   ┌────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌──────────┐  ║
║   │  🔐 Login  │  │  👮 Guard        │  │  🏠 Resident    │  │ 🔑 Admin │  ║
║   │  Page      │  │  Dashboard       │  │  Portal          │  │ Panel    │  ║
║   └────────────┘  └─────────────────┘  └─────────────────┘  └──────────┘  ║
║                                                                             ║
║        React Router DOM — client-side routing between all pages             ║
║        Axios — HTTP requests to the Express backend REST API                ║
║        CSS3 — fully responsive styling for all screen sizes                 ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                     ⬇  HTTP / HTTPS REST API Calls ⬇                      ║
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
║   │   🔐 JWT Verify  │  👮 Role Guard  │  📝 Input Validation           │  ║
║   └──────────────────────────────────────────────────────────┬──────────┘  ║
║                                                              │             ║
║   ┌──────────────────────────────────────────────────────────▼──────────┐  ║
║   │                     CONTROLLER LAYER                               │  ║
║   │   Auth Controller  │  Visitor Controller  │  Approval Controller   │  ║
║   │   Admin Controller │                                               │  ║
║   └──────────────────────────────────────────────────────────┬──────────┘  ║
║                                                              │             ║
║   ┌──────────────────────────────────────────────────────────▼──────────┐  ║
║   │                      SERVICES LAYER                                 │  ║
║   │   📧 Nodemailer Email  │  🔒 bcrypt Passwords  │  🎫 JWT Tokens     │  ║
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

The system is divided into **six core functional modules**, each handling a distinct area of responsibility:

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  🔐  MODULE 1 — AUTHENTICATION & SECURITY MODULE                           ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  This module handles all user identity, login, and access control across   ║
║  the platform using JWT for stateless authentication and bcrypt for         ║
║  strong password hashing with salt rounds.                                 ║
║                                                                             ║
║  • User registration with email and securely hashed password               ║
║  • Login with bcryptjs credential verification                             ║
║  • JWT token generation with configurable expiry (default 7 days)          ║
║  • Role assignment: GUARD | RESIDENT | ADMIN per account                   ║
║  • JWT middleware protecting every private API route                       ║
║  • Unauthorized access returns standard 401/403 HTTP errors                ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  👮  MODULE 2 — VISITOR REGISTRATION MODULE                                ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  The core input module used by security guards at the gate. It provides   ║
║  a clean digital form to capture all visitor information quickly and       ║
║  accurately — replacing the physical paper logbook entirely.               ║
║                                                                             ║
║  • Digital form: visitor name, phone, photo, purpose of visit              ║
║  • Dropdown to select destination flat number and resident name            ║
║  • Purpose categories: Delivery, Personal, Service, Maintenance            ║
║  • Automatic timestamp recording on every form submission                  ║
║  • Live list view of all visitors registered during the current shift      ║
║  • Search and filter visitors by name, flat number, date, or status        ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  📧  MODULE 3 — NOTIFICATION MODULE                                        ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  The communication backbone of the system. Nodemailer with Gmail SMTP      ║
║  delivers real-time email alerts to residents the moment a visitor is      ║
║  registered — no phone calls, no delays.                                   ║
║                                                                             ║
║  • Automatic email triggered on every new visitor registration             ║
║  • Email contains visitor name, photo, phone number, and purpose           ║
║  • Embedded APPROVE and DECLINE action buttons directly in the email       ║
║  • Confirmation email to resident after their decision is recorded         ║
║  • Notification to guard dashboard in real time when resident responds     ║
║  • HTML email templates for a professional, readable layout                ║
║  • SMTP config via .env — credentials never hardcoded                     ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  ✅  MODULE 4 — APPROVAL MANAGEMENT MODULE                                 ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  Powers the Resident Portal — the interface where residents manage who      ║
║  is allowed into their building. Designed to be fast, mobile-friendly,    ║
║  and accessible from any device without any app installation.              ║
║                                                                             ║
║  • List of all pending visitor approval requests for the logged-in resident║
║  • View visitor's full profile: name, photo, purpose, and arrival time     ║
║  • APPROVE button — immediately grants gate entry clearance                ║
║  • DECLINE button — marks visitor as denied, guard is notified instantly   ║
║  • Approval status reflected on guard's dashboard in real time             ║
║  • Historical view of all previously approved and declined visitors        ║
║  • Complete data isolation — residents cannot see other residents' visitors ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  📊  MODULE 5 — ADMIN MANAGEMENT MODULE                                    ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  The nerve centre of the entire system. The administrator uses this        ║
║  module to control every aspect — users, visitors, logs, settings,         ║
║  and overall platform health.                                              ║
║                                                                             ║
║  • Full CRUD operations on residents, guards, and admin accounts           ║
║  • Assign guards to specific building wings or gate posts                  ║
║  • View complete visitor log filterable by date range or flat number       ║
║  • Filter records by status: Pending / Approved / Declined / Exited        ║
║  • Manage flat numbers, building configuration, and system settings        ║
║  • Override or correct any visitor entry or approval decision              ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  📋  MODULE 6 — ENTRY & EXIT LOG MODULE                                    ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  Maintains the permanent, tamper-proof audit trail of all visitor          ║
║  movements — the digital equivalent of a physical logbook, but with        ║
║  search, filter, export, and precise timestamp capabilities.               ║
║                                                                             ║
║  • Permanent entry timestamp recorded at the moment of visitor arrival     ║
║  • Guard manually marks exit; system auto-records exit timestamp           ║
║  • Total visit duration calculated and stored in the database              ║
║  • All records tied to visitor ID, resident ID, guard ID, and time         ║
║  • Fully searchable, filterable, and sortable from the admin dashboard     ║
║  • Records cannot be deleted or modified by guards — read-only access      ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## ✨ Features

<div align="center">

| # | Feature | Description | Role |
|:---:|:---:|:---|:---:|
| 01 | 🔐 JWT Auth | Stateless, token-based secure authentication with role enforcement | All |
| 02 | 👤 Visitor Registration | Digital form capturing name, photo, phone, purpose, destination | Guard |
| 03 | 📧 Auto Email Alerts | Nodemailer sends instant arrival email to resident | System |
| 04 | ✅ One-Click Approval | Resident approves or declines from browser — no phone call | Resident |
| 05 | 🕐 Entry Timestamp | Exact date & time logged the moment visitor enters | System |
| 06 | 🚪 Exit Timestamp | Guard marks exit; duration calculated & saved automatically | Guard |
| 07 | 📊 Admin Dashboard | Central control over all users, visitors, logs & analytics | Admin |
| 08 | 🔒 bcrypt Hashing | All passwords hashed with bcrypt — never stored in plaintext | System |
| 09 | 📱 Responsive UI | Works perfectly on desktop, tablet, and mobile browsers | All |
| 10 | 🗃️ Sequelize ORM | Type-safe SQL queries with model associations | Backend |
| 11 | 🚦 Role-Based Access | Separate dashboards and API permissions per user role | System |
| 12 | 🔍 Search & Filter | Search visitors by name, flat, date, or approval status | Guard / Admin |
| 13 | 📋 Audit Trail | Permanent, tamper-proof visit history for all visitors | Admin |
| 14 | 🌍 Vercel Deployment | Live, publicly accessible deployment on Vercel | All |
| 15 | ⚙️ dotenv Config | All secrets managed via environment variables | Backend |

</div>

---

## 🛠️ Tech Stack

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  🟦  FRONTEND TECHNOLOGIES                                                  ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  React.js          — Component-based UI framework powering the Guard       ║
║                      Dashboard, Resident Portal, and Admin Panel.          ║
║                      Handles all user interactions and state management.   ║
║                                                                             ║
║  React Router DOM  — Client-side routing between pages without full-page   ║
║  v7.13.1             reloads, delivering a smooth single-page app (SPA)    ║
║                      experience across all dashboards and portals.         ║
║                                                                             ║
║  Axios             — Promise-based HTTP client for making all API calls    ║
║  v1.13.6             from React components to the Express.js backend.      ║
║                      Handles request headers, auth tokens, and errors.     ║
║                                                                             ║
║  CSS3              — Custom styling, animations, and fully responsive      ║
║                      layout. Works on all screen sizes and browsers.       ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  🟧  BACKEND TECHNOLOGIES                                                   ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  Node.js           — JavaScript runtime powering the entire server-side    ║
║                      application. Handles HTTP requests, business logic,   ║
║                      database queries, and email dispatch concurrently.    ║
║                                                                             ║
║  Express.js        — Minimal, flexible web framework for Node.js. Used to  ║
║  v5.2.1              define all REST API routes, apply middleware layers,  ║
║                      and manage the full request and response lifecycle.   ║
║                                                                             ║
║  JSON Web Token    — Industry-standard token-based authentication. Each    ║
║  (JWT) v9.0.3        successful login returns a signed JWT. The frontend   ║
║                      sends it in Authorization headers for protected calls.║
║                                                                             ║
║  bcrypt v6.0.0     — Password hashing library. All passwords are hashed    ║
║  bcryptjs v3.0.3     using bcrypt's configurable salt rounds before        ║
║                      being stored. Raw passwords are never saved anywhere. ║
║                                                                             ║
║  Nodemailer v8.0.7 — Node.js library for transactional email delivery.     ║
║                      Integrated with Gmail SMTP to instantly notify        ║
║                      residents when a visitor arrives at their building.   ║
║                                                                             ║
║  CORS v2.8.6       — Cross-Origin Resource Sharing middleware that allows  ║
║                      the React frontend (port 3000) to communicate         ║
║                      securely with the Express backend (port 5000).        ║
║                                                                             ║
║  dotenv v17.3.1    — Loads environment variables from .env file into       ║
║                      process.env, keeping all secrets out of source code.  ║
║                                                                             ║
║  Nodemon v3.1.14   — Development utility that auto-restarts the Express    ║
║                      server whenever any file is saved during development. ║
║                                                                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  🟩  DATABASE & ORM                                                         ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  MySQL / PostgreSQL — Relational database for structured, persistent       ║
║                       storage of all users, visitors, approvals, and logs. ║
║                       Supports both MySQL (mysql2) and PostgreSQL (pg).    ║
║                                                                             ║
║  Sequelize v6.37.8 — Promise-based Node.js ORM for both MySQL and          ║
║                      PostgreSQL. Provides model definitions, associations, ║
║                      migrations, hooks, and clean query API without SQL.   ║
║                                                                             ║
║  mysql2 v3.20.0    — Fast MySQL client for Node.js, used by Sequelize      ║
║                      when connecting to a MySQL database backend.          ║
║                                                                             ║
║  pg v8.20.0        — PostgreSQL client library for Node.js, used when      ║
║  pg-hstore v2.3.4    connecting Sequelize to a PostgreSQL database.        ║
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
| Nodemailer | ![Nodemailer](https://img.shields.io/badge/-Nodemailer-22B573?style=flat-square&logo=gmail&logoColor=white) | v8.0.7 |
| Axios | ![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) | v1.13.6 |
| React Router DOM | ![RRD](https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=react-router&logoColor=white) | v7.13.1 |
| Nodemon | ![Nodemon](https://img.shields.io/badge/-Nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=white) | v3.1.14 |

</div>

---

## 🗂️ Project Structure

```
📁 Smart-Visitor-Approval-Security-System/
│
├── 📦 package.json                   ←  Root manifest — scripts, all dependencies
├── 📄 package-lock.json              ←  Exact dependency lockfile (auto-generated)
├── 📄 .gitignore                     ←  node_modules, .env, build/ excluded from git
│
├── 📁 backend/                       ←  ════ SERVER-SIDE APPLICATION ════
│   │
│   ├── 🟨 server.js                  ←  Express app setup, all middleware mounted,
│   │                                     Sequelize sync, server starts on PORT
│   │
│   ├── 📄 .env                       ←  ⚠️ NEVER COMMIT — contains DB credentials,
│   │                                     JWT secret, and Nodemailer email config
│   │
│   ├── 📁 config/
│   │   └── db.config.js              ←  Sequelize connection: reads DB_HOST,
│   │                                     DB_USER, DB_NAME, DB_DIALECT from .env
│   │
│   ├── 📁 models/                    ←  Sequelize ORM data models (define tables)
│   │   ├── user.model.js             ←  Users: id, name, email, password, role
│   │   ├── visitor.model.js          ←  Visitors: name, phone, photo, purpose, flat
│   │   ├── approval.model.js         ←  Approvals: status, residentId, visitorId
│   │   └── entrylog.model.js         ←  Logs: entryTime, exitTime, duration, guardId
│   │
│   ├── 📁 routes/                    ←  Express route definitions (URL → controller)
│   │   ├── auth.routes.js            ←  POST /login, POST /register, POST /logout
│   │   ├── visitor.routes.js         ←  Full CRUD for visitor management
│   │   ├── approval.routes.js        ←  Approve / decline / history endpoints
│   │   └── admin.routes.js           ←  Admin-only user and log management routes
│   │
│   ├── 📁 controllers/               ←  Business logic handlers (called by routes)
│   │   ├── auth.controller.js        ←  Login, register, bcrypt compare, JWT sign
│   │   ├── visitor.controller.js     ←  Register, list, search, exit-mark visitors
│   │   ├── approval.controller.js    ←  Handle approve/decline, update approval status
│   │   └── admin.controller.js       ←  User management, reports, dashboard data
│   │
│   ├── 📁 middleware/
│   │   ├── auth.middleware.js        ←  Verify JWT on every protected route
│   │   └── role.middleware.js        ←  Block access if user role is insufficient
│   │
│   └── 📁 services/
│       ├── email.service.js          ←  Nodemailer SMTP config + HTML email templates
│       └── token.service.js          ←  JWT sign, verify, and decode helpers
│
└── 📁 frontend/                      ←  ════ CLIENT-SIDE APPLICATION ════
    │
    ├── 📦 package.json               ←  Frontend-only React dependencies
    │
    └── 📁 src/
        │
        ├── 🟦 App.jsx                ←  Root component + React Router route definitions
        │
        ├── 📁 pages/                 ←  Full-page React components
        │   ├── Login.jsx             ←  Login form for all user roles
        │   ├── GuardDashboard.jsx    ←  Guard: register visitors, view list, mark exit
        │   ├── ResidentPortal.jsx    ←  Resident: view requests, approve or decline
        │   └── AdminPanel.jsx        ←  Admin: user management, full visitor logs
        │
        ├── 📁 components/            ←  Reusable UI building blocks
        │   ├── Navbar.jsx            ←  Navigation bar with role-based links
        │   ├── VisitorCard.jsx       ←  Single visitor info card
        │   ├── ApprovalBadge.jsx     ←  Status badge: pending / approved / declined
        │   └── Modal.jsx             ←  Confirmation popup dialogs
        │
        ├── 📁 services/
        │   └── api.js               ←  Axios instance + all API call functions
        │
        └── 📁 styles/               ←  CSS stylesheets per page and component
```

---

## 🔌 API Endpoints

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  🔐  AUTH ROUTES — /api/auth                                                ║
╠══════════════╦══════════════════════════════╦══════════════════════════════╣
║  POST        ║  /api/auth/login             ║  Authenticate user, return JWT║
║  POST        ║  /api/auth/register          ║  Create a new user account    ║
║  POST        ║  /api/auth/logout            ║  Invalidate user session      ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  👮  VISITOR ROUTES — /api/visitors          (Guard + Admin only)           ║
╠══════════════╦══════════════════════════════╦══════════════════════════════╣
║  GET         ║  /api/visitors               ║  Get all visitors (today)     ║
║  POST        ║  /api/visitors               ║  Register a new visitor       ║
║  GET         ║  /api/visitors/:id           ║  Get one visitor's details    ║
║  PUT         ║  /api/visitors/:id/exit      ║  Log visitor exit timestamp   ║
║  GET         ║  /api/visitors/search        ║  Search by name/flat/date     ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  ✅  APPROVAL ROUTES — /api/approval         (Resident + Admin)             ║
╠══════════════╦══════════════════════════════╦══════════════════════════════╣
║  GET         ║  /api/approval/pending       ║  Get my pending requests      ║
║  PUT         ║  /api/approval/:id/approve   ║  Resident approves visitor    ║
║  PUT         ║  /api/approval/:id/decline   ║  Resident declines visitor    ║
║  GET         ║  /api/approval/history       ║  All past decisions by me     ║
╠═════════════════════════════════════════════════════════════════════════════╣
║  🔑  ADMIN ROUTES — /api/admin               (Admin only)                  ║
╠══════════════╦══════════════════════════════╦══════════════════════════════╣
║  GET         ║  /api/admin/users            ║  List all user accounts       ║
║  POST        ║  /api/admin/users            ║  Create guard/resident user   ║
║  PUT         ║  /api/admin/users/:id        ║  Update a user account        ║
║  DELETE      ║  /api/admin/users/:id        ║  Deactivate a user account    ║
║  GET         ║  /api/admin/residents        ║  Get all resident accounts    ║
║  GET         ║  /api/admin/logs             ║  Full entry/exit log          ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## 🚀 Getting Started

### 📋 Prerequisites

```
✅  Node.js  —  v16 or higher      https://nodejs.org
✅  npm      —  v8 or higher       (comes bundled with Node.js)
✅  MySQL    —  v8.0+              https://mysql.com  (or PostgreSQL v14+)
✅  Git      —  any version        https://git-scm.com
✅  Gmail    —  any account        For Nodemailer email notifications
```

---

### ⚡ Step-by-Step Installation

**Step 1 — Clone the Repository**
```bash
git clone https://github.com/happylimbasiya22/Smart-Visitor-Approval-Security-System.git
cd Smart-Visitor-Approval-Security-System
```

**Step 2 — Install Root & Backend Dependencies**
```bash
npm install
```

**Step 3 — Install Frontend Dependencies**
```bash
cd frontend
npm install
cd ..
```

**Step 4 — Create the Database**
```sql
-- Open MySQL Workbench or terminal and run:
CREATE DATABASE visitor_system;
```

**Step 5 — Configure Environment Variables**

Create a `.env` file inside the `backend/` folder:

```env
# ── Server Configuration ──────────────────────────────────
PORT=5000

# ── Database Configuration ────────────────────────────────
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_database_password
DB_NAME=visitor_system
DB_DIALECT=mysql          # or postgres

# ── JWT Configuration ─────────────────────────────────────
JWT_SECRET=your_super_long_random_secret_key_here
JWT_EXPIRES_IN=7d

# ── Nodemailer Email Config (Gmail SMTP) ──────────────────
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_FROM="Smart Security System <your_gmail@gmail.com>"
```

> ⚠️ **Gmail App Password Setup:**
> Enable 2-Step Verification → Go to **Google Account → Security → App Passwords** → Generate a 16-character app password → Use that as `EMAIL_PASS`.
> **Do not use your actual Gmail password.**

---

### ▶️ Running the Application

**Terminal 1 — Start the Backend Server**
```bash
# Production
npm start

# Development (live reload with nodemon)
npm run dev
```
✅ API running at → `http://localhost:5000`

**Terminal 2 — Start the Frontend**
```bash
cd frontend
npm start
```
✅ App running at → `http://localhost:3000`

---

## 🌐 Live Demo

The application is **live and publicly deployed** on Vercel.

<div align="center">

### 👉 [**smart-visitor-approval-security-sys.vercel.app**](https://smart-visitor-approval-security-sys.vercel.app)

<img src="https://img.shields.io/badge/🚀%20Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
<img src="https://img.shields.io/badge/Status-Live-22c55e?style=for-the-badge"/>

</div>

You can visit the live link to explore the full system — Guard Dashboard, Resident Portal, and Admin Panel — all running in production.

---

## 💡 Use Cases

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   🏘️  RESIDENTIAL SOCIETIES                                                 │
│       Replace paper visitor registers in housing societies with a fully     │
│       digital system. Residents approve visitors from their phone and       │
│       the guard never needs to make a single phone call.                   │
│                                                                             │
│   🏢  CORPORATE OFFICE BUILDINGS                                            │
│       Track contractors, vendors, and external guests visiting specific     │
│       departments. Employees receive digital approval requests with full    │
│       visitor details before granting access.                              │
│                                                                             │
│   🎓  EDUCATIONAL INSTITUTIONS                                              │
│       Schools and colleges can track parents, delivery personnel, and      │
│       guest lecturers entering campus. Faculty can approve or deny access  │
│       digitally from their portal.                                         │
│                                                                             │
│   🏥  HOSPITALS & HEALTHCARE FACILITIES                                     │
│       Manage patient visitors ward by ward. Each ward in-charge can        │
│       approve or decline visitors digitally while the security desk        │
│       maintains a clean digital log of all who entered.                    │
│                                                                             │
│   🏨  HOTELS & SERVICED APARTMENTS                                          │
│       Track guests visiting specific rooms. Hotel staff can manage who     │
│       is allowed access to private residential floors with a full log.     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🔭 Future Scope

```
╔═════════════════════════════════════════════════════════════════════════════╗
║                        🚀  PLANNED ENHANCEMENTS                            ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  📱  Mobile App — React Native                                              ║
║      Native Android and iOS app so residents get push notifications        ║
║      and can approve or decline visitors instantly without opening email.  ║
║                                                                             ║
║  📷  QR Code Visitor Check-In                                               ║
║      Pre-approved frequent visitors (maids, cooks) issued a QR code        ║
║      that the guard scans to log entry without any manual form filling.    ║
║                                                                             ║
║  🤖  Face Recognition Entry                                                 ║
║      Integrate facial recognition at the gate camera to auto-identify      ║
║      registered visitors and flag unknown faces to the guard instantly.    ║
║                                                                             ║
║  📲  WhatsApp & SMS Alerts via Twilio                                       ║
║      Add WhatsApp Business API or Twilio SMS as notification channels      ║
║      alongside email for residents who prefer messaging over email.        ║
║                                                                             ║
║  ☁️  Full Cloud Infrastructure                                              ║
║      Backend on AWS EC2 or Railway, database on AWS RDS, frontend on      ║
║      Vercel (already live) for a fully managed production environment.     ║
║                                                                             ║
║  📊  Analytics & Reporting Dashboard                                        ║
║      Visual charts showing visitor trends, peak entry hours, approval      ║
║      rates, and building-level security insights using Recharts.           ║
║                                                                             ║
║  🏙️  Multi-Building / Multi-Society Support                                 ║
║      Single admin account managing multiple building wings, towers,        ║
║      or entirely separate societies under one unified dashboard.           ║
║                                                                             ║
║  🌐  Multi-Language UI                                                      ║
║      Localize the interface in Gujarati, Hindi, Marathi, and other         ║
║      regional languages for broader accessibility across India.            ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## 🤝 Contributing

All contributions are warmly welcome — bug fixes, new features, UI improvements, docs, and tests!

```bash
# 1. Fork this repository on GitHub

# 2. Clone your fork locally
git clone https://github.com/happylimbasiya22/Smart-Visitor-Approval-Security-System.git
cd Smart-Visitor-Approval-Security-System

# 3. Create a new feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes, stage and commit
git add .
git commit -m "feat: describe what you added or fixed"

# 5. Push your branch to your fork on GitHub
git push origin feature/your-feature-name

# 6. Open a Pull Request on the original repository 🎉
```

**Contribution Ideas:**
- 📱 React Native mobile application (iOS & Android)
- 📷 QR code or facial recognition check-in integration
- 📊 Analytics dashboard with Recharts or Chart.js
- 🔔 WhatsApp / SMS alerts via Twilio API
- 🌐 Multilingual interface using i18next
- 🧪 Unit and integration tests (Jest + Supertest)
- 🐳 Docker & docker-compose configuration for easy setup
- 🔄 CI/CD pipeline with GitHub Actions

---

<div align="center">

```
╔══════════════════════════════════════════════════════════════════╗
║    Built to make every residential building safer, smarter,     ║
║    and more connected — one visitor registration at a time.     ║
╚══════════════════════════════════════════════════════════════════╝
```

**⭐ If this project helped you, please give it a star!**

[![GitHub stars](https://img.shields.io/github/stars/happylimbasiya22/Smart-Visitor-Approval-Security-System?style=social&label=⭐%20Star)](https://github.com/happylimbasiya22/Smart-Visitor-Approval-Security-System)
&nbsp;&nbsp;
[![GitHub forks](https://img.shields.io/github/forks/happylimbasiya22/Smart-Visitor-Approval-Security-System?style=social&label=🍴%20Fork)](https://github.com/happylimbasiya22/Smart-Visitor-Approval-Security-System/fork)

<br/>

*Made with ❤️ for safer, smarter communities*

*ISC License — free to use, modify, and distribute*

</div>
