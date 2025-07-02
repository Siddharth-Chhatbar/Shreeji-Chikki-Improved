import type { TasksItem } from "@/types/types";

export const mockTasksData: TasksItem[] = [
  {
    id: 1,
    name: "Prepare Q3 Sales Report",
    description:
      "Compile all sales data for the third quarter and create a summary report.",
    assigned_to: "Alice Johnson",
    assigned_by: "Bob Williams",
    due_date: "2025-07-15",
    status: "Pending",
  },
  {
    id: 2,
    name: "Update Website Contact Page",
    description:
      "Add new phone number and email address to the website contact page.",
    assigned_to: "Charlie Brown",
    assigned_by: "Alice Johnson",
    due_date: "2025-06-28",
    status: "Completed", // Changed to completed to show variety
  },
  {
    id: 3,
    name: "Review Project X Documentation",
    description:
      "Read through the entire Project X documentation and provide feedback.",
    assigned_to: "David Lee",
    assigned_by: "Charlie Brown",
    due_date: "2025-07-01",
    status: "Completed",
  },
  {
    id: 4,
    name: "Onboard New Employee - Sarah",
    description:
      "Set up accounts, workspace, and provide initial training for Sarah.",
    assigned_to: "Eve Davis",
    assigned_by: "Bob Williams",
    due_date: "2025-07-08",
    status: "Pending",
  },
  {
    id: 5,
    name: "Fix Database Connection Issue",
    description:
      "Investigate and resolve the intermittent database connection problem on staging.",
    assigned_to: "Frank White",
    assigned_by: "David Lee",
    due_date: "2025-06-20",
    status: "Completed",
  },
  {
    id: 6,
    name: "Schedule Team Sync Meeting",
    description:
      "Find a suitable time for the weekly team sync and send out invites.",
    assigned_to: "Grace Hall",
    assigned_by: "Eve Davis",
    due_date: "2025-07-05",
    status: "Pending",
  },
  {
    id: 7,
    name: "Develop New Feature: User Profile",
    description: "Implement the user profile view and edit functionality.",
    assigned_to: "Charlie Brown",
    assigned_by: "Frank White",
    due_date: "2025-07-20",
    status: "Pending",
  },
  {
    id: 8,
    name: "Prepare Presentation for Stakeholders",
    description:
      "Create a slide deck summarizing project progress and next steps.",
    assigned_to: "Alice Johnson",
    assigned_by: "Grace Hall",
    due_date: "2025-07-10",
    status: "Pending",
  },
  {
    id: 9,
    name: "Conduct Code Review for Login Module",
    description:
      "Review the latest code changes in the login module for quality and security.",
    assigned_to: "David Lee",
    assigned_by: "Frank White",
    due_date: "2025-07-04", // Today's date (July 3, 2025) + 1 day
    status: "Pending",
  },
  {
    id: 10,
    name: "Set Up CI/CD Pipeline for New Service",
    description:
      "Configure continuous integration and deployment for the new microservice.",
    assigned_to: "Eve Davis",
    assigned_by: "Charlie Brown",
    due_date: "2025-07-25",
    status: "Pending",
  },
  {
    id: 11,
    name: "Write Unit Tests for Payment Gateway",
    description:
      "Develop comprehensive unit tests for the payment processing logic.",
    assigned_to: "Frank White",
    assigned_by: "Alice Johnson",
    due_date: "2025-06-15",
    status: "Completed",
  },
  {
    id: 12,
    name: "Research Cloud Storage Solutions",
    description:
      "Investigate and compare different cloud storage providers for scalability and cost.",
    assigned_to: "Grace Hall",
    assigned_by: "David Lee",
    due_date: "2025-07-18",
    status: "Pending",
  },
  {
    id: 13,
    name: "Client Meeting - Project Alpha",
    description:
      "Meet with Project Alpha client to discuss requirements for Phase 2.",
    assigned_to: "Bob Williams",
    assigned_by: "Eve Davis",
    due_date: "2025-07-03", // Today
    status: "Pending",
  },
  {
    id: 14,
    name: "Optimize Database Queries",
    description:
      "Analyze slow queries and apply optimizations to improve performance.",
    assigned_to: "Charlie Brown",
    assigned_by: "Frank White",
    due_date: "2025-07-22",
    status: "Pending",
  },
  {
    id: 15,
    name: "Create Marketing Campaign Content",
    description:
      "Develop copy and visuals for the upcoming summer marketing campaign.",
    assigned_to: "Alice Johnson",
    assigned_by: "Grace Hall",
    due_date: "2025-07-09",
    status: "Pending",
  },
  {
    id: 16,
    name: "Deploy Hotfix to Production",
    description:
      "Deploy urgent bug fix to production environment outside of regular schedule.",
    assigned_to: "David Lee",
    assigned_by: "Bob Williams",
    due_date: "2025-06-25",
    status: "Completed",
  },
  {
    id: 17,
    name: "Prepare for Annual Security Audit",
    description:
      "Gather all necessary documentation and prepare systems for the security audit.",
    assigned_to: "Eve Davis",
    assigned_by: "Charlie Brown",
    due_date: "2025-08-01",
    status: "Pending",
  },
  {
    id: 18,
    name: "Refactor Old Module X Codebase",
    description:
      "Improve readability, maintainability, and performance of legacy module X.",
    assigned_to: "Frank White",
    assigned_by: "David Lee",
    due_date: "2025-08-10",
    status: "Pending",
  },
  {
    id: 19,
    name: "User Acceptance Testing (UAT) for Feature Y",
    description:
      "Conduct UAT with key stakeholders for the newly developed Feature Y.",
    assigned_to: "Grace Hall",
    assigne_by: "Eve Davis",
    due_date: "2025-07-07",
    status: "Pending",
  },
  {
    id: 20,
    name: "Document API Endpoints for V2",
    description:
      "Create comprehensive documentation for all new API endpoints in Version 2.",
    assigned_to: "Bob Williams",
    assigned_by: "Alice Johnson",
    due_date: "2025-07-12",
    status: "Pending",
  },
];
