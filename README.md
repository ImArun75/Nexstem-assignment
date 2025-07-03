# 🛠️ React Pipeline Editor – DAG Builder

An interactive, visually-driven **Directed Acyclic Graph (DAG) editor** built in React. Simulates the creation of real-time data pipelines and workflows using draggable, connectable nodes.

Live Demo: [🌐 View on Netlify](https://nexstem-assignment.netlify.app/)  



---

## ⚙️ Setup Instructions

# 1. Clone the repository
git clone git-repo
cd pipeline-editor

# 2. Install dependencies
npm install

# 3. Run the app locally
npm run dev

# 4. Build for production
npm run build
---

## 🚀 Features

- 🔧 Add custom-labeled nodes
- 🔗 Connect nodes via edges (with directionality)
- ⛔ Prevent self-loops and invalid connections
- 🔄 Auto-layout using Dagre
- 🧹 Delete selected nodes/edges with the `Delete` key
- ✅ Real-time DAG validation (cycle detection, connection checks)
- 👁️ JSON preview of graph state

---

## 📦 Tech Stack

- **React + Vite** – Frontend framework & fast build system
- **React Flow** – Graph rendering & interaction
- **Dagre** – Auto-layout engine for DAGs
- **Bootstrap** – For styling controls

---




## 🧠 Architectural Notes
ReactFlowProvider wraps the app to manage graph state.

Nodes and Edges are stored in useNodesState / useEdgesState for live updates.

CustomNode.js defines handles (target left, source right) to enforce DAG edge rules.

validateDAG() ensures:

Min. 2 nodes

No cycles (DFS)

All nodes connected

Auto-layout uses dagre.layout() to compute X/Y positioning.

---
## 📸 Screenshots

- **Control Panel with Action Buttons & DAG Status**
  
  <img width="383" alt="controlPannelImg" src="https://github.com/user-attachments/assets/a7e2683a-66db-4d8b-85e8-7bb7281e10a5" />

- **Node Label Prompt (User Input Dialog)**
  
  <img width="428" alt="NodeLableImg" src="https://github.com/user-attachments/assets/eb3d8701-5b77-4f58-a2b9-f7be41367c9f" />

- **Minimum Nodes Required (≥ 2 Nodes)**
  
  <img width="867" alt="Atleast2NodesImg" src="https://github.com/user-attachments/assets/3434eba7-b764-4e82-b743-b9a655d93ba0" />

- **Cycle Detection (With vs Without Cycle)**

  <table>
    <tr>
      <td align="center">
        <strong>❌ With Cycle</strong><br/>
        <img width="943" alt="WithCycleImg" src="https://github.com/user-attachments/assets/da51843a-5afa-4c21-8834-98a3c89b6207" />
      </td>
      <td align="center">
        <strong>✅ Without Cycle</strong><br/>
        <img width="948" alt="WithoutCycleImg" src="https://github.com/user-attachments/assets/55d5ae28-72dc-4d9e-ad6f-dbb1bbcd94e5" />
      </td>
    </tr>
  </table>

- **All Nodes Connected to At Least One Edge**
  
  <img width="938" alt="singleEdgeMultipleNodesImg" src="https://github.com/user-attachments/assets/de74e75b-1d64-4264-b5ed-3a14ff0273e2" />

---

## 📽️ Demo Video

[![Watch the demo](https://img.youtube.com/vi/427MDezxMXQ/0.jpg)](https://www.youtube.com/watch?v=427MDezxMXQ)

---

## 🧩 Challenges Faced
🔄 DAG Validation
One tricky part was checking if the pipeline is actually a valid DAG (no loops, all nodes connected). I used DFS (Depth-First Search) and had to carefully track which nodes were currently in the path to catch cycles. Also, making sure users couldn't connect a source to another source or target to another target took a bit of trial and error with the node handle positions.

🎯 Auto Layout
Getting the auto layout to work with Dagre was tough at first. I had to figure out how to convert my React Flow nodes and edges into Dagre’s format and then back again. Also, I had to re-calculate the positions so the nodes don’t get misplaced after layout.

💣 Build Errors
I ran into a bunch of build issues – JSX wasn't working because of loader issues. That was fixed by adjusting file extensions and letting Vite know to treat .js files as .jsx.
Another headache was that the dagre library wasn’t installed by default. After digging into errors, I fixed it with a simple:

#bash
npm install dagre
