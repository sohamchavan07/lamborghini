## Project info

## How can I edit this code?

There are several ways of editing your application.


Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository uLAMBORGHINIsing the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Interactive 3D Models

![giphy](https://github.com/user-attachments/assets/d56c5be0-9450-45cd-91c8-814077839460)

Experience Lamborghini models in-browser with embedded, interactive 3D viewers.

- **Available models**: Aventador SVJ, Revuelto, Countach (1989), Sián, Huracán
- **Where to find**: Visit the homepage and scroll to the "3D MODELS" section, or open `/#three-d` while the app is running (e.g., `http://localhost:5173/#three-d`).
- **How to interact**:
  - **Orbit**: Click-drag to rotate
  - **Pan**: Right-click drag (or two-finger drag on trackpad)
  - **Zoom**: Mouse wheel or pinch
  - **Fullscreen/XR**: Use the controls in the viewer
- **Notes**: 3D viewers stream from Sketchfab; initial load depends on your network and may use more GPU resources than static images.
