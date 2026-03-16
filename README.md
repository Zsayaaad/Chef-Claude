# Chef Claude

Chef Claude is a React project focused on practicing core state-driven UI patterns by building an interactive cooking assistant experience.

## What I built

- A component-based React app with interactive UI behavior.
- User actions that trigger updates through event listeners.
- Dynamic views that change based on current app state.
- Form handling for user input and flow control.

## What I learned

This project helped me practice:

1. Event listeners in React
2. State with `useState`
3. Conditional rendering
4. Forms and controlled inputs
5. State management strategies across components

## Run locally

1. Clone this repo and open it in your terminal.
2. Install dependencies:
   - `npm install`
3. Create a `.env` file in the project root (same level as `package.json`).
4. Add your Hugging Face key to `.env`:
   - `VITE_HUGGING_FACE_API_KEY=your_token_here`
5. Start the app:
   - `npm run dev`
6. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## How to get `VITE_HUGGING_FACE_API_KEY`

1. Go to https://huggingface.co and sign in (or create an account).
2. Open your profile menu (top-right) → **Settings**.
3. Go to **Access Tokens** (or **User Access Tokens**).
4. Click **New token**.
5. Give it a name (for example: `chef-claude-local`).
6. Choose appropriate permissions (a token that can call inference APIs is required).
7. Create the token and copy it.
8. Paste it into your `.env` file:
   - `VITE_HUGGING_FACE_API_KEY=hf_xxxxxxxxxxxxxxxxx`

Keep this key private and never share it publicly.

## Design reference

Chef Claude Figma Design: https://scrimba.com/links/figma-chef-claude
