# Mutual Funds Platform

## Overview
The Mutual Funds Platform is a comprehensive web application designed to provide detailed information about mutual funds, including their structure, risks, and factors influencing investment decisions. The platform caters to various user roles, including admins, investors, financial advisors, and data analysts.

## Features
- **Admin Functionality**: Manage user activities, update content, and oversee platform management.
- **Investor Functionality**: Explore mutual funds, compare options, and manage investments.
- **Advisor Functionality**: Provide investment advice, create educational content, and assist users in selecting mutual funds.
- **Analytics Functionality**: Analyze investment trends, update fund performance data, and generate reports.

## Project Structure
```
mutual-funds-platform
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── adminController.ts
│   │   ├── investorController.ts
│   │   ├── advisorController.ts
│   │   └── analyticsController.ts
│   ├── routes
│   │   ├── adminRoutes.ts
│   │   ├── investorRoutes.ts
│   │   ├── advisorRoutes.ts
│   │   └── analyticsRoutes.ts
│   ├── models
│   │   ├── Fund.ts
│   │   ├── User.ts
│   │   ├── Investment.ts
│   │   └── AnalyticsData.ts
│   ├── middleware
│   │   ├── auth.ts
│   │   └── roleValidation.ts
│   ├── services
│   │   ├── fundService.ts
│   │   ├── userService.ts
│   │   └── analyticsService.ts
│   ├── types
│   │   ├── index.ts
│   │   ├── User.ts
│   │   └── Fund.ts
│   └── utils
│       └── helpers.ts
├── public
│   └── assets
├── views
│   ├── admin
│   ├── investor
│   ├── advisor
│   └── analytics
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd mutual-funds-platform
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.