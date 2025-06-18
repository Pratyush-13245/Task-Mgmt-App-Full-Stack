# 📝 Task Management API

A simple and scalable **Task Management REST API** built with **ASP.NET Core (.NET 8)** and **Entity Framework Core**. This API allows you to create, retrieve, and manage tasks, making it ideal for full-stack integration (e.g., with a React frontend).

---

## 🚀 Features

- Create new tasks
- Get a list of all tasks
- Integrate seamlessly with any frontend (like React)
- Built with .NET 8 and EF Core

---

## 🧰 Tech Stack

- **Backend**: ASP.NET Core Web API
- **ORM**: Entity Framework Core
- **Database**: SQL Server (LocalDB or your configured SQL instance)

---

## 📦 Getting Started

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- [SQL Server](https://www.microsoft.com/en-us/sql-server)
- [Visual Studio 2022+](https://visualstudio.microsoft.com/) or VS Code
- Git

---

### 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/taskmanagement-backend.git
   cd taskmanagement-backend
Restore dependencies

bash
Copy
Edit
dotnet restore
Update the database
Configure your appsettings.json connection string and run:

bash
Copy
Edit
dotnet ef database update
Run the project

bash
Copy
Edit
dotnet run
Test in browser
Visit https://localhost:7271/swagger to test the API.

📁 Project Structure
bash
Copy
Edit
taskmanagement/
├── Controllers/
│   └── TasksController.cs
├── Data/
│   └── AppDbContext.cs
├── Models/
│   └── TaskModel.cs
├── Program.cs
├── appsettings.json
📬 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create a new task

Screen Shots 
![image](https://github.com/user-attachments/assets/449beaba-5af2-414a-b5b1-376d432cedbc)
![image](https://github.com/user-attachments/assets/2f685dad-137e-429d-8e0d-97a269d6b7b3)


🤝 Contributing
Feel free to fork this repo and contribute! Pull requests are welcome.

📄 License
This project is open-source and available under the MIT License.

🌐 Frontend Repository
You can find the React frontend here:
🔗 https://github.com/your-username/taskmanagement-frontend

🙋‍♂️ Author
Developed with ❤️ by Pratyush Tripathi
