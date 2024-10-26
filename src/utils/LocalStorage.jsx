const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Complete project documentation",
          "taskDescription": "Write and organize the project documentation for the client.",
          "active": true,
          "newTask": true,
          "completed": false,
          "field": true
        },
        {
          "taskTitle": "Fix login page bug",
          "taskDescription": "Resolve the issue with user authentication on the login page.",
          "active": true,
          "newTask": false,
          "completed": false,
          "field": false
        },
        {
          "taskTitle": "Update user roles",
          "taskDescription": "Update roles for all employees based on the new organizational structure.",
          "active": false,
          "newTask": false,
          "completed": true,
          "field": true
        },
        {
          "taskTitle": "Client meeting",
          "taskDescription": "Prepare for and attend the client meeting on Tuesday.",
          "active": true,
          "newTask": true,
          "completed": false,
          "field": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Research new tools",
          "taskDescription": "Investigate potential new tools for improving the development workflow.",
          "active": false,
          "newTask": true,
          "completed": false,
          "field": false
        },
        {
          "taskTitle": "Test API endpoints",
          "taskDescription": "Perform integration testing on the API endpoints.",
          "active": true,
          "newTask": false,
          "completed": false,
          "field": true
        },
        {
          "taskTitle": "Review team performance",
          "taskDescription": "Evaluate and provide feedback on the team's performance for the last quarter.",
          "active": false,
          "newTask": false,
          "completed": true,
          "field": false
        },
        {
          "taskTitle": "Fix front-end bug",
          "taskDescription": "Correct the styling issues on the user dashboard.",
          "active": true,
          "newTask": false,
          "completed": true,
          "field": true
        },
        {
          "taskTitle": "Update security patches",
          "taskDescription": "Apply new security patches to the server.",
          "active": true,
          "newTask": true,
          "completed": false,
          "field": true
        },
        {
          "taskTitle": "Deploy new release",
          "taskDescription": "Deploy the latest release to the production environment.",
          "active": true,
          "newTask": false,
          "completed": false,
          "field": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Write blog post",
          "taskDescription": "Write and publish the technical blog post for this month.",
          "active": true,
          "newTask": false,
          "completed": false,
          "field": true
        },
        {
          "taskTitle": "Create product demo",
          "taskDescription": "Develop a product demo video for the new feature launch.",
          "active": false,
          "newTask": true,
          "completed": false,
          "field": false
        },
        {
          "taskTitle": "Update marketing website",
          "taskDescription": "Revamp the homepage with the latest company news and events.",
          "active": true,
          "newTask": false,
          "completed": true,
          "field": false
        },
        {
          "taskTitle": "Organize team outing",
          "taskDescription": "Plan a team outing for next Friday.",
          "active": true,
          "newTask": true,
          "completed": false,
          "field": true
        },
        {
          "taskTitle": "Customer feedback review",
          "taskDescription": "Review feedback from customers and prioritize issues for the next sprint.",
          "active": true,
          "newTask": true,
          "completed": false,
          "field": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Fix bug in payment system",
          "taskDescription": "Resolve an issue with the payment gateway integration.",
          "active": true,
          "newTask": true,
          "completed": false,
          "field": true
        },
        {
          "taskTitle": "Deploy hotfix",
          "taskDescription": "Deploy a hotfix to production to address a critical bug.",
          "active": false,
          "newTask": false,
          "completed": true,
          "field": false
        },
        {
          "taskTitle": "Review project architecture",
          "taskDescription": "Review and update the project architecture for scalability.",
          "active": true,
          "newTask": false,
          "completed": false,
          "field": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Onboard new hires",
          "taskDescription": "Prepare onboarding materials for new employees joining next week.",
          "active": false,
          "newTask": true,
          "completed": false,
          "field": true
        },
        {
          "taskTitle": "Create training program",
          "taskDescription": "Design and develop a training program for new engineers.",
          "active": true,
          "newTask": false,
          "completed": false,
          "field": true
        },
        {
          "taskTitle": "Perform code review",
          "taskDescription": "Review and provide feedback on the latest code submissions.",
          "active": true,
          "newTask": false,
          "completed": true,
          "field": false
        },
        {
          "taskTitle": "Document new feature",
          "taskDescription": "Write technical documentation for the newly released feature.",
          "active": true,
          "newTask": true,
          "completed": false,
          "field": true
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
        
  export const setLocalStorage = () => {
          localStorage.setItem('employees',JSON.stringify(employees))
          localStorage.setItem('admin',JSON.stringify(admin))
      }
  
  export const getLocalStorage = (name) =>{
          return JSON.parse(localStorage.getItem(name))
      } 
  
  
     
  
  
  