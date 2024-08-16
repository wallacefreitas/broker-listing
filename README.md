## 🚀 Challenge

This repo was development using Node.js with TS/JS, Postgres, Chart.js and Handlebars. The main idea of this project was to use some design patterns with Clean Architecture.

To acccess the project, <a href="https://broker-listings.fly.dev/" target="_blank">click here</a>

Below I explained a little of patterns:

#### Clean Architecture - Backend

Using of layers concepts where external layer inject resources going to core application

## 🛠 Tech & Frameworks

In this projects the following technologies and frameworks were used:

| Tool            |     Used in   |
|---------------- |:-------------:|
| Node.js (v20)   |      🟢       |
| Express.js      |      🟢       |
| TypeScript      |      🟢       |
| TailwindCSS     |      🟢       |
| Chart.js        |      🟢       |
| Postgres (pg)   |      🟢       |
| handlebars      |      🟢       |
| Vitest          |      🟢       |
| pnpm            |      🟢       |

Legend: <br>
🟢 = Backend <br>

To more info:

> [Backend] See the file  [package.json](./package.json)

## 🧭 Running

### Clonning this repository

```bash

# Clone this repository
$ git clone https://github.com/wallacefreitas/broker-listing.git

```
---

#### Running in a server (Backend) 

>🚨 IMPORTANT: use Node v20 or latest

<br>

```bash

# Access the folder project in your terminal/cmd
$ cd broker-listings

# Rename the file .env.sample to .env
mv .env.sample .env

# Install the dependencies
$ pnpm install

# Run the application in development mode
$ pnpm run dev

# Run tests of application - Optional
$ pnpm run test

# The application will open in port:3001 - go to http://localhost:3001

```

## ⚙️ Services

| App             |    Host                             |   Port        |
|---------------- |:-----------------------------------:|:-------------:|
| backend         |  localhost                          |   3001        |


## 🔮 Future Implementations

✓ Better coverage of tests <br>

## 📝 License

Made with ♥️ by Wallace de Freitas
