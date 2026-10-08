# MongoDB QA Testing Practice

This repository contains my learning and hands-on practice with **MongoDB**, with a primary focus on understanding how MongoDB can be used for **QA and database testing**.

The goal of this repository is to build a practical understanding of NoSQL databases and learn how to validate application data, business rules, and database behaviour from a QA perspective.

---

## 📚 Topics Covered

### 1. MongoDB Setup
- MongoDB database and collection basics
- Using `mongosh`
- Connecting MongoDB with MongoDB Compass
- Creating and managing databases and collections

### 2. CRUD Operations
- Create / Insert documents
- Read / Find documents
- Update documents
- Delete documents
- `findOne()` and `find()`
- `updateOne()` and `updateMany()`
- `deleteOne()` and `deleteMany()`

### 3. Querying & Filtering
- Query operators
- Comparison operators
- Logical operators
- Filtering documents based on conditions
- `$exists`
- `$lte`, `$gte`, `$lt`, `$gt`
- Working with arrays and nested fields

### 4. Projection, Sorting & Pagination
- Selecting required fields using projection
- Sorting results
- `skip()`
- `limit()`
- Basic pagination-related queries

### 5. Updating Documents
- `$set`
- `$inc`
- `$push`
- Updating single and multiple documents
- Validating updated data

### 6. Aggregation Pipeline
- `$match`
- `$project`
- `$group`
- `$sort`
- Basic aggregation-based data validation
- Calculating totals and grouped results

### 7. Indexes
- Understanding indexes
- Creating indexes
- Checking existing indexes
- Understanding how indexes can improve query performance

---

## 🧪 Database Testing for QA

A major focus of this repository is understanding how MongoDB can be used during QA activities.

Some of the QA scenarios practiced include:

- Verifying whether application data is correctly stored in MongoDB
- Checking whether an order/document is created after an application action
- Validating updated values after performing an operation from the application
- Checking whether required fields exist
- Validating business rules at database level
- Checking invalid or unexpected values
- Verifying calculated totals
- Validating order status and other state changes
- Comparing application data with database data
- Using aggregation queries to validate business calculations

