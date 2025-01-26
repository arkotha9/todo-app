1. Initialize a project with 'npm init' command and Installed express
2. Build backend with server.js code. Define the middleware functions you wnat to use and the routes for the resquest-response cycle
2.5 Study up on HTTP request response cycle and the functions
3. If PORT in use, identify the process id by 'lsof -i :<port_number>' and kill by 'kill -9 pid'

Add CRUD functionality:
- Build sqlite database and setup database with database.js

-- Escapng SQL injetion attack:
The ? is a placeholder for the task value.
The [task] array provides the actual value to be inserted.
The database engine safely escapes the value of task, ensuring it cannot alter the SQL query structure.
This approach effectively mitigates the risk of SQL injection attacks by ensuring that user input is always treated as data, not as part of the SQL command.

---
1. forrst initaize git in lcoal repo
2. Add remote repo as origin
