# T3 PostgreSQL Template with Drizzle and NextAuth

A Quick Template for converting the experimental App router version for the T3 stack into connecting to a PostgreSQL server instead of planetscale / MySQL. Uses JWT tokens and has template code for adding extra session props like role. Works with Github OAuth out of the box

## Features

- Feature 1: Configuration of DrizzleORM to allow for PostgreSQL Integration with Next-Auth.
- Feature 2: Custom Template code for adding properties to sessions upon Authorization.
- Feature 3: Addition of Github as an OAuth provider - with the necessary DrizzleORM schema defined.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed 
- A PostgreSQL database set up
- Git installed on your machine

## How to Get Started

Follow these steps to get your development environment running:

### 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/EthanAmato/T3-Postgres-Drizzle-Template
```

### 2. Navigate to the Project Directory

After cloning, change into the project directory:

```bash
cd [project directory]
```
Replace `[project directory]` with the name of the folder where the repository was cloned.

### 3. Install Dependencies

Install the necessary Node.js dependencies:

```bash
npm install
```

This command will install all dependencies listed in your `package.json` file.

### 4. Set Up the Database

Ensure your PostgreSQL database is running. Then, set up the database structure using the following command from Drizzle-Kit:

```bash
npm run db:push
```

This command will create the necessary tables and structures in your database as defined in your project.

### 5. Start the Development Server

Finally, start the development server:

```bash
npm run dev
```

This will start the server on a default port (usually 3000) and you can access the application in your browser at `http://localhost:3000`.

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b branch-name`.
3. Make your changes and commit them: `git commit -m 'commit message'`.
4. Push to the original branch: `git push origin [project name]/[location]`.
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## License

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
