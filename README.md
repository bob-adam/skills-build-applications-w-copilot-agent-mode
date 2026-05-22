# Build Applications with GitHub Copilot Agent Mode

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey bob-adam!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/bob-adam/skills-build-applications-w-copilot-agent-mode/issues/1)

## Frontend environment

The React frontend expects `VITE_CODESPACE_NAME` to be defined when you want to
call the backend through the Codespaces public URL.

Create `octofit-tracker/frontend/.env.local` with:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

If `VITE_CODESPACE_NAME` is not set, the frontend safely falls back to
`http://localhost:8000/api` to avoid generating `https://undefined-8000...`
URLs.

