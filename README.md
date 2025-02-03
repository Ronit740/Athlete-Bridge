# **Support Platform for Underprivileged Athletes**

## **Overview**
This project is an initiative to support underprivileged athletes by providing them with resources, mentorship, sponsorships, and crowdfunding opportunities. It is a **frontend-only web application** built using **React.js** and **AI/LLM APIs** for intelligent responses. The application will also use **mock data** stored in JSON files where necessary.

The goal is to eventually compile all pages into a **Single Page Application (SPA)** using **React Router** for navigation. The API for AI integration will be provided, and we will be using a **structured output method** from the LLM to ensure consistent data formatting. The frontend components can be designed using **UIVerse.io, Tailblocks**, or similar libraries, but everything must be built as **React components** for reusability and modularity.

This project will not use JSX files. Instead, React will be imported into standard JavaScript (`.js`) files.

---

## **Project Structure**

```
📂 support-athletes-platform
│── 📂 public
│── 📂 src
│    ├── 📂 components
│    │    ├── AthleteDashboard.js
│    │    ├── ReelsSection.js
│    │    ├── TrainingResources.js
│    │    ├── MentorshipPrograms.js
│    │    ├── SponsorshipMarketplace.js
│    │    ├── Crowdfunding.js
│    │    ├── Chatbot.js
│    │    ├── Navbar.js
│    │    ├── Footer.js
│    ├── 📂 assets
│    ├── 📂 data
│    │    ├── athletes.json
│    │    ├── mentors.json
│    │    ├── training-resources.json
│    │    ├── sponsorships.json
│    │    ├── crowdfunding.json
│    ├── 📂 utils
│    │    ├── api.js (LLM API integration)
│    ├── 📂 pages
│    │    ├── Home.js
│    │    ├── About.js
│    │    ├── Contact.js
│    ├── App.js
│    ├── index.js
│── 📜 package.json
│── 📜 README.md
```

---

## **Project Features & Individual Tasks**

### **1. Athlete Dashboard - Frontend Developer**
- **File:** `AthleteDashboard.js`
- **Responsibilities:**
  - Import React and define a functional component.
  - Fetch mock data from `athletes.json`.
  - Display athlete profile, progress bars, and stats.
  - Implement a sidebar navigation menu for quick access.
  - Ensure responsiveness using Tailwind CSS.
  - **Example starting code:**
    ```js
    import React from 'react';
    import data from '../data/athletes.json';
    
    function AthleteDashboard() {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold">Athlete Dashboard</h1>
            </div>
        );
    }
    export default AthleteDashboard;
    ```

### **2. Reels Section - Frontend Developer**
- **File:** `ReelsSection.js`
- **Responsibilities:**
  - Import React and create a functional component.
  - Fetch video reel data from `reels.json`.
  - Display reels in a grid format using cards.
  - Implement a modal popup to play videos.
  - Ensure a smooth UI with Tailwind CSS.
  - **Example starting code:**
    ```js
    import React, { useState } from 'react';
    import reelsData from '../data/reels.json';
    
    function ReelsSection() {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold">Reels Section</h1>
            </div>
        );
    }
    export default ReelsSection;
    ```

### **3. AI Chatbot - AI/LLM Integrator**
- **File:** `Chatbot.js`, `api.js`
- **Responsibilities:**
  - Integrate LLM API for structured chatbot responses.
  - Implement a chat UI with input and response sections.
  - Fetch responses via `api.js` and display them in the chat UI.
  - **Example starting code:**
    ```js
    import React, { useState } from 'react';
    import { fetchChatbotResponse } from '../utils/api';
    
    function Chatbot() {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold">AI Chatbot</h1>
            </div>
        );
    }
    export default Chatbot;
    ```

---

## **GitHub Workflow (For Beginners)**

### **1. Forking and Cloning the Repository**
If you're new to GitHub, follow these steps:
1. **Fork the Repository**: Click on the "Fork" button at the top-right of the project repository on GitHub.
2. **Clone Your Forked Repository**:
   ```bash
   git clone https://github.com/your-username/support-athletes-platform.git
   cd support-athletes-platform
   ```

### **2. Creating a New Branch**
Before making any changes, create a new branch:
```bash
git checkout -b feature-your-task
```

### **3. Making Changes & Committing**
After making necessary changes:
```bash
git add .
git commit -m "Added feature XYZ"
```

### **4. Pushing Changes to GitHub**
```bash
git push origin feature-your-task
```

### **5. Creating a Pull Request (PR)**
1. Go to your forked repository on GitHub.
2. Click "Compare & pull request".
3. Provide a clear description of the changes and submit the PR.
4. Wait for approval before merging.

---

## **Final Compilation Instructions**
1. Ensure all components are **self-contained** and follow the correct import/export pattern.
2. Use **React Router** for seamless navigation.
3. All API calls should be made via `api.js`.
4. **Mock data should be placed inside `/data/` folder and imported where needed.**
5. **Tailwind CSS should be used for styling** to ensure a clean and responsive UI.
6. **Before finalizing the project:**
   - Remove unnecessary console logs.
   - Ensure all routes are properly mapped.
   - Optimize component rendering for performance.

---

## **Conclusion**
This guide ensures that each team member knows their role and how to contribute. The project is designed to be beginner-friendly, using **React components**, **structured LLM output**, and **modular design** to make it easy to scale and compile into a **Single Page Application (SPA)**. The added GitHub workflow steps will ensure that even those new to version control can contribute effectively.

