# 🧩 TypeScript Conversion Checkpoint

## 📖 Project Overview
This project demonstrates how to **convert React JavaScript components to TypeScript**.  
It contains two components — one functional and one class-based — that have been rewritten from plain JavaScript to TypeScript to showcase typing for props, state, and components.

---

## 🚀 Features
- ✅ Conversion of JavaScript to TypeScript components  
- ✅ Use of **TypeScript interfaces** for props and state  
- ✅ Demonstration of **React.FC** and **Class Component** typing  
- ✅ Simple counter functionality and greeting example  
- ✅ Organized project structure with comments for learning  

---

## 🧱 Project Structure
typescript-checkpoint/
│
├── src/
│ ├── App.tsx # Main application component
│ ├── Greeting.tsx # Functional component (uses typed props)
│ ├── Counter.tsx # Class component (uses typed state)
│ ├── index.tsx # Entry file
│ ├── App.css # Styling
│ └── ...
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation

yaml
Copy code

---

## 🧰 Technologies Used
- **React** (with TypeScript)
- **Node.js** and **npm**
- **Create React App**
- **Git & GitHub** for version control

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/typescript-checkpoint.git
2️⃣ Navigate into the project directory
bash
Copy code
cd typescript-checkpoint
3️⃣ Install dependencies
bash
Copy code
npm install
4️⃣ Start the development server
bash
Copy code
npm start
Your app will open automatically in your browser at:

arduino
Copy code
http://localhost:3000
🧩 Components Overview
1. Greeting Component (Greeting.tsx)
A simple functional component that receives a name as a prop and displays a greeting.

tsx
Copy code
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};
2. Counter Component (Counter.tsx)
A class component that uses a typed state to increment a number when a button is clicked.

tsx
Copy code
interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  state: CounterState = { count: 0 };

  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
📦 Git & GitHub Workflow
Initialize Git
bash
Copy code
git init
git add .
git commit -m "Initial commit - TypeScript Conversion Checkpoint"
Connect to GitHub
bash
Copy code
git remote add origin https://github.com/yourusername/typescript-checkpoint.git
git branch -M main
git push -u origin main
💡 Learning Outcomes

Understand how to define props and state types in TypeScript.

Learn to work with React.FC and Component<Props, State>.

Gain confidence in setting up and running a TypeScript React project.

Practice version control using Git and GitHub.

👨‍💻 Author

Brian Okech Wade
Diploma in International Relations and Diplomacy | Aspiring Diplomat | Developer Enthusiast
🌍 Kenya
