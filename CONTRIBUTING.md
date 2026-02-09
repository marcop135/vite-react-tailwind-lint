# Contributing to vite-react-tailwind-lint

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/vite-react-tailwind-lint.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Running the Development Server

```bash
npm run dev
```

### Running Tests

```bash
npm test              # Run tests once
npm run test:ui       # Run tests with UI
npm run test:coverage # Run tests with coverage
```

### Linting and Formatting

```bash
npm run lint      # Check for linting errors
npm run lint:fix  # Auto-fix linting errors
npm run format    # Format code with Prettier
```

## Code Style

- Follow the existing code style
- Use ESLint and Prettier configurations provided
- Write meaningful commit messages
- Keep components small and focused
- Use React.memo for performance optimization when appropriate

## Commit Guidelines

- Write clear, descriptive commit messages
- Use present tense ("Add feature" not "Added feature")
- Reference issues/PRs when applicable

## Pull Request Process

1. Ensure all tests pass: `npm test`
2. Ensure linting passes: `npm run lint`
3. Update documentation if needed
4. Submit a pull request with a clear description

## Questions?

Feel free to open an issue for any questions or concerns.
