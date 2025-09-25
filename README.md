# 🎨 Color Generator

This is a web application that generates random colors in both HEX and RGB formats. It's a fun and practical project built with vanilla JavaScript, HTML, and CSS, showcasing fundamental DOM manipulation and event handling.

---

## ✨ Key Features

1. **Dual Color Generation:** The application offers two distinct modes for color generation:
    - **HEX Color Generator:** Click a button to instantly generate a random hexadecimal color value (e.g., `#a3b5c7`).
    - **RGB Color Generator:** Use individual range sliders for Red, Green, and Blue values to create a custom color in real-time.
2. **Live Preview:** The background of each section dynamically updates to reflect the generated or selected color, providing instant visual feedback.
3. **Copy to Clipboard:** A "Copy to Clipboard" button allows users to easily copy the generated HEX or RGB color code for use in other projects.
4. **Responsive Layout:** The design adapts to different screen sizes, ensuring a seamless experience on both desktops and mobile devices.

---

## 🛠️ Technology Stack

| Technology | Role |
| :--- | :--- |
| **HTML** | Structures the user interface with distinct sections for HEX and RGB color generation, and includes input sliders for interactive control. |
| **CSS** | Styles the application with a clean, modern aesthetic. It uses Flexbox for layout and transitions for button hover effects, creating a polished look. |
| **JavaScript (Vanilla)** | Manages all interactivity. It handles button clicks, slider input events, and the core logic for generating random color codes and updating the DOM. The `navigator.clipboard.writeText` API is used for the copy functionality. |

---

## 🚀 How to Run

0. **Access the color generator live here [Color Generator](https://prashin-tech-n-innov-color-generator.netlify.app/)**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Prashin006/vanilla-js-project-color-generator.git
    ```
2.  **Open the file:**
    Navigate to the project folder and open `index.html` in your web browser. The application is entirely client-side, so no server is needed.

