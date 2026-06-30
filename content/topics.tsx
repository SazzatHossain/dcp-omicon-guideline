import type { MockupKey } from "@/components/mockups/AppMockups";

export type Bil = { en: string; bn: string };
export type BilList = { en: string[]; bn: string[] };

export type Section =
  | { kind: "para"; text: Bil }
  | { kind: "heading"; text: Bil }
  | { kind: "steps"; items: BilList }
  | { kind: "tips"; items: BilList }
  | { kind: "mistakes"; items: BilList }
  | { kind: "notes"; items: BilList }
  | { kind: "purpose"; text: Bil }
  | { kind: "when"; text: Bil }
  | { kind: "mockup"; key: MockupKey; caption?: Bil }
  | { kind: "callout"; tone: "info" | "warn" | "danger" | "ok"; title: Bil; text: Bil };

export type Topic = {
  slug: string;
  title: Bil;
  group: Bil;
  summary: Bil;
  audience?: Bil;
  sections: Section[];
};

/* helpers */
const p = (en: string, bn: string): Section => ({ kind: "para", text: { en, bn } });
const h = (en: string, bn: string): Section => ({ kind: "heading", text: { en, bn } });
const purpose = (en: string, bn: string): Section => ({ kind: "purpose", text: { en, bn } });
const when = (en: string, bn: string): Section => ({ kind: "when", text: { en, bn } });
const steps = (en: string[], bn: string[]): Section => ({ kind: "steps", items: { en, bn } });
const tips = (en: string[], bn: string[]): Section => ({ kind: "tips", items: { en, bn } });
const mistakes = (en: string[], bn: string[]): Section => ({ kind: "mistakes", items: { en, bn } });
const notes = (en: string[], bn: string[]): Section => ({ kind: "notes", items: { en, bn } });
const mock = (key: MockupKey, en?: string, bn?: string): Section => ({ kind: "mockup", key, caption: en && bn ? { en, bn } : undefined });
const callout = (tone: "info"|"warn"|"danger"|"ok", titleEn: string, titleBn: string, en: string, bn: string): Section => ({ kind: "callout", tone, title: { en: titleEn, bn: titleBn }, text: { en, bn } });

/* ---------------- TOPICS ---------------- */
export const topics: Topic[] = [
  {
    slug: "introduction",
    group: { en: "Getting Started", bn: "শুরু করা" },
    title: { en: "Introduction", bn: "ভূমিকা" },
    summary: { en: "Welcome to the DCP Ecosystem — a daily cash control system for Omicon Group.", bn: "ডিসিপি ইকোসিস্টেমে স্বাগতম — ওমিকন গ্রুপের দৈনিক নগদ নিয়ন্ত্রণ ব্যবস্থা।" },
    sections: [
      h("What is the DCP Ecosystem?", "ডিসিপি ইকোসিস্টেম কী?"),
      p(
        "The DCP (Daily Cash Position) Ecosystem is a web application used by Omicon Group to record, review and approve every Strategic Business Unit's cash position — every working day. It replaces paper registers, Excel sheets and email chains with a single shared system.",
        "ডিসিপি (ডেইলি ক্যাশ পজিশন) ইকোসিস্টেম একটি ওয়েব অ্যাপ্লিকেশন যা ওমিকন গ্রুপ প্রতিটি স্ট্র্যাটেজিক বিজনেস ইউনিটের দৈনিক নগদের অবস্থা রেকর্ড, পর্যালোচনা ও অনুমোদনের জন্য ব্যবহার করে। এটি কাগজের খাতা, এক্সেল শিট ও ইমেইলের পরিবর্তে একটি সাঝা সিস্টেম দেয়।",
      ),
      h("Who is this guide for?", "এই গাইডটি কাদের জন্য?"),
      p(
        "This documentation is written for non-technical users — Cash Custodians, Reporting Incharges, AGM (Finance & Accounts), CFOs and Super Admins. It assumes no prior software knowledge.",
        "এই ডকুমেন্টেশনটি অ-প্রযুক্তিগত ব্যবহারকারীদের জন্য লেখা হয়েছে — ক্যাশ কাস্টোডিয়ান, রিপোর্টিং ইনচার্জ, এজিএম (অর্থ ও হিসাব), সিএফও ও সুপার অ্যাডমিন। সফটওয়্যার সম্পর্কে পূর্ব জ্ঞান প্রয়োজন নেই।",
      ),
      h("How to use this site", "এই সাইট কীভাবে ব্যবহার করবেন"),
      tips(
        [
          "Use the sidebar to jump to any topic.",
          "Switch between English and বাংলা using the language toggle at the top.",
          "Use the dark / light theme toggle for comfortable reading.",
          "Use the search box to find topics by keyword.",
          "Use the Previous / Next buttons at the bottom of every page.",
        ],
        [
          "যেকোনো বিষয়ে যেতে সাইডবার ব্যবহার করুন।",
          "উপরে ভাষা টগল দিয়ে English ও বাংলার মধ্যে পরিবর্তন করুন।",
          "আরামে পড়ার জন্য ডার্ক / লাইট থিম টগল ব্যবহার করুন।",
          "কীওয়ার্ড দিয়ে বিষয় খুঁজতে সার্চ বক্স ব্যবহার করুন।",
          "প্রতিটি পৃষ্ঠার নিচে আগের / পরের বোতাম ব্যবহার করুন।",
        ],
      ),
    ],
  },

  {
    slug: "system-overview",
    group: { en: "Getting Started", bn: "শুরু করা" },
    title: { en: "System Overview", bn: "সিস্টেম ওভারভিউ" },
    summary: { en: "The big picture: roles, flow and modules.", bn: "মূল চিত্র: ভূমিকা, ফ্লো ও মডিউলসমূহ।" },
    sections: [
      purpose(
        "Understand the people, the daily flow and the modules of the DCP system before you start using it.",
        "ব্যবহার শুরুর আগে ডিসিপি সিস্টেমের মানুষ, দৈনিক প্রবাহ ও মডিউলগুলো বুঝে নিন।",
      ),
      h("Roles in the system", "সিস্টেমের ভূমিকাসমূহ"),
      steps(
        [
          "Cash Custodian — enters the daily cash position for one SBU.",
          "Reporting Incharge — reviews the submission and forwards or returns it.",
          "AGM (Finance & Accounts) — provides senior review and approval.",
          "CFO — final approver; can also reopen approved days when needed.",
          "Super Admin — manages users, SBUs, roles, approval flows and config.",
        ],
        [
          "ক্যাশ কাস্টোডিয়ান — একটি SBU-এর দৈনিক নগদ পজিশন এন্ট্রি করেন।",
          "রিপোর্টিং ইনচার্জ — জমা পর্যালোচনা করে এগিয়ে দেন বা ফেরত পাঠান।",
          "এজিএম (অর্থ ও হিসাব) — সিনিয়র পর্যালোচনা ও অনুমোদন দেন।",
          "সিএফও — চূড়ান্ত অনুমোদনকারী; প্রয়োজনে অনুমোদিত দিন পুনরায় খুলতেও পারেন।",
          "সুপার অ্যাডমিন — ব্যবহারকারী, SBU, রোল, অনুমোদন প্রবাহ ও কনফিগ পরিচালনা করেন।",
        ],
      ),
      mock("flow", "The standard daily approval flow.", "স্ট্যান্ডার্ড দৈনিক অনুমোদন প্রবাহ।"),
      h("Main modules", "প্রধান মডিউলগুলো"),
      steps(
        [
          "Group Console — single-screen overview of every SBU today.",
          "Daily Cash Position — the entry form for custodians.",
          "Approvals — review, return, escalate or approve a submission.",
          "A4 Board Report — printable summary for management.",
          "Administration — users, SBUs, roles, approval flow, config.",
        ],
        [
          "গ্রুপ কনসোল — আজকের প্রতিটি SBU-এর এক স্ক্রিনে সারাংশ।",
          "ডেইলি ক্যাশ পজিশন — কাস্টোডিয়ানদের জন্য এন্ট্রি ফর্ম।",
          "অনুমোদন — জমা পর্যালোচনা, ফেরত, এসকেলেট বা অনুমোদন।",
          "A4 বোর্ড রিপোর্ট — ম্যানেজমেন্টের জন্য প্রিন্টযোগ্য সারসংক্ষেপ।",
          "অ্যাডমিনিস্ট্রেশন — ব্যবহারকারী, SBU, রোল, অনুমোদন প্রবাহ, কনফিগ।",
        ],
      ),
      callout(
        "info",
        "Permissions matter",
        "অনুমতি গুরুত্বপূর্ণ",
        "You will only see the menu items your role is allowed to use. If a screen is missing, it is not a bug — your role does not have that permission.",
        "আপনার ভূমিকা যেগুলো ব্যবহার করতে পারে কেবল সেই মেনুই দেখতে পাবেন। কোনো স্ক্রিন না দেখলে এটি বাগ নয় — আপনার ভূমিকার ওই অনুমতি নেই।",
      ),
    ],
  },

  {
    slug: "login",
    group: { en: "Daily Use", bn: "দৈনিক ব্যবহার" },
    title: { en: "Logging In", bn: "লগইন করা" },
    summary: { en: "How to sign in safely on your first day and every day after.", bn: "প্রথম দিনে এবং পরে নিরাপদে কীভাবে সাইন ইন করবেন।" },
    sections: [
      purpose("Sign in to the DCP application using the email and password issued by IT.", "আইটি বিভাগ থেকে দেওয়া ইমেইল ও পাসওয়ার্ড দিয়ে ডিসিপি অ্যাপ্লিকেশনে সাইন ইন করুন।"),
      when("Every working day, before recording or reviewing the cash position.", "প্রতিটি কর্মদিবসে, নগদ অবস্থা রেকর্ড বা পর্যালোচনার আগে।"),
      mock("login"),
      h("Step-by-step", "ধাপে ধাপে"),
      steps(
        [
          "Open your browser and go to the DCP web address provided by IT.",
          "Type your work email in the Email field.",
          "Type your password in the Password field.",
          "Click Sign in.",
          "If this is your first login, the system will force you to change your password — choose a strong one.",
        ],
        [
          "ব্রাউজার খুলে আইটি বিভাগের দেওয়া ডিসিপি ঠিকানায় যান।",
          "Email ঘরে আপনার অফিসিয়াল ইমেইল লিখুন।",
          "Password ঘরে আপনার পাসওয়ার্ড লিখুন।",
          "Sign in-এ ক্লিক করুন।",
          "এটি প্রথম লগইন হলে সিস্টেম পাসওয়ার্ড পরিবর্তন করতে বাধ্য করবে — শক্তিশালী একটি বেছে নিন।",
        ],
      ),
      tips(
        ["Bookmark the URL.", "Always log out when leaving your desk.", "Never share your password — every action is logged against your name."],
        ["URL টি বুকমার্ক করে রাখুন।", "ডেস্ক ছাড়ার সময় সর্বদা লগআউট করুন।", "পাসওয়ার্ড কাউকে দেবেন না — প্রতিটি কাজ আপনার নামে লগ হয়।"],
      ),
      mistakes(
        ["Trying the same password 5+ times — your account will be locked.", "Sharing one login between multiple custodians."],
        ["একই পাসওয়ার্ড ৫+ বার চেষ্টা — অ্যাকাউন্ট লক হয়ে যাবে।", "একাধিক কাস্টোডিয়ানের মধ্যে একই লগইন শেয়ার।"],
      ),
    ],
  },

  {
    slug: "dashboard",
    group: { en: "Daily Use", bn: "দৈনিক ব্যবহার" },
    title: { en: "Dashboard (Group Console)", bn: "ড্যাশবোর্ড (গ্রুপ কনসোল)" },
    summary: { en: "Read every SBU's cash status at a glance.", bn: "এক নজরে প্রতিটি SBU-এর নগদ অবস্থা দেখুন।" },
    sections: [
      purpose("Give CFO, AGM and Reporting Incharge a single screen to monitor the entire group's cash for the day.", "সিএফও, এজিএম ও রিপোর্টিং ইনচার্জকে পুরো গ্রুপের আজকের নগদ মনিটর করার জন্য এক স্ক্রিন দেয়।"),
      mock("console"),
      h("Understanding the cards", "কার্ডগুলো বোঝা"),
      steps(
        [
          "Group Total Cash on Hand — sum of every SBU's closing balance today.",
          "SBUs Balanced — count of SBUs whose physical count matches the ledger.",
          "Variances — SBUs where counted cash ≠ closing balance (must be fixed).",
          "Pending Review — submitted SBUs waiting for someone to act.",
        ],
        [
          "Group Total Cash on Hand — প্রতিটি SBU-এর আজকের ক্লোজিং ব্যালেন্সের যোগফল।",
          "SBUs Balanced — যেসব SBU-এর ফিজিক্যাল কাউন্ট লেজারের সাথে মেলে।",
          "Variances — যেখানে গণনা করা টাকা ≠ ক্লোজিং ব্যালেন্স (সমাধান করতে হবে)।",
          "Pending Review — জমা দেওয়া SBU যারা কারো অ্যাকশনের অপেক্ষায়।",
        ],
      ),
      tips(
        ["Rows highlighted red have a variance — open them first.", "A missing row (No entry) means that SBU's custodian has not submitted yet."],
        ["লাল হাইলাইট করা সারিতে গরমিল আছে — আগে সেগুলো দেখুন।", "কোনো সারি না থাকলে (No entry) — সেই SBU-এর কাস্টোডিয়ান এখনো জমা দেননি।"],
      ),
    ],
  },

  {
    slug: "user-profile",
    group: { en: "Daily Use", bn: "দৈনিক ব্যবহার" },
    title: { en: "User Profile", bn: "ব্যবহারকারী প্রোফাইল" },
    summary: { en: "Update your personal details.", bn: "ব্যক্তিগত তথ্য হালনাগাদ করুন।" },
    sections: [
      purpose("Keep your name and contact details accurate so audit trails and notifications reach the right person.", "অডিট ট্রেইল ও নোটিফিকেশন সঠিক ব্যক্তির কাছে পৌঁছাতে আপনার নাম ও যোগাযোগ তথ্য সঠিক রাখুন।"),
      mock("profile"),
      steps(
        ["Click My Profile in the sidebar.", "Edit your name or contact field.", "Click Save changes."],
        ["সাইডবারে My Profile-এ ক্লিক করুন।", "নাম বা যোগাযোগ ক্ষেত্র সম্পাদনা করুন।", "Save changes-এ ক্লিক করুন।"],
      ),
      notes(
        ["Your email and role can only be changed by a Super Admin.", "Your assigned SBU is set by the Super Admin."],
        ["আপনার ইমেইল ও রোল কেবল সুপার অ্যাডমিন পরিবর্তন করতে পারেন।", "আপনার নির্ধারিত SBU সুপার অ্যাডমিন সেট করেন।"],
      ),
    ],
  },

  {
    slug: "password-change",
    group: { en: "Daily Use", bn: "দৈনিক ব্যবহার" },
    title: { en: "Changing Your Password", bn: "পাসওয়ার্ড পরিবর্তন" },
    summary: { en: "Change your password from the Profile screen.", bn: "প্রোফাইল স্ক্রিন থেকে পাসওয়ার্ড পরিবর্তন করুন।" },
    sections: [
      purpose("Keep your account secure by rotating your password regularly.", "নিয়মিত পাসওয়ার্ড পরিবর্তন করে আপনার অ্যাকাউন্ট নিরাপদ রাখুন।"),
      mock("profile"),
      steps(
        ["Open My Profile.", "Scroll to the Change Password panel.", "Enter your current password.", "Enter a new password (at least 8 characters with letters and numbers).", "Confirm the new password.", "Click Update password.", "You will stay signed in; use the new password next time."],
        ["My Profile খুলুন।", "Change Password প্যানেলে স্ক্রল করুন।", "বর্তমান পাসওয়ার্ড লিখুন।", "নতুন পাসওয়ার্ড লিখুন (অন্তত ৮ অক্ষর, অক্ষর ও সংখ্যা সহ)।", "নতুন পাসওয়ার্ড নিশ্চিত করুন।", "Update password-এ ক্লিক করুন।", "সাইন ইন থাকবে; পরের বার নতুন পাসওয়ার্ড ব্যবহার করুন।"],
      ),
      mistakes(
        ["Using birthdays or 12345678.", "Typing the new password differently in the two fields."],
        ["জন্মদিন বা 12345678 ব্যবহার।", "দুই ঘরে নতুন পাসওয়ার্ড ভিন্নভাবে টাইপ।"],
      ),
    ],
  },

  {
    slug: "business-unit",
    group: { en: "Administration", bn: "প্রশাসন" },
    title: { en: "Business Unit Management", bn: "বিজনেস ইউনিট ব্যবস্থাপনা" },
    summary: { en: "Create, edit and activate Strategic Business Units (SBUs).", bn: "স্ট্র্যাটেজিক বিজনেস ইউনিট (SBU) তৈরি, সম্পাদনা ও সক্রিয় করুন।" },
    audience: { en: "Super Admin only", bn: "শুধুমাত্র সুপার অ্যাডমিন" },
    sections: [
      purpose("Every Daily Cash Position belongs to an SBU. Without active SBUs, custodians cannot submit anything.", "প্রতিটি ডেইলি ক্যাশ পজিশন একটি SBU-এর। সক্রিয় SBU ছাড়া কাস্টোডিয়ান কিছু জমা দিতে পারবেন না।"),
      mock("sbus"),
      h("Adding a new SBU", "নতুন SBU যোগ করা"),
      steps(
        ["Open Business Units from the sidebar.", "Click + New SBU.", "Enter a short code (for example SBU-05).", "Enter the full display name.", "Pick the category (Manufacturing / Distribution / Sales).", "Tick Active.", "Click Save."],
        ["সাইডবার থেকে Business Units খুলুন।", "+ New SBU-এ ক্লিক করুন।", "একটি সংক্ষিপ্ত কোড দিন (যেমন SBU-05)।", "পূর্ণ নাম লিখুন।", "ক্যাটাগরি বাছুন (Manufacturing / Distribution / Sales)।", "Active টিক দিন।", "Save-এ ক্লিক করুন।"],
      ),
      tips(
        ["Use a consistent prefix (SBU-) so users can sort easily.", "Deactivate, do not delete, an SBU that has past data."],
        ["সবসময় একই উপসর্গ (SBU-) ব্যবহার করুন।", "পুরনো ডেটা থাকলে SBU মুছবেন না — নিষ্ক্রিয় করুন।"],
      ),
      callout("warn", "Deleting affects history", "মুছে ফেলা ইতিহাস প্রভাবিত করে", "Deleting an SBU hides every past submission from reports. Prefer Inactive.", "SBU মুছে ফেললে অতীতের সকল জমা রিপোর্ট থেকে লুকিয়ে যায়। Inactive করাই ভালো।"),
    ],
  },

  {
    slug: "daily-cash-position",
    group: { en: "Core Workflow", bn: "মূল কার্যপ্রবাহ" },
    title: { en: "Daily Cash Position", bn: "ডেইলি ক্যাশ পজিশন" },
    summary: { en: "Submit your SBU's cash position for the day.", bn: "আজকের আপনার SBU-এর নগদ পজিশন জমা দিন।" },
    audience: { en: "Cash Custodian", bn: "ক্যাশ কাস্টোডিয়ান" },
    sections: [
      purpose("Record exactly how much cash your SBU received, paid out, and physically holds today.", "আজ আপনার SBU কত নগদ পেয়েছে, কত পরিশোধ করেছে, ও বাস্তবে কত আছে তা সঠিকভাবে লিখুন।"),
      when("Every working day, after closing the day's cash operations.", "প্রতিটি কর্মদিবসে, দিনের নগদ লেনদেন শেষ হওয়ার পর।"),
      mock("dcp"),
      h("Step-by-step", "ধাপে ধাপে"),
      steps(
        [
          "Click Daily Cash Position in the sidebar.",
          "Select your Strategic Business Unit. The Opening Balance auto-fills from yesterday's approved closing.",
          "Enter today's Receipts (cash IN).",
          "Enter today's Payments (cash OUT). The Closing Balance is calculated automatically.",
          "Open the Physical Cash Count table and enter the count for each note denomination (৳1000, ৳500, ৳100, ৳50, etc.). The Counted Total is calculated automatically.",
          "Enter the Book Balance from your General Ledger.",
          "Verify the green ✓ Balanced indicator appears.",
          "Click Submit for approval.",
        ],
        [
          "সাইডবারে Daily Cash Position-এ ক্লিক করুন।",
          "আপনার SBU বাছুন। গতকালের অনুমোদিত ক্লোজিং থেকে Opening Balance স্বয়ংক্রিয়ভাবে আসবে।",
          "আজকের Receipts (নগদ আগমন) লিখুন।",
          "আজকের Payments (নগদ বহির্গমন) লিখুন। Closing Balance স্বয়ংক্রিয় হিসাব হবে।",
          "Physical Cash Count টেবিল খুলে প্রতিটি নোটের (৳১০০০, ৳৫০০, ৳১০০, ৳৫০ ইত্যাদি) সংখ্যা লিখুন। মোট গণনা স্বয়ংক্রিয় হিসাব হবে।",
          "আপনার জেনারেল লেজার থেকে Book Balance লিখুন।",
          "সবুজ ✓ Balanced ইনডিকেটর দেখা যাচ্ছে নিশ্চিত করুন।",
          "Submit for approval-এ ক্লিক করুন।",
        ],
      ),
      callout(
        "danger",
        "Counted must equal Closing",
        "গণনা = ক্লোজিং হতে হবে",
        "If the Physical Count does not match the Closing Balance, the system shows a variance and your submission will be returned. Recount before submitting.",
        "ফিজিক্যাল কাউন্ট ক্লোজিং ব্যালেন্সের সাথে না মিললে সিস্টেম গরমিল দেখাবে এবং জমা ফেরত আসবে। জমার আগে আবার গণনা করুন।",
      ),
      tips(
        ["Count cash twice — once by you, once by a witness.", "Keep deposit slips ready in case of audit.", "Submit before the daily cutoff time set in Config."],
        ["টাকা দু'বার গণনা করুন — একবার আপনি, একবার সাক্ষী।", "অডিটের জন্য জমা স্লিপ প্রস্তুত রাখুন।", "Config-এ সেট করা দৈনিক কাট-অফ সময়ের আগে জমা দিন।"],
      ),
      mistakes(
        ["Forgetting to enter Book Balance.", "Selecting the wrong SBU.", "Entering yesterday's data instead of today's."],
        ["Book Balance লিখতে ভুলে যাওয়া।", "ভুল SBU বাছাই।", "আজকের পরিবর্তে গতকালের ডেটা লেখা।"],
      ),
    ],
  },

  {
    slug: "book-balance",
    group: { en: "Core Workflow", bn: "মূল কার্যপ্রবাহ" },
    title: { en: "Book Balance", bn: "বুক ব্যালেন্স" },
    summary: { en: "The General Ledger figure for cash on hand.", bn: "ক্যাশ অন হ্যান্ডের জেনারেল লেজার সংখ্যা।" },
    sections: [
      purpose("Book Balance is the cash figure as per your accounting books (General Ledger). It must match the Closing Balance calculated from receipts and payments.", "বুক ব্যালেন্স হলো আপনার হিসাববহির (জেনারেল লেজার) অনুসারে নগদ। এটি প্রাপ্তি ও পরিশোধ থেকে হিসাব করা ক্লোজিং ব্যালেন্সের সমান হতে হবে।"),
      h("Why it matters", "কেন গুরুত্বপূর্ণ"),
      p(
        "Reviewers compare three numbers: Closing Balance (calculated), Counted Total (physical), and Book Balance (GL). All three must match. A mismatch means either an accounting entry was missed or cash is missing.",
        "পর্যালোচকরা তিনটি সংখ্যা মেলান: Closing Balance (হিসাব), Counted Total (ফিজিক্যাল), ও Book Balance (GL)। তিনটিই সমান হতে হবে। না মিললে হয় একটি অ্যাকাউন্টিং এন্ট্রি বাদ পড়েছে নয়তো টাকা গায়েব।",
      ),
      mock("approval", "Reviewer's view comparing the three numbers.", "তিনটি সংখ্যা তুলনা করা পর্যালোচকের দৃশ্য।"),
      steps(
        ["Pull the cash GL balance for today from your accounting system.", "Type the exact figure into the Book Balance field.", "If a mismatch appears, fix the GL first — do not adjust the entry in DCP."],
        ["আজকের cash GL ব্যালেন্স অ্যাকাউন্টিং সিস্টেম থেকে নিন।", "সঠিক সংখ্যাটি Book Balance ঘরে লিখুন।", "মিল না হলে আগে GL ঠিক করুন — DCP-তে এন্ট্রি ম্যানিপুলেট করবেন না।"],
      ),
    ],
  },

  {
    slug: "approval-process",
    group: { en: "Core Workflow", bn: "মূল কার্যপ্রবাহ" },
    title: { en: "Approval Process", bn: "অনুমোদন প্রক্রিয়া" },
    summary: { en: "How a submission travels from Custodian to CFO.", bn: "জমা কীভাবে কাস্টোডিয়ান থেকে সিএফও পর্যন্ত যায়।" },
    sections: [
      purpose("Move a submitted DCP through every required approver until it is final-approved or returned.", "জমা দেওয়া DCP-কে প্রতিটি প্রয়োজনীয় অনুমোদকের মাধ্যমে চূড়ান্ত অনুমোদন বা ফেরত পর্যন্ত নিয়ে যাওয়া।"),
      mock("flow"),
      mock("approval"),
      h("Steps for each approver", "প্রতিটি অনুমোদকের জন্য ধাপ"),
      steps(
        [
          "Open Approvals from the sidebar — your pending items appear at the top.",
          "Click the SBU and date you want to review.",
          "Read the green / red reconciliation strip first.",
          "Compare Closing, Counted and Book Balance.",
          "Choose an action — Approve, Return to custodian, or Escalate.",
          "Add a short note explaining your decision.",
          "Click Confirm.",
        ],
        [
          "সাইডবার থেকে Approvals খুলুন — আপনার অপেক্ষমাণ আইটেম উপরে থাকবে।",
          "যে SBU ও তারিখ পর্যালোচনা করতে চান তাতে ক্লিক করুন।",
          "প্রথমে সবুজ / লাল রিকনসিলিয়েশন স্ট্রিপ পড়ুন।",
          "Closing, Counted ও Book Balance তুলনা করুন।",
          "অ্যাকশন বাছুন — Approve, Return to custodian বা Escalate।",
          "সিদ্ধান্তের একটি সংক্ষিপ্ত নোট লিখুন।",
          "Confirm-এ ক্লিক করুন।",
        ],
      ),
      h("What each action means", "প্রতিটি অ্যাকশনের অর্থ"),
      steps(
        ["Approve — sends to the next approver, or finalises if you are the last one.", "Return — sends back to the custodian for correction.", "Escalate — pushes to a higher role (e.g. AGM → CFO) when something is unusual."],
        ["Approve — পরবর্তী অনুমোদকের কাছে যায়, অথবা আপনি শেষ হলে চূড়ান্ত হয়।", "Return — সংশোধনের জন্য কাস্টোডিয়ানের কাছে ফেরত।", "Escalate — অস্বাভাবিক হলে উচ্চতর রোলে পাঠানো (যেমন AGM → CFO)।"],
      ),
      callout("warn", "Never approve a variance", "গরমিল কখনো অনুমোদন করবেন না", "If counted ≠ closing or counted ≠ book balance, always Return. Approving hides problems and creates audit issues.", "গণনা ≠ ক্লোজিং বা গণনা ≠ বুক ব্যালেন্স হলে সবসময় Return করুন। অনুমোদন সমস্যা ঢেকে দেয় এবং অডিট সমস্যা তৈরি করে।"),
    ],
  },

  {
    slug: "reopen-process",
    group: { en: "Core Workflow", bn: "মূল কার্যপ্রবাহ" },
    title: { en: "Reopen Process", bn: "পুনরায় খোলা প্রক্রিয়া" },
    summary: { en: "Bring back an already-approved day for correction.", bn: "অনুমোদিত একটি দিন সংশোধনের জন্য পুনরায় খোলা।" },
    audience: { en: "CFO / Super Admin", bn: "সিএফও / সুপার অ্যাডমিন" },
    sections: [
      purpose("When a mistake is discovered after final approval, the CFO can reopen the day so the custodian can correct it.", "চূড়ান্ত অনুমোদনের পরে ভুল ধরা পড়লে সিএফও সংশোধনের জন্য দিনটি পুনরায় খুলতে পারেন।"),
      when("Only after an entry is approved and a problem is later discovered, within the reopen window set in Config.", "শুধুমাত্র অনুমোদনের পর সমস্যা ধরা পড়লে, Config-এ সেট করা পুনরায় খোলার সময়সীমার মধ্যে।"),
      steps(
        ["Open Approvals and find the approved entry.", "Click Reopen.", "Type a clear reason — this is permanently recorded.", "Confirm. The entry returns to the custodian to edit and re-submit."],
        ["Approvals খুলে অনুমোদিত এন্ট্রি খুঁজুন।", "Reopen-এ ক্লিক করুন।", "একটি স্পষ্ট কারণ লিখুন — এটি স্থায়ীভাবে রেকর্ড হয়।", "Confirm করুন। এন্ট্রি সম্পাদনা ও পুনরায় জমার জন্য কাস্টোডিয়ানের কাছে যাবে।"],
      ),
      callout("danger", "Reopen is audited", "Reopen অডিট হয়", "Every reopen is logged with the user, time and reason. Use sparingly.", "প্রতিটি reopen ব্যবহারকারী, সময় ও কারণসহ লগ হয়। সীমিত ব্যবহার করুন।"),
    ],
  },

  {
    slug: "reports",
    group: { en: "Reporting", bn: "রিপোর্টিং" },
    title: { en: "Reports", bn: "রিপোর্ট" },
    summary: { en: "Generate and print the A4 Board Report.", bn: "A4 বোর্ড রিপোর্ট তৈরি ও প্রিন্ট করুন।" },
    sections: [
      purpose("Produce a clean, A4-sized printable summary of cash position for management and the board.", "ম্যানেজমেন্ট ও বোর্ডের জন্য নগদ অবস্থার পরিষ্কার, A4-আকারের প্রিন্টযোগ্য সারসংক্ষেপ তৈরি।"),
      mock("report"),
      steps(
        ["Click A4 Board Report in the sidebar.", "Pick the From and To dates.", "Click Apply to preview.", "Click Print A4 to open the print dialog.", "Choose your printer and confirm."],
        ["সাইডবারে A4 Board Report-এ ক্লিক করুন।", "From ও To তারিখ বাছুন।", "প্রিভিউ দেখতে Apply-এ ক্লিক করুন।", "Print A4-এ ক্লিক করে প্রিন্ট ডায়ালগ খুলুন।", "প্রিন্টার বাছাই করে নিশ্চিত করুন।"],
      ),
      tips(
        ["Use A4 paper and 100% scale.", "Save as PDF if you need to email the report.", "Run the report for a single day, week or month."],
        ["A4 কাগজ ও ১০০% স্কেল ব্যবহার করুন।", "ইমেইলের জন্য PDF হিসেবে সংরক্ষণ করুন।", "একদিন, সপ্তাহ বা মাসের রিপোর্ট চালাতে পারেন।"],
      ),
    ],
  },

  {
    slug: "group-console",
    group: { en: "Reporting", bn: "রিপোর্টিং" },
    title: { en: "Group Console", bn: "গ্রুপ কনসোল" },
    summary: { en: "Real-time matrix of every SBU.", bn: "প্রতিটি SBU-এর রিয়েল-টাইম ম্যাট্রিক্স।" },
    sections: [
      purpose("Give senior management a live, no-clicks-needed view of cash across the group.", "সিনিয়র ম্যানেজমেন্টকে গ্রুপজুড়ে নগদের লাইভ, কোনো ক্লিক ছাড়াই দৃশ্য দেখায়।"),
      mock("console"),
      h("Reading the matrix", "ম্যাট্রিক্স পড়া"),
      steps(
        [
          "Each row is one SBU.",
          "Columns walk you through Opening → Receipts → Payments → Closing → Counted → Book Balance.",
          "The State column shows where the day's submission is in the approval flow.",
          "Red row = variance or mismatch. Yellow = pending. Green = approved.",
        ],
        [
          "প্রতিটি সারি একটি SBU।",
          "কলামগুলো Opening → Receipts → Payments → Closing → Counted → Book Balance ক্রমে দেখায়।",
          "State কলাম দেখায় ওই দিনের জমা কোথায় আছে।",
          "লাল = গরমিল। হলুদ = অপেক্ষমাণ। সবুজ = অনুমোদিত।",
        ],
      ),
    ],
  },

  {
    slug: "users",
    group: { en: "Administration", bn: "প্রশাসন" },
    title: { en: "User Management", bn: "ব্যবহারকারী ব্যবস্থাপনা" },
    summary: { en: "Create users, assign roles and SBUs.", bn: "ব্যবহারকারী তৈরি, রোল ও SBU বরাদ্দ।" },
    audience: { en: "Super Admin only", bn: "শুধুমাত্র সুপার অ্যাডমিন" },
    sections: [
      purpose("Maintain the list of people who can sign in to DCP and what they can do.", "ডিসিপিতে যারা সাইন ইন করতে পারে ও কী করতে পারে তার তালিকা রক্ষণাবেক্ষণ।"),
      mock("users"),
      h("Creating a new user", "নতুন ব্যবহারকারী তৈরি"),
      steps(
        ["Open User Management.", "Click + New user.", "Enter Name and Email.", "Select Role (Custodian, Reporting Incharge, AGM, CFO, Super Admin).", "If the role is SBU-level, pick the SBU.", "Generate a temporary password and share with the user.", "Click Save."],
        ["User Management খুলুন।", "+ New user-এ ক্লিক করুন।", "Name ও Email লিখুন।", "Role বাছুন (Custodian, Reporting Incharge, AGM, CFO, Super Admin)।", "Role SBU-ভিত্তিক হলে SBU বাছুন।", "অস্থায়ী পাসওয়ার্ড তৈরি করে ব্যবহারকারীকে দিন।", "Save-এ ক্লিক করুন।"],
      ),
      tips(
        ["Force password change is automatic on first login.", "Use Inactive instead of deleting users — keeps history clean."],
        ["প্রথম লগইনে পাসওয়ার্ড পরিবর্তন স্বয়ংক্রিয়।", "ব্যবহারকারী মুছবেন না — Inactive করুন।"],
      ),
    ],
  },

  {
    slug: "settings",
    group: { en: "Administration", bn: "প্রশাসন" },
    title: { en: "Settings & Config", bn: "সেটিংস ও কনফিগ" },
    summary: { en: "Cut-off times, tolerances and notifications.", bn: "কাট-অফ সময়, সহনশীলতা ও নোটিফিকেশন।" },
    audience: { en: "Super Admin", bn: "সুপার অ্যাডমিন" },
    sections: [
      purpose("Adjust system-wide rules without touching any code.", "কোনো কোড স্পর্শ না করেই সিস্টেম-ব্যাপী নিয়ম পরিবর্তন।"),
      mock("config"),
      steps(
        ["Open Config from the sidebar.", "Change the value next to the setting.", "Click Save. The new value applies immediately to all users."],
        ["সাইডবার থেকে Config খুলুন।", "সেটিংসের পাশে মান পরিবর্তন করুন।", "Save-এ ক্লিক করুন। নতুন মান অবিলম্বে সবার জন্য কার্যকর।"],
      ),
      notes(
        ["Changing Lock cutoff time mid-day can block in-progress submissions.", "Variance tolerance > 0 is risky — keep it 0 for strict control."],
        ["মধ্যদিনে Lock cutoff পরিবর্তন চলমান জমা ব্লক করতে পারে।", "Variance tolerance > 0 ঝুঁকিপূর্ণ — কঠোর নিয়ন্ত্রণে ০ রাখুন।"],
      ),
    ],
  },

  {
    slug: "faq",
    group: { en: "Help", bn: "সাহায্য" },
    title: { en: "Frequently Asked Questions", bn: "প্রায়শই জিজ্ঞাসিত প্রশ্ন" },
    summary: { en: "Short answers to common questions.", bn: "সাধারণ প্রশ্নের সংক্ষিপ্ত উত্তর।" },
    sections: [
      h("I forgot my password — what do I do?", "পাসওয়ার্ড ভুলে গেছি — কী করব?"),
      p("Contact your Super Admin. They will reset it and give you a temporary one. You will be asked to change it on first login.", "আপনার সুপার অ্যাডমিনের সাথে যোগাযোগ করুন। তিনি রিসেট করবেন এবং অস্থায়ী পাসওয়ার্ড দেবেন। প্রথম লগইনে পরিবর্তন করতে বলা হবে।"),
      h("My Opening Balance is wrong — can I edit it?", "আমার Opening Balance ভুল — সম্পাদনা করতে পারি?"),
      p("No. Opening Balance is locked because it comes from yesterday's approved closing. If yesterday is wrong, ask the CFO to reopen yesterday.", "না। Opening Balance লক করা কারণ এটি গতকালের অনুমোদিত ক্লোজিং থেকে আসে। গতকাল ভুল হলে সিএফওকে গতকাল reopen করতে বলুন।"),
      h("Why can't I submit?", "কেন জমা দিতে পারছি না?"),
      p("Most often: physical count does not match closing, Book Balance is empty, or you are past the daily cut-off time.", "সাধারণত: ফিজিক্যাল কাউন্ট ক্লোজিংয়ের সাথে মেলে না, Book Balance খালি, অথবা আপনি দৈনিক কাট-অফ সময় পার করেছেন।"),
      h("Can two people submit for the same SBU?", "একই SBU-এর জন্য দু'জন জমা দিতে পারেন?"),
      p("Only one submission per SBU per day is allowed. The second person will see an error.", "প্রতি SBU-এর জন্য দিনে একটি মাত্র জমা অনুমোদিত। দ্বিতীয় ব্যক্তি ত্রুটি দেখবেন।"),
      h("Where can I see history?", "ইতিহাস কোথায় দেখব?"),
      p("Use the A4 Board Report with a date range covering past dates.", "অতীত তারিখসহ A4 Board Report ব্যবহার করুন।"),
    ],
  },

  {
    slug: "troubleshooting",
    group: { en: "Help", bn: "সাহায্য" },
    title: { en: "Troubleshooting", bn: "সমস্যা সমাধান" },
    summary: { en: "Common issues and how to fix them.", bn: "সাধারণ সমস্যা ও সমাধান।" },
    sections: [
      h("\"Variance — must be returned\" warning", "\"Variance — must be returned\" সতর্কতা"),
      p("Cause: counted total differs from closing balance. Fix: recount cash carefully, fix any data-entry error in Receipts or Payments.", "কারণ: গণনা ক্লোজিং ব্যালেন্স থেকে আলাদা। সমাধান: টাকা সাবধানে আবার গণনা করুন, Receipts বা Payments-এ ভুল থাকলে ঠিক করুন।"),
      h("\"Book Balance mismatch\" warning", "\"Book Balance mismatch\" সতর্কতা"),
      p("Cause: GL Book Balance ≠ Closing Balance. Fix: confirm GL is posted up to today; correct GL before resubmitting.", "কারণ: GL Book Balance ≠ Closing Balance। সমাধান: GL আজ পর্যন্ত পোস্ট করা নিশ্চিত করুন; পুনঃজমার আগে GL ঠিক করুন।"),
      h("Page won't load", "পৃষ্ঠা লোড হচ্ছে না"),
      p("Refresh the browser (Ctrl + Shift + R). If still failing, check your internet and contact IT.", "ব্রাউজার রিফ্রেশ করুন (Ctrl + Shift + R)। তবুও না হলে ইন্টারনেট দেখুন ও আইটির সাথে যোগাযোগ করুন।"),
      h("Logged out unexpectedly", "অপ্রত্যাশিতভাবে লগআউট"),
      p("For security, you are logged out after 30 minutes of inactivity. Sign in again and continue.", "নিরাপত্তার জন্য ৩০ মিনিট নিষ্ক্রিয়তার পর লগআউট হয়। আবার সাইন ইন করে চালিয়ে যান।"),
    ],
  },

  {
    slug: "best-practices",
    group: { en: "Help", bn: "সাহায্য" },
    title: { en: "Best Practices", bn: "সেরা পদ্ধতি" },
    summary: { en: "Habits that keep DCP healthy.", bn: "ডিসিপি সুস্থ রাখার অভ্যাস।" },
    sections: [
      steps(
        [
          "Submit at the same time every day — preferably right after cash close.",
          "Always have a witness for cash count.",
          "Reconcile GL daily; don't wait for month-end.",
          "Approvers should review the same day, not next morning.",
          "Never share passwords; rotate every 90 days.",
          "Use Return + comment instead of fixing entries yourself.",
          "Run the A4 report weekly and circulate to senior management.",
        ],
        [
          "প্রতিদিন একই সময়ে জমা দিন — সম্ভব হলে নগদ ক্লোজের পর পরই।",
          "নগদ গণনার সময় সর্বদা সাক্ষী রাখুন।",
          "GL প্রতিদিন রিকনসাইল করুন; মাসের শেষের অপেক্ষা করবেন না।",
          "অনুমোদকরা একই দিনে পর্যালোচনা করুন, পরের সকাল নয়।",
          "পাসওয়ার্ড শেয়ার করবেন না; প্রতি ৯০ দিনে পরিবর্তন করুন।",
          "নিজে ঠিক না করে Return + মন্তব্য ব্যবহার করুন।",
          "A4 রিপোর্ট সাপ্তাহিক চালান ও সিনিয়র ম্যানেজমেন্টকে পাঠান।",
        ],
      ),
    ],
  },
];

export const topicsBySlug = new Map(topics.map((t) => [t.slug, t]));

export const grouped: { group: Bil; items: Topic[] }[] = (() => {
  const map = new Map<string, { group: Bil; items: Topic[] }>();
  for (const t of topics) {
    const k = t.group.en;
    if (!map.has(k)) map.set(k, { group: t.group, items: [] });
    map.get(k)!.items.push(t);
  }
  return [...map.values()];
})();