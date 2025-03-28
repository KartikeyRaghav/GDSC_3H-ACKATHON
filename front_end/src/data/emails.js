export const emails = [
  {
    id: 1,
    from: "Alice Johnson",
    subject: "Weekly Team Update",
    preview: "Here's a summary of what we accomplished this week...",
    body: `Hi team,
  
  I wanted to share a quick update on our progress this week. We've made significant strides in several key areas:
  
  1. Completed the user authentication system
  2. Launched the new dashboard design
  3. Fixed 12 critical bugs
  4. Improved overall performance by 25%
  
  Great work everyone! Let's keep this momentum going into next week.
  
  Best regards,
  Alice`,
    time: "10:30 AM",
    starred: true,
    unread: true,
    folder: "inbox",
  },
  {
    id: 2,
    from: "GitHub",
    subject: "Security Alert: Dependencies",
    preview:
      "We found a potential security vulnerability in one of your dependencies...",
    body: `Security Alert: High Severity
  
  We found a potential security vulnerability in one of your dependencies.
  
  Repository: your-repo
  Package: example-package
  Severity: High
  Vulnerable versions: < 2.0.0
  Patched version: 2.0.0
  
  We recommend upgrading this package as soon as possible.
  
  GitHub Security`,
    time: "9:15 AM",
    starred: false,
    unread: true,
    folder: "inbox",
  },
  {
    id: 3,
    from: "Netflix",
    subject: "New Shows Added to Your List",
    preview: "Check out what's new on Netflix this week...",
    body: `New on Netflix
  
  We've just added new shows and movies we think you'll love:
  
  1. The Latest Blockbuster
  2. Award-winning Documentary
  3. New Season of Your Favorite Show
  4. Exclusive Netflix Original
  
  Start watching now!
  
  Netflix Team`,
    time: "Yesterday",
    starred: false,
    unread: false,
    folder: "inbox",
  },
  {
    id: 4,
    from: "David Miller",
    subject: "Project Deadline Update",
    preview: "Regarding the upcoming deadline, I wanted to discuss...",
    body: `Hi,
  
  I wanted to touch base about the upcoming project deadline. After reviewing our progress and remaining tasks, I think we should consider adjusting our timeline.
  
  Here's why:
  - Additional requirements from the client
  - Need for more thorough testing
  - Resource allocation challenges
  
  Can we schedule a meeting to discuss this?
  
  Best,
  David`,
    time: "Yesterday",
    starred: true,
    unread: false,
    folder: "inbox",
  },
];
