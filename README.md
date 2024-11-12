<b>Project Overview</b> <br>
The Currency Converter website is a user-friendly, real-time currency exchange tool built using React as the primary framework, with Tailwind CSS for styling and responsive design. The application is designed to allow users to convert amounts between multiple currencies, leveraging real-time exchange rates. By integrating various React hooks (including built-in hooks like useId, useState, and useEffect as well as custom hooks), the app provides a smooth and interactive experience with optimal code organization and reusability.<br><br>
<b>Technology Stack</b><br>
<b>Frontend</b> : React, HTML, CSS, JavaScript<br>
<b>Styling</b> : Tailwind CSS<br>
<b>State Management</b> : React hooks like useState and useEffect<br>
<b>Custom Hooks</b> : User-defined hooks for better separation of logic<br><br>

<b>React Hooks in Use</b><br>
<b>useId </b>: Generates unique identifiers for accessibility in form elements, ensuring that each currency dropdown and input field has a unique ID.<br>
<b>useState</b> : Manages state for user inputs like selected currencies, input amounts, and conversion results.<br>
<b>useEffect </b>: Fetches the latest exchange rates on component mount and refreshes them based on user interactions or a set interval.<br>
<b>Custom Hooks </b>: Encapsulates API requests and data-fetching logic within custom hooks to make the codebase modular and reusable.<br><br>

<b>User-defined Hooks</b><br>
<b>useCurr </b>: Handles API requests to fetch currency data, manages loading and error states, and provides formatted data for the main components.<br><br>

<b>Core Functionalities</b><br>
<b>Currency Selection </b>: Allows users to select the base and target currencies from dropdown menus.<br>
<b>Amount Input</b>: Lets users enter the amount to be converted in the base currency.<br>
<b>Result Display </b>: Shows the converted amount in real-time based on the most recent exchange rate.<br>
<b>Swap Currencies </b>: Provides a quick option to swap the base and target currencies for ease of comparison.<br>
