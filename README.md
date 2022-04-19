# javascript-func

This package contains a Javascript utilities functions to help developers to start with a standard base to their developments.

<!-- TOC titleSize:2 tabSpaces:2 depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 skip:0 title:1 charForUnorderedList:* -->

## Table of Contents

---

-   [Installation](#Installation)
-   [Features](#Features)
    -   [Logger](#Logger)
        -   [Log](#Log)
    -   [Encryptation](#Encryptation)
        -   [Crypto](#Crypto)
    -   [Date](#Date)
        -   [DateFormat](#DateFormat)
-   [Release notes](#Release)
    <!-- -   [app.js](#appjs) -->

<!-- /TOC -->

## Installation

---

<!-- ```sh -->

    npm install javascript-func

<!-- ``` -->

## Features

---

In this package you will find the following features:

### **Logger**

#### **Log**

General features to log your code in terminal and daily files, based on [bunyan](https://www.npmjs.com/package/bunyan) package.
The output log format is: [yyyy-mm-dd date] LABEL: hostname/pid on server: DATA

> -   **info(data):** log with a INFO label
> -   **warn(data):** log with a WARN label
> -   **error(data):** log with a ERROR label
> -   **debug(data):** log with a DEBUG label
> -   **fatal(data):** log with a FATAL label

### **Encryptation**

#### **Crypto**

Encryption features that allows you to keep exposed information secure
Functions:

> -   **encrypt(data, key, output):** encrypt the data with the given key, the output value indicates if the function encrypt or not
> -   **decrypt(data, key, output):** decrypt the data with the given key, the output value indicates if the function decrypt or not
> -   **send(data, key, output):** encrypt the data with the given key to be sent as api response, the output boolean value indicates if the result is showed or not
> -   **receive(data, key, output):** decrypt the data with the given key to be receive as api request, the output boolean value indicates if the result is showed or not
> -   **encryptObject(object, key):** encrypt the object with the given key
> -   **encryptObject(object, key):** decrypt the object with the given key

### **Date**

#### **DateFormat**

Fomat date or date string to the following string formats DDMMYYYY, YYYYMMDD and HHMM

> -   **format(date, format):** Convert to date string in one of the following valid formats: DDMMYYYY, YYYYMMDD or HHMM

## Release notes

---

### **1.0.X**

Initial version with the following features:

-   Log
-   Crypto
-   DateFormat
